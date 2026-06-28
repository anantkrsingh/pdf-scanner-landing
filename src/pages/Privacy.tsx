import { Link } from "react-router-dom"
import { ArrowLeft, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

const CONTACT_EMAIL = "contactzodlabs@gmail.com"
const LAST_UPDATED = "June 27, 2026"

const sections = [
  {
    id: "intro",
    title: "1. Introduction",
    body: [
      "PDF Scanner (“we”, “our”, or “us”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what data we collect, how we use it, and the choices you have when you use our mobile application and related services (the “Service”).",
      "By using PDF Scanner, you agree to the practices described in this policy. If you do not agree, please discontinue use of the Service.",
    ],
  },
  {
    id: "data-we-collect",
    title: "2. Information We Collect",
    body: [
      "We collect only the information needed to provide and improve the Service:",
    ],
    list: [
      "Documents & scans: Images and PDFs you create stay on your device by default. They are uploaded to the cloud only when you explicitly enable sync or backup.",
      "Account information: If you create an account, we store your email address and authentication details.",
      "Usage data: Anonymous, aggregated analytics such as feature usage and crash reports help us improve stability and performance.",
      "Device information: Basic technical details (device model, OS version, app version) used for compatibility and support.",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    body: ["We use the information we collect to:"],
    list: [
      "Provide core scanning, OCR, signing and export features.",
      "Sync and back up your documents across devices when you opt in.",
      "Diagnose problems, prevent abuse and improve the Service.",
      "Respond to your support requests and important service notices.",
    ],
  },
  {
    id: "storage-security",
    title: "4. Data Storage & Security",
    body: [
      "Scans are stored locally on your device unless you enable cloud sync. When documents are uploaded, they are encrypted in transit (TLS) and at rest. You can lock sensitive folders behind a PIN and delete any document — including cloud copies — at any time.",
      "While we use industry-standard safeguards, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "sharing",
    title: "5. Sharing & Disclosure",
    body: [
      "We do not sell your personal information or the contents of your documents. We may share limited data only with service providers who help us operate the Service (e.g. cloud hosting and analytics), and only to the extent necessary, or when required by law.",
    ],
  },
  {
    id: "permissions",
    title: "6. Device Permissions",
    body: [
      "PDF Scanner requests access to your camera (to capture documents) and storage (to import and export files). These permissions are used solely for the features you initiate and can be revoked anytime in your device settings.",
    ],
  },
  {
    id: "retention",
    title: "7. Data Retention",
    body: [
      "Local documents remain until you delete them or uninstall the app. Cloud-synced documents are retained until you delete them or close your account. Anonymous analytics may be retained in aggregate form.",
    ],
  },
  {
    id: "rights",
    title: "8. Your Rights",
    body: [
      "Depending on your location, you may have the right to access, correct, export or delete your personal data, and to withdraw consent for optional processing. To exercise these rights, contact us using the details below.",
    ],
  },
  {
    id: "children",
    title: "9. Children’s Privacy",
    body: [
      "The Service is not directed to children under 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will remove it.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be highlighted in the app or on this page, and the “Last updated” date above will be revised. Continued use of the Service after changes take effect constitutes acceptance.",
    ],
  },
]

export function Privacy() {
  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2">
          <Link to="/">
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </Button>

        <header className="border-b pb-8">
          <p className="text-sm font-semibold text-primary">Legal</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight">
                {section.title}
              </h2>
              {section.body.map((p, i) => (
                <p
                  key={i}
                  className="mt-3 leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 space-y-2.5">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Contact */}
          <section
            id="contact"
            className="scroll-mt-28 rounded-2xl border bg-secondary/40 p-6 sm:p-8"
          >
            <h2 className="text-xl font-bold tracking-tight">11. Contact Us</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              If you have any questions about this Privacy Policy or how your
              data is handled, please reach out — we are happy to help.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-brand to-brand-deep px-5 py-3 text-sm font-medium text-white shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" />
              {CONTACT_EMAIL}
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}
