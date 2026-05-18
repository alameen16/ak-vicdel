import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, Calendar, MapPin, Zap } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/rentals")({
  head: () => ({
    meta: [
      { title: "Generator Rentals — Daily, Weekly, Monthly | Voltax" },
      { name: "description", content: "Industrial generator rental fleet from 20 kVA to 2 MW. Delivery, fuel management, and 24/7 standby for events, construction, and bridging power." },
      { property: "og:title", content: "Industrial Generator Rentals" },
      { property: "og:description", content: "Short-term rental fleet with delivery and 24/7 backup support." },
    ],
  }),
  component: RentalsPage,
});

const tiers = [
  { name: "20–60 kVA", uses: "Events · small sites", daily: "$185", weekly: "$890", monthly: "$2,400" },
  { name: "100–250 kVA", uses: "Construction · bridging", daily: "$420", weekly: "$2,100", monthly: "$5,800" },
  { name: "400–800 kVA", uses: "Industrial · data center", daily: "$980", weekly: "$4,500", monthly: "$12,500" },
  { name: "1000–2000 kVA", uses: "Prime power · plants", daily: "Request", weekly: "Request", monthly: "Request" },
];

function RentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rentals"
        title="Power on site — within hours."
        description="A 180-unit rental fleet ready to dispatch, with optional delivery, fuel management, ATS hookup, and 24/7 standby engineers."
      />

      <section className="container-pro py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Truck, title: "Same-day delivery", desc: "Most metro areas covered with onboard transport." },
          { icon: Calendar, title: "Flexible terms", desc: "Daily, weekly, monthly — with rollover options." },
          { icon: MapPin, title: "Nationwide reach", desc: "Six regional hubs and partner depots." },
          { icon: Zap, title: "Plug-and-play", desc: "ATS, cabling, and fuel tank kits included." },
        ].map((b) => (
          <div key={b.title} className="rounded-xl border border-border bg-card p-6">
            <b.icon className="h-6 w-6 text-[var(--amber)]" />
            <div className="mt-3 font-semibold">{b.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{b.desc}</div>
          </div>
        ))}
      </section>

      <section className="border-y border-border bg-muted/40 py-16">
        <div className="container-pro">
          <h2 className="text-3xl font-extrabold">Rental pricing</h2>
          <p className="mt-2 text-muted-foreground">Indicative rates. Final quote includes delivery, fuel, and accessories.</p>
          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-[var(--navy-deep)] text-left text-xs uppercase tracking-wider text-white">
                <tr>
                  <th className="px-5 py-4">Capacity</th>
                  <th className="px-5 py-4">Typical use</th>
                  <th className="px-5 py-4">Daily</th>
                  <th className="px-5 py-4">Weekly</th>
                  <th className="px-5 py-4">Monthly</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t) => (
                  <tr key={t.name} className="border-t border-border">
                    <td className="px-5 py-4 font-semibold">{t.name}</td>
                    <td className="px-5 py-4 text-muted-foreground">{t.uses}</td>
                    <td className="px-5 py-4">{t.daily}</td>
                    <td className="px-5 py-4">{t.weekly}</td>
                    <td className="px-5 py-4">{t.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center rounded-md bg-[var(--amber)] px-5 py-3 text-sm font-semibold text-[var(--navy-deep)]">
              Submit a rental request →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
