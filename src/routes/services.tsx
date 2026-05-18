import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, ShieldCheck, Siren, HardHat, Gauge, Package, Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Repair, Maintenance & 24/7 Support | Voltax" },
      { name: "description", content: "OEM-trained generator and engine service: repair, overhaul, preventive maintenance, emergency callout, installation, load bank testing, and spare parts." },
      { property: "og:title", content: "Generator Service & Repair — Voltax" },
      { property: "og:description", content: "Full-spectrum service for industrial generators and engines." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Wrench, title: "Repair & Overhaul", desc: "Engine rebuilds, alternator rewinds, controller upgrades, and full top-end / bottom-end overhauls.", points: ["Cylinder head reconditioning", "Crankshaft inspection", "Turbocharger replacement", "Bench-tested before delivery"] },
  { icon: ShieldCheck, title: "Preventive Maintenance / AMC", desc: "Tiered annual contracts that keep your standby and prime units ready year-round.", points: ["Quarterly inspections", "Oil & filter program", "Telematics monitoring", "Priority parts allocation"] },
  { icon: Siren, title: "24/7 Emergency Callout", desc: "Engineers on the road within 60 minutes for critical outages across all service regions.", points: ["6 regional hubs", "Mobile workshop vans", "Bridging rental on standby", "Direct line to senior engineer"] },
  { icon: HardHat, title: "Installation & Commissioning", desc: "Civil prep coordination, electrical tie-ins, ATS integration, and certified commissioning.", points: ["Site survey & sizing", "Foundation & exhaust design", "Synchronization & paralleling", "Handover documentation"] },
  { icon: Gauge, title: "Load Bank Testing", desc: "Resistive and reactive load testing up to 3 MW — onsite or in our test cell.", points: ["10–3000 kW capacity", "Full-load proving", "Annual compliance reports", "ISO-traceable instruments"] },
  { icon: Package, title: "Spare Parts", desc: "Genuine OEM and quality aftermarket parts with same-day dispatch for stocked items.", points: ["Filters & belts", "Injectors & pumps", "AVRs & controllers", "Cooling system components"] },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="From oil change to full overhaul."
        description="One service partner for the entire lifecycle of your industrial generators and engines."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--amber)] px-5 py-3 text-sm font-semibold text-[var(--navy-deep)] hover:brightness-105">
            Book Service <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Call dispatch
          </a>
        </div>
      </PageHero>

      <section className="container-pro py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="flex flex-col rounded-xl border border-border bg-card p-7 transition hover:shadow-[var(--shadow-elevated)]">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--navy-deep)] text-[var(--amber)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--amber)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-border bg-muted/40 py-20">
        <div className="container-pro">
          <h2 className="text-3xl font-extrabold md:text-4xl">How a service job runs.</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">A repeatable 5-step process from first call to handover — full traceability at every stage.</p>
          <ol className="mt-12 grid gap-6 md:grid-cols-5">
            {["Diagnose", "Quote", "Schedule", "Service", "Verify"].map((step, i) => (
              <li key={step} className="rounded-xl border border-border bg-card p-6">
                <div className="font-display text-4xl font-extrabold text-[var(--amber)]">0{i + 1}</div>
                <div className="mt-3 font-semibold">{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
