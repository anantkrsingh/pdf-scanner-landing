import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link to="/" className="shrink-0" aria-label="Clearscan.ai home">
          <Logo />
        </Link>

        {/* Center nav links with pill background */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1 bg-white rounded-full px-3 py-1.5 shadow-lg shadow-black/5 border border-black">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-gray-100 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right side actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/privacy">Privacy</Link>
          </Button>
          <Button
            className="rounded-full px-8"
            variant="brand"
            size="sm"
            asChild
          >
            <a href="#download">Download</a>
          </Button>
        </div>

        <button
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-gray-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl borde2 border-black bg-white p-3 shadow-lg md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-gray-100 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/privacy"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-gray-100 hover:text-foreground"
            >
              Privacy
            </Link>
            <Button variant="brand" className="mt-2 w-full" asChild>
              <a href="#download">Download</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
