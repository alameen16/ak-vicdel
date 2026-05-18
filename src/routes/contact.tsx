import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Siren } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Voltax — Sales, Service & 24/7 Emergency" },
      { name: "description", content: "Reach Voltax for sales quotes, service requests, rental bookings, and 24/7 emergency generator support across all regions." },
      { property: "og:title", content: "Contact Voltax" },
      { property: "og:description", content: "Sales, service, and 24/7 emergency lines." },
    ],
  }),
  component: ContactPage,
});

const branches = [
  { city: "Houston, TX", phone: "+1 (713) 555-0140", address: "8200 Industrial Blvd, Bldg 7", hours: "24/7 dispatch" },
  { city: "Chicago, IL", phone: "+1 (312) 555-0188", address: "1450 Cermak Service Park", hours: "Mon–Sat · 24/7 on call" },
  { city: "Atlanta, GA", phone: "+1 (404) 555-0123", address: "300 Fulton Industrial", hours: "24/7 dispatch" },
  { city: "Phoenix, AZ", phone: "+1 (602) 555-0167", address: "5400 W Buckeye Rd", hours: "Mon–Sat · 24/7 on call" },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to an engineer."
        description="Sales quotes, service requests, rentals, and emergency dispatch — one form, the right team."
      >
        <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-md bg-[var(--emergency)] px-5 py-3 text-sm font-semibold text-white hover:brightness-110">
          <Siren className="h-4 w-4" /> 24/7 Emergency Hotline
        </a>
      </PageHero>

      <section className="container-pro py-16 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <form className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
          <h2 className="font-display text-2xl font-bold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We route inquiries to the right team within one business hour.</p>

          <div className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name"><input className="input" placeholder="Jane Doe" /></Field>
              <Field label="Company"><input className="input" placeholder="Acme Industrial" /></Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email"><input className="input" type="email" placeholder="jane@company.com" /></Field>
              <Field label="Phone"><input className="input" placeholder="+1 (555) 000-0000" /></Field>
            </div>
            <Field label="I'm interested in">
              <select className="input">
                <option>Buying a generator</option><option>Renting a generator</option><option>Leasing</option>
                <option>Repair / service</option><option>Selling my unit</option><option>Spare parts</option>
              </select>
            </Field>
            <Field label="Capacity needed (kVA)"><input className="input" placeholder="e.g. 500" /></Field>
            <Field label="Message"><textarea rows={4} className="input" placeholder="Tell us about your project, timeline, and site." /></Field>
            <button type="button" className="rounded-md bg-[var(--amber)] px-5 py-3 text-sm font-semibold text-[var(--navy-deep)] hover:brightness-105">
              Submit inquiry
            </button>
          </div>
        </form>

        <div>
          <h2 className="font-display text-2xl font-bold">Branches & service hubs</h2>
          <div className="mt-6 grid gap-4">
            {branches.map((b) => (
              <article key={b.city} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-display text-lg font-bold">{b.city}</div>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{b.address}</div>
                  </div>
                  <span className="rounded-full bg-[var(--amber)]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--navy-deep)]">{b.hours}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-4 text-sm">
                  <a href={`tel:${b.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 font-semibold hover:text-[var(--amber)]"><Phone className="h-4 w-4" /> {b.phone}</a>
                  <a href="mailto:sales@voltax.example" className="flex items-center gap-2 text-muted-foreground hover:text-[var(--amber)]"><Mail className="h-4 w-4" /> sales@voltax.example</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`.input{width:100%;border:1px solid var(--border);background:var(--background);padding:.6rem .75rem;border-radius:.5rem;font-size:.875rem;font-family:inherit}`}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
