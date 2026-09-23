import type { VercelRequest, VercelResponse } from "@vercel/node";

const APP_ID = "com.pdf.scan";
const PLAY_URL = `https://play.google.com/store/apps/details?id=${APP_ID}&hl=en&gl=US`;

/** Cache the result for 6 hours to avoid hammering Google */
let cache: { data: PlayMetrics; ts: number } | null = null;
const CACHE_MS = 6 * 60 * 60 * 1000;

export interface PlayMetrics {
  appId: string;
  rating: number | null;
  ratingCount: number | null;
  installs: string | null;
  title: string | null;
  storeUrl: string;
  fetchedAt: string;
}

function parseNumber(raw: string): number | null {
  const n = parseFloat(raw.replace(/,/g, ""));
  return isNaN(n) ? null : n;
}

function extractInstalls(html: string): string | null {
  const patterns = [
    /"numDownloads"\s*:\s*"([^"]+)"/,
    /(\d[\d,]+\+?)\s*downloads?/i,
    /Downloads<\/span>[^>]*>([^<]+)</i,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return m[1].trim();
  }
  const jMatch = html.match(/\[\[null,\s*"([\d,]+\+?)"/);
  if (jMatch) return jMatch[1];
  return null;
}

function extractRating(html: string): number | null {
  const aria = html.match(/aria-label="Rated ([\d.]+) stars out of 5/i);
  if (aria) return parseNumber(aria[1]);

  const m =
    html.match(/"starRating"\s*:\s*"([\d.]+)"/) ||
    html.match(/Rated\s+([\d.]+)\s+stars/i) ||
    html.match(/"([\d.]+) out of 5 stars"/i);
  if (m) return parseNumber(m[1]);

  return null;
}

function extractRatingCount(html: string): number | null {
  const m =
    html.match(/"reviews"\s*:\s*"([\d,]+)"/) ||
    html.match(/([\d,]+)\s+ratings/i) ||
    html.match(/([\d,]+)\s+reviews/i);
  if (m) return parseNumber(m[1]);
  return null;
}

function extractTitle(html: string): string | null {
  const m =
    html.match(/<title>([^<]+)<\/title>/) ||
    html.match(/"name"\s*:\s*"([^"]+)"/);
  if (m) return m[1].split(" - ")[0].trim();
  return null;
}

async function scrape(): Promise<PlayMetrics> {
  const res = await fetch(PLAY_URL, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });

  if (!res.ok) {
    throw new Error(`Play Store fetch failed: ${res.status}`);
  }

  const html = await res.text();

  return {
    appId: APP_ID,
    rating: extractRating(html),
    ratingCount: extractRatingCount(html),
    installs: extractInstalls(html),
    title: extractTitle(html),
    storeUrl: PLAY_URL,
    fetchedAt: new Date().toISOString(),
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  try {
    const now = Date.now();
    if (!cache || now - cache.ts > CACHE_MS) {
      cache = { data: await scrape(), ts: now };
    }
    res
      .setHeader("Cache-Control", "s-maxage=21600, stale-while-revalidate=3600")
      .json(cache.data);
  } catch (err) {
    console.error("[play-metrics]", err);
    res.status(502).json({ error: "Failed to fetch Play Store metrics" });
  }
}
