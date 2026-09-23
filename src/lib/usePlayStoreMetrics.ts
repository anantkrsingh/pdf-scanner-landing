import { useEffect, useState } from "react";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.pdf.scan";

/** Shape returned by /api/play-metrics */
interface PlayMetrics {
  rating: number | null;
  ratingCount: number | null;
  installs: string | null;
  title: string | null;
  fetchedAt: string;
}

/** Values used by the UI — always strings so they're ready to render */
export interface DisplayMetrics {
  rating: string;
  ratingCount: string;
  installs: string;
  loading: boolean;
  error: boolean;
}

/** Fallback shown while loading or when the API call fails */
const FALLBACK: Omit<DisplayMetrics, "loading" | "error"> = {
  rating: "—",
  ratingCount: "—",
  installs: "—",
};

function formatRatingCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K+`;
  return n.toLocaleString();
}

/** Determine the API base URL: same origin in prod, localhost:5174 in dev */
function apiBase(): string {
  if (typeof window === "undefined") return "";
  const { protocol, hostname } = window.location;
  // Vite dev server runs on 5173/5174; Vercel API isn't available there
  // so we point directly at the deployed function or a local vercel dev server
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    // Try Vercel dev (vercel dev usually runs on port 3000)
    return `${protocol}//${hostname}:3000`;
  }
  return ""; // same origin on production
}

export function usePlayStoreMetrics(): DisplayMetrics {
  const [state, setState] = useState<DisplayMetrics>({
    ...FALLBACK,
    loading: true,
    error: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const base = apiBase();
        const res = await fetch(`${base}/api/play-metrics`, {
          // 10 s timeout
          signal: AbortSignal.timeout(10_000),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: PlayMetrics = await res.json();

        if (cancelled) return;

        setState({
          rating:
            data.rating != null
              ? `${data.rating.toFixed(1)}★`
              : FALLBACK.rating,
          ratingCount:
            data.ratingCount != null
              ? formatRatingCount(data.ratingCount)
              : FALLBACK.ratingCount,
          installs: data.installs ?? FALLBACK.installs,
          loading: false,
          error: false,
        });
      } catch {
        if (!cancelled) {
          setState({ ...FALLBACK, loading: false, error: true });
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
