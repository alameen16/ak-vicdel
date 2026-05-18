import { createFileRoute, Link } from "@tanstack/react-router";
import fleetImg from "@/assets/fleet.jpg";
import techImg from "@/assets/service-tech.jpg";
import heroImg from "@/assets/hero-generator.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Case Studies — Real Deployments | Voltax" },
      { name: "description", content: "Read how Voltax delivered uptime for hospitals, data centers, refineries, and major construction projects across critical sectors." },
      { property: "og:title", content: "Projects & Case Studies" },
      { property: "og:description", content: "Real industrial generator deployments and the results they produced." },
    ],
  }),
  component: ProjectsPage,
});

const cases = [
  { img: heroImg, sector: "Data Center", title: "8 MW N+1 backbone — Tier III facility", result: "Zero outage over 14 months of continuous monitoring.", kva: "8 × 1500 kVA" },
  { img: techImg, sector: "Healthcare", title: "Trauma hospital — NFPA 110 retrofit", result: "Reduced transfer time from 28s to 7s.", kva: "3 × 750 kVA" },
  { img: fleetImg, sector: "Oil & Gas", title: "Remote drilling pad — prime power", result: "12-month uptime: 99.97%.", kva: "2 × 1250 kVA" },
  { img: fleetImg, sector: "Construction", title: "Metro tunnel project — temp power", result: "Delivered 36 hours ahead of schedule.", kva: "4 × 500 kVA" },
  { img: heroImg, sector: "Manufacturing", title: "Auto plant — peak shaving", result: "$340k/yr utility cost reduction.", kva: "2 × 2000 kVA" },
  { img: techImg, sector: "Marine", title: "Cargo terminal — shore power", result: "Cut diesel consumption by 22%.", kva: "1 × 3000 kVA" },
];

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Built where uptime mattered."
        description="Selected deployments across data, health, energy, and heavy industry. Each one engineered around a non-negotiable: power must not stop."
      />

      <section className="container-pro py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <Link key={i} to="/contact" className="group block overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-[var(--shadow-elevated)]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={c.img} alt={c.title} width={1600} height={1000} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
              <span className="absolute left-3 top-3 rounded-full bg-[var(--amber)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--navy-deep)]">
                {c.sector}
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-display text-lg font-bold leading-tight">{c.title}</h2>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{c.kva}</div>
              <p className="mt-3 text-sm">{c.result}</p>
            </div>
          </Link>
        ))}
      </section>

      <CtaBand />
    </>
  );
}
