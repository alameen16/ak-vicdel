import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, FileText, HelpCircle, Download } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Guides, Spec Sheets & FAQs | Voltax" },
      { name: "description", content: "Technical guides, generator sizing tools, spec sheets, and FAQs for facility managers and engineers." },
      { property: "og:title", content: "Resources & Technical Guides" },
      { property: "og:description", content: "Sizing guides, spec sheets, and FAQs for industrial power." },
    ],
  }),
  component: ResourcesPage,
});

const articles = [
  { tag: "Guide", title: "How to size a backup generator for a hospital", read: "8 min" },
  { tag: "Whitepaper", title: "Diesel vs gas: total cost of ownership for prime power", read: "12 min" },
  { tag: "Guide", title: "Load bank testing — why annual proving matters", read: "6 min" },
  { tag: "Case Study", title: "Tier III data center: 8 MW deployment teardown", read: "10 min" },
  { tag: "Guide", title: "Choosing between rent, lease, and buy", read: "5 min" },
  { tag: "FAQ", title: "Top 12 questions facility managers ask before buying", read: "7 min" },
];

const faqs = [
  ["What's the lead time for a new 500 kVA unit?", "Stock units ship in 5–10 days. Custom builds: 8–14 weeks."],
  ["Do you offer financing?", "Yes — operating leases and lease-to-own from 12 to 60 months."],
  ["What brands are you authorized to service?", "Cummins, Caterpillar, Perkins, MTU, Volvo Penta, Mitsubishi."],
  ["How fast can you respond to an outage?", "Average dispatch under 60 minutes within metro service zones."],
];

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Spec sheets, guides, and answers."
        description="The technical library for facility managers, procurement teams, and consulting engineers."
      />

      <section className="container-pro py-16">
        <div className="flex items-center gap-3"><BookOpen className="h-5 w-5 text-[var(--amber)]" /><h2 className="text-2xl font-extrabold">Latest articles</h2></div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <article key={i} className="flex flex-col rounded-xl border border-border bg-card p-6 transition hover:shadow-[var(--shadow-card)]">
              <span className="self-start rounded-full bg-[var(--navy-deep)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--amber)]">{a.tag}</span>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug">{a.title}</h3>
              <div className="mt-auto pt-5 text-xs text-muted-foreground">{a.read} read</div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container-pro grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3"><Download className="h-5 w-5 text-[var(--amber)]" /><h2 className="text-2xl font-extrabold">Spec sheets</h2></div>
            <ul className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
              {["Cummins QSK60-G — 2250 kVA", "Caterpillar 3516 — 2000 kVA", "Perkins 4006-23 — 800 kVA", "MTU 16V4000 — 2000 kVA"].map((s) => (
                <li key={s} className="flex items-center justify-between p-4 text-sm">
                  <span className="flex items-center gap-3"><FileText className="h-4 w-4 text-muted-foreground" /> {s}</span>
                  <Link to="/contact" className="text-xs font-semibold text-[var(--amber)] hover:underline">Request PDF →</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3"><HelpCircle className="h-5 w-5 text-[var(--amber)]" /><h2 className="text-2xl font-extrabold">FAQs</h2></div>
            <div className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
              {faqs.map(([q, a]) => (
                <details key={q} className="group p-5">
                  <summary className="cursor-pointer list-none text-sm font-semibold">{q}</summary>
                  <p className="mt-3 text-sm text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
