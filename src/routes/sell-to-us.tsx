import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, Search, HandCoins, Truck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/sell-to-us")({
  head: () => ({
    meta: [
      { title: "Sell Your Generator — Fast Valuation & Buy-Back | Voltax" },
      { name: "description", content: "Sell us your used industrial generator or engine. Free valuation, inspection, pickup, and payment within 7 days." },
      { property: "og:title", content: "Sell Your Used Generator to Voltax" },
      { property: "og:description", content: "Fair market valuation. Inspection, pickup, payment — handled." },
    ],
  }),
  component: SellPage,
});

function SellPage() {
  return (
    <>
      <PageHero
        eyebrow="Buy-Back"
        title="Decommissioning? We'll take it."
        description="Free valuation for any industrial generator or engine. Once accepted, we handle inspection, transport, and payment within a week."
      />

      <section className="container-pro grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold">How it works</h2>
          <ol className="mt-8 space-y-6">
            {[
              { icon: ClipboardCheck, title: "Submit details", desc: "Fill in the form with brand, model, hours, condition, and photos." },
              { icon: HandCoins, title: "Get an offer", desc: "Indicative valuation within 24 hours from our acquisitions team." },
              { icon: Search, title: "On-site inspection", desc: "Our engineer verifies condition and finalizes the offer." },
              { icon: Truck, title: "Pickup & payment", desc: "We handle transport and pay within 7 days of pickup." },
            ].map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[var(--navy-deep)] text-[var(--amber)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">0{i + 1} · {s.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <form className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
          <h3 className="font-display text-xl font-bold">Get a valuation</h3>
          <div className="mt-5 grid gap-4">
            <Field label="Equipment type">
              <select className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm">
                <option>Diesel Generator</option><option>Gas Generator</option><option>Marine Engine</option><option>Industrial Engine</option>
              </select>
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Brand"><input className="input" placeholder="Cummins" /></Field>
              <Field label="Model"><input className="input" placeholder="C150D5" /></Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Year"><input className="input" placeholder="2018" /></Field>
              <Field label="Hours"><input className="input" placeholder="3,200" /></Field>
            </div>
            <Field label="Condition">
              <select className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm">
                <option>Operational</option><option>Needs minor service</option><option>Non-running</option>
              </select>
            </Field>
            <Field label="Contact email"><input type="email" className="input" placeholder="you@company.com" /></Field>
            <button type="button" className="mt-2 rounded-md bg-[var(--amber)] px-5 py-3 text-sm font-semibold text-[var(--navy-deep)] hover:brightness-105">
              Submit for valuation
            </button>
          </div>
        </form>
      </section>

      <CtaBand />

      <style>{`.input{width:100%;border:1px solid var(--border);background:var(--background);padding:.6rem .75rem;border-radius:.5rem;font-size:.875rem}`}</style>
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
