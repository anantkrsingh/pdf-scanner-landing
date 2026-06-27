import { useEffect, useRef, useState } from "react"
import {
  ScanLine,
  FileSignature,
  FileText,
  Cloud,
  ShieldCheck,
  Sparkles,
  Star,
  Check,
  ArrowRight,
  Crop,
  Languages,
  Share2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LogoMark } from "@/components/Logo"
import { GooglePlayBadge } from "@/components/GooglePlayBadge"

const features = [
  {
    icon: ScanLine,
    title: "Auto edge detection",
    desc: "Smart borders snap to the page and flatten it into a crisp, glare-free scan.",
  },
  {
    icon: Languages,
    title: "OCR in 60+ languages",
    desc: "Extract editable, searchable text from any scan and copy it anywhere.",
  },
  {
    icon: FileSignature,
    title: "Sign & annotate",
    desc: "Add your signature, stamps and notes without ever printing a page.",
  },
  {
    icon: Crop,
    title: "Pro retouch",
    desc: "Auto-enhance brightness, remove shadows and whiten backgrounds in one tap.",
  },
  {
    icon: Cloud,
    title: "Sync everywhere",
    desc: "Your documents stay backed up and in sync across all your devices.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    desc: "Lock sensitive files behind a PIN and keep scans encrypted on device.",
  },
]

const steps = [
  {
    icon: ScanLine,
    title: "Scan",
    desc: "Point your camera at any document — receipts, IDs, whiteboards or contracts.",
  },
  {
    icon: Sparkles,
    title: "Enhance",
    desc: "Auto-crop and filters turn the photo into a clean, professional-grade scan.",
  },
  {
    icon: Share2,
    title: "Share",
    desc: "Export a polished PDF or JPEG and send it by email, link or cloud in seconds.",
  },
]

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Everything you need to scan on the go.",
    features: [
      "Unlimited scans",
      "Auto edge detection",
      "PDF & JPEG export",
      "Basic filters",
    ],
    cta: "Get started",
    variant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$3.99",
    period: "per month",
    desc: "For power users who scan every day.",
    features: [
      "Everything in Free",
      "OCR in 60+ languages",
      "Sign & annotate",
      "Cloud sync & backup",
      "PIN-locked folders",
      "No watermarks",
    ],
    cta: "Start free trial",
    variant: "brand" as const,
    featured: true,
  },
  {
    name: "Teams",
    price: "$9.99",
    period: "per user / mo",
    desc: "Shared workspaces for your whole team.",
    features: [
      "Everything in Pro",
      "Shared folders",
      "Admin controls",
      "Priority support",
    ],
    cta: "Contact sales",
    variant: "outline" as const,
  },
]

const faqs = [
  {
    q: "Is PDF Scanner free to use?",
    a: "Yes. The core scanning, auto-cropping and PDF export are free forever. Pro unlocks OCR, signatures, cloud sync and removes watermarks.",
  },
  {
    q: "Do my documents leave my phone?",
    a: "Scans stay on your device by default. Cloud sync is opt-in and every uploaded file is encrypted in transit and at rest.",
  },
  {
    q: "Which file formats can I export?",
    a: "Export single or multi-page PDFs, as well as JPEG and PNG images. Pro users can also export searchable PDFs with embedded OCR text.",
  },
  {
    q: "Can I scan IDs and receipts?",
    a: "Absolutely. Dedicated ID-card and receipt modes auto-fit the layout so the result looks clean and print-ready.",
  },
]

const stats = [
  { value: "50M+", label: "Downloads" },
  { value: "4.8★", label: "Play Store rating" },
  { value: "60+", label: "OCR languages" },
  { value: "180+", label: "Countries" },
]

export function Landing() {
  return (
    <main className="overflow-x-hidden">
      {/* ===== Hero ===== */}
      <section className="relative isolate pt-36 pb-20 sm:pt-44 sm:pb-28">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand/25 via-brand/5 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.foreground/4)_1px,transparent_0)] [background-size:28px_28px] opacity-40" />
        </div>

        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="flex justify-center">
            <Badge variant="accent" className="px-4 py-1.5">
              <Star className="size-3.5 fill-current" />
              Rated 4.8 by 2M+ users
            </Badge>
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
            Scan anything into a{" "}
            <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text text-transparent">
              perfect PDF
            </span>{" "}
            in seconds
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            PDF Scanner turns your phone into a pocket scanner. Capture
            documents, IDs and receipts with razor-sharp clarity, then sign,
            OCR and share them anywhere.
          </p>

          <div
            id="download"
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <GooglePlayBadge />
            <Button variant="outline" size="lg" asChild>
              <a href="#features">
                See features <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          {/* Hero device mock */}
          <div className="relative mx-auto mt-16 max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-b from-brand/20 to-transparent blur-2xl" />
            <div className="rounded-[2.5rem] border-8 border-foreground/90 bg-background p-3 shadow-2xl">
              <div className="overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-brand to-brand-deep p-6 text-left text-white">
                <div className="flex items-center justify-between">
                  <LogoMark className="size-10" />
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                    Scanning…
                  </span>
                </div>
                <div className="mt-6 rounded-xl bg-white/95 p-4 shadow-inner">
                  <div className="flex items-center gap-2 text-brand-deep">
                    <FileText className="size-5" />
                    <span className="text-sm font-semibold">Invoice_2026.pdf</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-2 w-3/4 rounded-full bg-brand/20" />
                    <div className="h-2 w-full rounded-full bg-brand/15" />
                    <div className="h-2 w-5/6 rounded-full bg-brand/15" />
                    <div className="h-2 w-2/3 rounded-full bg-brand/15" />
                  </div>
                  <div className="mt-4 h-1 w-full rounded-full bg-brand-accent" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px]">
                  {["Crop", "Enhance", "Export"].map((s) => (
                    <div key={s} className="rounded-lg bg-white/15 py-2 font-medium">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="border-y bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-primary sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to go paperless"
          subtitle="Powerful scanning tools that fit in your pocket — no printer, no scanner, no hassle."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card
              key={f.title}
              className="group transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-brand/5"
            >
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-b from-brand/15 to-brand/5 text-primary transition-colors group-hover:from-brand group-hover:to-brand-deep group-hover:text-white">
                  <f.icon className="size-6" />
                </div>
                <CardTitle className="mt-4 text-lg">{f.title}</CardTitle>
                <CardDescription className="text-[0.95rem] leading-relaxed">
                  {f.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section id="how" className="border-y bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="How it works"
            title="Three taps to a flawless scan"
            subtitle="From crumpled paper to a clean, shareable PDF — faster than finding a printer."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gradient-to-b from-brand to-brand-deep text-white shadow-lg shadow-brand/25">
                  <step.icon className="size-7" />
                </div>
                <div className="mt-5 flex items-center justify-center gap-2">
                  <span className="text-sm font-bold text-primary">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, honest pricing"
          subtitle="Start free. Upgrade only when you need the pro tools."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.featured
                  ? "relative border-primary/40 shadow-xl shadow-brand/10 ring-1 ring-primary/20"
                  : ""
              }
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-brand-deep px-3 py-1 text-xs font-semibold text-white shadow">
                  Most popular
                </span>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">
                    /{plan.period}
                  </span>
                </div>
                <CardDescription className="mt-1">{plan.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.variant} className="w-full" size="lg">
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="border-y bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            subtitle="Everything you might want to know before you scan your first page."
          />
          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border bg-card px-5 py-4 shadow-sm [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {faq.q}
                  <span className="text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Download CTA ===== */}
      <DownloadCTA />
    </main>
  )
}

/**
 * Gradient CTA that shrinks on scroll: as the card travels up toward the
 * footer, it scales down and its corners round more — a scroll-linked
 * "peel away" effect. Respects prefers-reduced-motion.
 */
function DownloadCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    let raf = 0
    const update = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // Start shrinking the moment the card enters from the bottom of the
      // viewport (top at vh) and reach full shrink once it's well in view
      // (top near the top quarter of the screen).
      const start = vh
      const end = vh * 0.25
      const p = Math.min(Math.max((start - rect.top) / (start - end), 0), 1)
      setProgress(p)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const scale = 1 - progress * 0.14
  const radius = 24 + progress * 40

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div
        ref={ref}
        className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-deep px-8 py-16 text-center text-white shadow-2xl shadow-brand/20 will-change-transform sm:px-16"
        style={{
          transform: `scale(${scale})`,
          borderRadius: `${radius}px`,
          transition: "transform 0.15s ease-out, border-radius 0.15s ease-out",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="relative">
          <LogoMark className="mx-auto size-16" />
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your pocket scanner is one tap away
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Join over 50 million people who scan, sign and share documents the
            smarter way. Free to download.
          </p>
          <div className="mt-8 flex justify-center">
            <GooglePlayBadge />
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
    </div>
  )
}
