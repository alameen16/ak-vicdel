import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, Zap } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/shop", label: "Shop" },
  { to: "/rentals", label: "Rentals" },
  { to: "/leasing", label: "Leasing" },
  { to: "/sell-to-us", label: "Sell to Us" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-pro flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--navy-deep)] text-[var(--amber)]">
            <Zap className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span>
            AK-VICDEL<span className="text-[var(--amber)]">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-foreground bg-muted" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+10000000000"
            className="hidden items-center gap-2 rounded-md bg-[var(--emergency)] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            24/7 Emergency
          </a>
          <Link
            to="/contact"
            className="hidden rounded-md bg-[var(--amber)] px-4 py-2 text-sm font-semibold text-[var(--navy-deep)] transition hover:brightness-105 sm:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-md border border-border xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <div className="container-pro grid gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
                activeProps={{ className: "rounded-md px-3 py-2.5 text-sm font-semibold bg-muted" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[var(--amber)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--navy-deep)]"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+10000000000"
              className="rounded-md bg-[var(--emergency)] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              24/7 Emergency
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
