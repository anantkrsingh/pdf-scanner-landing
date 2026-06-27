import { cn } from "@/lib/utils"

/**
 * App icon mark — a compact, inline version of /public/logo.svg.
 * CamScanner-style blue rounded square with a scan viewfinder framing a page.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={cn("size-9", className)}
      role="img"
      aria-label="PDF Scanner logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lm-bg" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2E86FF" />
          <stop offset="0.55" stopColor="#1769FF" />
          <stop offset="1" stopColor="#0B47C2" />
        </linearGradient>
        <linearGradient id="lm-page" x1="160" y1="150" x2="352" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E8F0FF" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="512" height="512" rx="116" fill="url(#lm-bg)" />
      <g stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" opacity="0.92" fill="none">
        <path d="M126 178 L126 146 Q126 126 146 126 L178 126" />
        <path d="M386 178 L386 146 Q386 126 366 126 L334 126" />
        <path d="M126 334 L126 366 Q126 386 146 386 L178 386" />
        <path d="M386 334 L386 366 Q386 386 366 386 L334 386" />
      </g>
      <path
        d="M186 168 H300 L334 202 V356 Q334 366 324 366 H186 Q176 366 176 356 V178 Q176 168 186 168 Z"
        fill="url(#lm-page)"
      />
      <path d="M300 168 L334 202 H310 Q300 202 300 192 Z" fill="#BBD2FF" />
      <g stroke="#2E86FF" strokeWidth="14" strokeLinecap="round" opacity="0.55">
        <line x1="200" y1="236" x2="288" y2="236" />
        <line x1="200" y1="268" x2="310" y2="268" />
        <line x1="200" y1="300" x2="262" y2="300" />
      </g>
      <rect x="166" y="312" width="178" height="12" rx="6" fill="#FF7A1A" />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-lg font-bold tracking-tight">
        PDF<span className="text-primary">Scanner</span>
      </span>
    </span>
  )
}
