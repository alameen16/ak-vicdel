import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/leasing")({
  head: () => ({
    meta: [
      { title: "Generator Leasing & Lease-to-Own | Voltax" },
      { name: "description", content: "Long-term operating leases and lease-to-own for industrial generators. Predictable monthly costs, full maintenance included, optional buy-out." },
      { property: "og:title", content: "Lease an Industrial Generator" },
      { property: "og:description", content: "Operating lease and lease-to-own plans, maintenance included." },
    ],
  }),
  component: LeasingPage,
});

const plans = [
  {
    name: "Operating Lease",
    term: "12–36 months",
    monthly: "From $1,150 / mo",
    features: ["No upfront capex", "Full maintenance included", "Swap-out at term end", "Telemetry & monitoring"],
    highlight: false,
  },
  {
    name: "Lease-to-Own",
    term: "36–60 months",
    monthly: "From $1,420 / mo",
    features: ["Title transfer at end of term", "Maintenance included", "Fixed buy-out price", "Service contract bundled"],
    highlight: true,
  },
  {
    name: "Project Lease",
    term: "3–24 months",
    monthly: "Custom",
    features: ["Site-specific configuration", "Mobile or skid mount", "Demobilization included", "Bridging units on call"],
    highlight: false,
  },
];

function LeasingPage() {
  return (
    <>
      <PageHero
        eyebrow="Leasing"
        title="Power as an operating expense."
        description="Lease a generator instead of buying one. Maintenance, monitoring, and engineering support are bundled into a single predictable monthly fee."
      />

      <section className="container-pro py-16 grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <article
            key={p.name}
            className={`relative flex flex-col rounded-2xl border p-7 ${p.highlight ? "border-[var(--amber)] bg-[var(--navy-deep)] text-white shadow-[var(--shadow-elevated)]" : "border-border bg-card"}`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-7 rounded-full bg-[var(--amber)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--navy-deep)]">
                Most popular
              </span>
            )}
            <h3 className="font-display text-xl font-bold">{p.name}</h3>
            <div className={`mt-1 text-xs uppercase tracking-wider ${p.highlight ? "text-white/60" : "text-muted-foreground"}`}>{p.term}</div>
            <div className="mt-5 font-display text-3xl font-extrabold">{p.monthly}</div>
            <ul className="mt-6 space-y-2.5 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? "text-[var(--amber)]" : "text-[var(--amber)]"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold ${p.highlight ? "bg-[var(--amber)] text-[var(--navy-deep)]" : "bg-[var(--navy-deep)] text-white"}`}
            >
              Discuss this plan
            </Link>
          </article>
        ))}
      </section>

      <CtaBand />
    </>
  );
}
