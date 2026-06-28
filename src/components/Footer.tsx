import { Link } from "react-router-dom"
import { Mail } from "lucide-react"

import { Logo } from "@/components/Logo"
import { GooglePlayBadge } from "@/components/GooglePlayBadge"

const CONTACT_EMAIL = "contactzodlabs@gmail.com"

export function Footer() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            Scan, sign and share crisp PDFs from your pocket. Turn any document
            into a high-quality scan in seconds.
          </p>
          <GooglePlayBadge className="block" />
        </div>

        <FooterCol
          title="Product"
          links={[
            { label: "Features", href: "/#features" },
            { label: "How it works", href: "/#how" },
            { label: "Pricing", href: "/#pricing" },
            { label: "Download", href: "/#download" },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { label: "FAQ", href: "/#faq" },
            { label: "Privacy Policy", href: "/privacy", internal: true },
          ]}
        />

        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Contact</h4>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4" />
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} PDF Scanner. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-primary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; internal?: boolean }[]
}) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            {link.internal ? (
              <Link
                to={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
