import { createFileRoute } from "@tanstack/react-router";
import { Building2, Fuel, HeartPulse, Cpu, Factory, Ship, Wheat, Radio, PartyPopper } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Power Solutions by Sector | Voltax" },
      { name: "description", content: "Generator and engine solutions tailored for construction, oil & gas, healthcare, data centers, manufacturing, marine, agriculture, telecom, and events." },
      { property: "og:title", content: "Industries We Power" },
      { property: "og:description", content: "Sector-specific power solutions for nine critical industries." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Building2, name: "Construction", desc: "Site power, tower cranes, batching plants, and temporary distribution." },
  { icon: Fuel, name: "Oil & Gas", desc: "Hazardous-area packages, drilling support, and remote site continuous duty." },
  { icon: HeartPulse, name: "Healthcare", desc: "NFPA 110 standby systems for hospitals, labs, and pharma cold-chain." },
  { icon: Cpu, name: "Data Centers", desc: "N+1 redundancy, paralleling switchgear, and load-bank certified handover." },
  { icon: Factory, name: "Manufacturing", desc: "Prime power, peak shaving, and process-critical UPS-integrated systems." },
  { icon: Ship, name: "Marine", desc: "Marine-grade engines, gensets, and shipyard service partnerships." },
  { icon: Wheat, name: "Agriculture", desc: "Irrigation, grain drying, and remote farm power packages." },
  { icon: Radio, name: "Telecom", desc: "Hybrid solar-diesel solutions for cell towers and microwave sites." },
  { icon: PartyPopper, name: "Events", desc: "Silent canopies, distribution boards, and on-call event technicians." },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Power solutions, sector-tuned."
        description="Every industry has different uptime requirements, compliance frameworks, and load profiles. We engineer the package to match."
      />

      <section className="container-pro py-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((i) => (
          <article key={i.name} className="rounded-xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--navy-deep)] text-[var(--amber)]">
              <i.icon className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-display text-xl font-bold">{i.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
          </article>
        ))}
      </section>

      <CtaBand />
    </>
  );
}
