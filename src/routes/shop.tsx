import { createFileRoute, Link } from "@tanstack/react-router";
import { Filter, ArrowRight } from "lucide-react";
import fleetImg from "@/assets/fleet.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Generators & Engines — New, Used, Refurbished | Voltax" },
      { name: "description", content: "Industrial generators 20 kVA–3 MW from Cummins, Caterpillar, Perkins, MTU, Volvo. New, used, and refurbished — plus diesel, gas, and marine engines." },
      { property: "og:title", content: "Shop Industrial Generators & Engines" },
      { property: "og:description", content: "20 kVA to 3 MW. New, used, refurbished. OEM warranties." },
    ],
  }),
  component: ShopPage,
});

const products = [
  { name: "Cummins C150D5", kva: "150 kVA", fuel: "Diesel", cond: "New", price: "$28,400" },
  { name: "Caterpillar DE220", kva: "220 kVA", fuel: "Diesel", cond: "Refurbished", price: "$38,900" },
  { name: "Perkins 1106A", kva: "100 kVA", fuel: "Diesel", cond: "Used", price: "$14,200" },
  { name: "MTU 16V4000", kva: "2000 kVA", fuel: "Diesel", cond: "New", price: "Request" },
  { name: "Volvo TAD1641", kva: "500 kVA", fuel: "Diesel", cond: "Refurbished", price: "$74,500" },
  { name: "Cummins QSK60-G", kva: "2250 kVA", fuel: "Gas", cond: "New", price: "Request" },
  { name: "Mitsubishi S12R", kva: "1500 kVA", fuel: "Diesel", cond: "Used", price: "Request" },
  { name: "Wärtsilä 32 Marine", kva: "3000 kVA", fuel: "Marine", cond: "New", price: "Request" },
];

const filters = [
  { label: "Condition", options: ["New", "Used", "Refurbished"] },
  { label: "Capacity", options: ["< 100 kVA", "100–500", "500–1500", "> 1500"] },
  { label: "Fuel", options: ["Diesel", "Gas", "Marine", "Dual-fuel"] },
  { label: "Brand", options: ["Cummins", "Cat", "Perkins", "MTU", "Volvo"] },
];

function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title="The industrial fleet, ready to deploy."
        description="Browse the live inventory. Every unit is bench-tested, documented, and shipped with full commissioning support."
      />

      <section className="container-pro py-16">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-xl border border-border bg-card p-5 lg:sticky lg:top-24 lg:self-start">
            <div className="mb-4 flex items-center gap-2 font-semibold">
              <Filter className="h-4 w-4 text-[var(--amber)]" /> Filters
            </div>
            <div className="space-y-5">
              {filters.map((f) => (
                <div key={f.label}>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f.label}</div>
                  <div className="mt-2 space-y-1.5">
                    {f.options.map((o) => (
                      <label key={o} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="h-4 w-4 rounded border-border accent-[var(--amber)]" />
                        {o}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div>
            <div className="mb-5 flex items-center justify-between text-sm text-muted-foreground">
              <span>{products.length} units in stock</span>
              <select className="rounded-md border border-border bg-card px-3 py-1.5 text-sm">
                <option>Sort: Newest</option>
                <option>Capacity ↑</option>
                <option>Price ↑</option>
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((p, i) => (
                <article key={i} className="overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-[var(--shadow-card)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--navy-deep)]">
                    <img src={fleetImg} alt={p.name} width={1600} height={1000} loading="lazy" className="h-full w-full object-cover opacity-80" />
                    <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${p.cond === "New" ? "bg-[var(--amber)] text-[var(--navy-deep)]" : p.cond === "Refurbished" ? "bg-[var(--navy-deep)] text-[var(--amber)]" : "bg-white/90 text-[var(--navy-deep)]"}`}>
                      {p.cond}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold">{p.name}</h3>
                    <div className="mt-1 text-xs text-muted-foreground">{p.kva} · {p.fuel}</div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-semibold">{p.price}</span>
                      <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--amber)] hover:underline">
                        Quote <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
