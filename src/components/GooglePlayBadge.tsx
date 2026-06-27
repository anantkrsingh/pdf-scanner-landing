import { cn } from "@/lib/utils"

/**
 * Official "Get it on Google Play" badge.
 * Swap `href` for the real Play Store listing when available.
 */
export function GooglePlayBadge({
  href = "#",
  className,
}: {
  href?: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Get it on Google Play"
      className={cn(
        "inline-flex transition-transform hover:-translate-y-0.5 hover:opacity-90",
        className
      )}
    >
      <img
        src="/GetItOnGooglePlay_Badge_Web_color_English.png"
        alt="Get it on Google Play"
        className="h-14 w-auto"
        loading="lazy"
        decoding="async"
      />
    </a>
  )
}
