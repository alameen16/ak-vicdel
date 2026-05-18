import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function CtaBand() {
  return (
    <section className="border-y border-border bg-[var(--navy-deep)]">
      <div className="container-pro flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
            Need power on site — today?
          </h3>
          <p className="mt-2 text-white/60">
            Our 24/7 response team is dispatched within the hour for critical outages.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+10000000000"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--emergency)] px-5 py-3 text-sm font-semibold text-white hover:brightness-110"
          >
            <Phone className="h-4 w-4" /> Emergency Hotline
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-[var(--amber)] px-5 py-3 text-sm font-semibold text-[var(--navy-deep)] hover:brightness-105"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
