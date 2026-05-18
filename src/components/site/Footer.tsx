import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-[var(--navy-deep)] text-white/80">
      <div className="container-pro grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-extrabold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--amber)] text-[var(--navy-deep)]">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            VOLTAX<span className="text-[var(--amber)]">.</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Industrial generators and engines — sales, rental, lease, repair, and buy-back.
            Engineered uptime for plants, sites, and critical facilities since 1998.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[var(--amber)]" /> +1 (000) 000-0000</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--amber)]" /> sales@voltax.example</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--amber)]" /> HQ — Industrial Park, Building 7</div>
          </div>
        </div>

        <FooterCol title="Solutions" links={[
          ["Services", "/services"],
          ["Shop Equipment", "/shop"],
          ["Rentals", "/rentals"],
          ["Leasing", "/leasing"],
          ["Sell to Us", "/sell-to-us"],
        ]} />
        <FooterCol title="Company" links={[
          ["About", "/about"],
          ["Projects", "/projects"],
          ["Industries", "/industries"],
          ["Resources", "/resources"],
          ["Contact", "/contact"],
        ]} />
        <FooterCol title="Support" links={[
          ["24/7 Emergency", "/contact"],
          ["Request a Quote", "/contact"],
          ["Spare Parts", "/services"],
          ["Warranty", "/about"],
        ]} />
      </div>

      <div className="border-t border-white/10">
        <div className="container-pro flex flex-col items-start justify-between gap-2 py-6 text-xs text-white/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Voltax Industrial. All rights reserved.</span>
          <span>ISO 9001:2015 · ISO 45001 · OEM Authorized Service Partner</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-white/60 transition hover:text-[var(--amber)]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
