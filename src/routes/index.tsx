import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Wrench,
  ShoppingCart,
  CalendarClock,
  Recycle,
  ShieldCheck,
  Clock,
  Award,
  Gauge,
  Fuel,
  Factory,
  Building2,
  HeartPulse,
  Cpu,
  Ship,
  Wheat,
  Radio,
  HardHat,
} from "lucide-react";
import heroImg from "@/assets/hero-generator.jpg";
import fleetImg from "@/assets/fleet.jpg";
import techImg from "@/assets/service-tech.jpg";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voltax — Industrial Generators & Engines | Sales, Rental, Service" },
      { name: "description", content: "Engineered uptime for plants, sites, and critical facilities. Buy, lease, rent, repair, or sell industrial generators and engines." },
      { property: "og:title", content: "Voltax — Engineered Uptime for Industry" },
      { property: "og:description", content: "Industrial generators and engines — sales, rental, leasing, repair, and buy-back." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const pillars = [
  { icon: Wrench, title: "Repair & Service", desc: "Overhauls, AMC, emergency callout, load bank testing.", to: "/services" },
  { icon: ShoppingCart, title: "Sales", desc: "New, used, and refurbished generators and engines.", to: "/shop" },
  { icon: CalendarClock, title: "Rental & Lease", desc: "Short-term fleet and long-term lease-to-own.", to: "/rentals" },
  { icon: Recycle, title: "Buy-Back", desc: "Sell us your used unit — fast valuation, fair price.", to: "/sell-to-us" },
];

const equipment = [
  { kva: "20–150 kVA", brand: "Cummins · Perkins", tag: "Standby", price: "From $9,800" },
  { kva: "200–500 kVA", brand: "Caterpillar · Volvo", tag: "Prime", price: "From $34,500" },
  { kva: "600–1250 kVA", brand: "MTU · Mitsubishi", tag: "Continuous", price: "Request" },
  { kva: "1500–3000 kVA", brand: "Wärtsilä · MAN", tag: "Heavy Duty", price: "Request" },
];

const industries = [
  { icon: Building2, label: "Construction" },
  { icon: Fuel, label: "Oil & Gas" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Cpu, label: "Data Centers" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Ship, label: "Marine" },
  { icon: Wheat, label: "Agriculture" },
  { icon: Radio, label: "Telecom" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--navy-deep)] text-white">
        <img
          src={heroImg}
          alt="Industrial diesel generator"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)] via-[var(--navy-deep)]/85 to-transparent" />
        <div className="container-pro relative grid gap-12 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--amber)]/40 bg-[var(--amber)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--amber)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--amber)]" />
              ISO-certified · OEM authorized
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
              Engineered uptime.<br />
              <span className="text-gradient-amber">Generator power, delivered.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Sales, rental, leasing, and full-spectrum service for industrial generators and engines —
              from 20 kVA standby to 3 MW continuous duty. One partner, total ownership covered.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--amber)] px-6 py-3 text-sm font-semibold text-[var(--navy-deep)] transition hover:brightness-105"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                Browse Equipment
              </Link>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                ["27+", "Years in service"],
                ["12,400", "Units commissioned"],
                ["< 60 min", "Avg. response"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-extrabold text-[var(--amber)]">{n}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-white/50">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-pro py-20">
        <div className="flex flex-col items-end justify-between gap-4 md:flex-row">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--amber)]">What we do</p>
            <h2 className="mt-2 max-w-2xl text-3xl font-extrabold md:text-4xl">
              Four ways to power your operation.
            </h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-foreground underline-offset-4 hover:underline">
            All services →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--navy-deep)] text-[var(--amber)]">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <ArrowRight className="absolute right-5 top-5 h-4 w-4 -translate-x-2 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED EQUIPMENT */}
      <section className="bg-muted/40 py-20">
        <div className="container-pro">
          <div className="flex flex-col items-end justify-between gap-4 md:flex-row">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--amber)]">Featured equipment</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">From 20 kVA to 3 MW.</h2>
            </div>
            <Link to="/shop" className="text-sm font-semibold underline-offset-4 hover:underline">Browse catalog →</Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((e, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-[var(--shadow-card)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--navy-deep)]">
                  <img
                    src={fleetImg}
                    alt={`${e.kva} generator`}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80 transition group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--amber)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--navy-deep)]">
                    {e.tag}
                  </span>
                </div>
                <div className="p-5">
                  <div className="font-display text-lg font-bold">{e.kva}</div>
                  <div className="text-xs text-muted-foreground">{e.brand}</div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[var(--navy-deep)]">{e.price}</span>
                    <Link to="/shop" className="text-xs font-semibold text-[var(--amber)] hover:underline">
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — split */}
      <section className="container-pro py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-2xl">
            <img src={techImg} alt="Technician servicing generator" width={1600} height={1000} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--amber)]">Why Voltax</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              When downtime isn't an option.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We're the engineering partner for facilities that can't afford a flicker —
              hospitals, data centers, refineries, broadcast, and critical manufacturing.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: "OEM-trained engineers", desc: "Authorized service for Cummins, Cat, Perkins, MTU." },
                { icon: Clock, title: "60-minute response SLA", desc: "24/7 dispatch from 6 regional service hubs." },
                { icon: Award, title: "ISO 9001 & 45001", desc: "Certified quality and HSE management systems." },
                { icon: Gauge, title: "Full lifecycle support", desc: "From sizing to decommissioning and buy-back." },
              ].map((f) => (
                <div key={f.title} className="rounded-lg border border-border bg-card p-5">
                  <f.icon className="h-5 w-5 text-[var(--amber)]" />
                  <div className="mt-3 font-semibold">{f.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-y border-border bg-muted/40 py-16">
        <div className="container-pro">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-extrabold md:text-3xl">Industries we power</h2>
            <Link to="/industries" className="text-sm font-semibold underline-offset-4 hover:underline">All industries →</Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {industries.map((i) => (
              <div key={i.label} className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4 text-center">
                <i.icon className="h-6 w-6 text-[var(--navy-deep)]" />
                <span className="text-xs font-semibold">{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-pro py-20">
        <figure className="mx-auto max-w-3xl text-center">
          <HardHat className="mx-auto h-10 w-10 text-[var(--amber)]" />
          <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug md:text-3xl">
            "Voltax replaced our prime power in 36 hours, including transport.
            Their engineers ran the commissioning overnight so we never lost a shift."
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Daniela R.</span> — Plant Manager, Aurora Manufacturing
          </figcaption>
        </figure>
      </section>

      <CtaBand />
    </>
  );
}
