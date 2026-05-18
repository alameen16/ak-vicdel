import { createFileRoute } from "@tanstack/react-router";
import { Award, Globe, Users, Wrench } from "lucide-react";
import techImg from "@/assets/service-tech.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Voltax — Industrial Power Engineering Since 1998" },
      { name: "description", content: "Voltax is an industrial power engineering company with 27+ years of expertise in generators, engines, and critical uptime infrastructure." },
      { property: "og:title", content: "About Voltax" },
      { property: "og:description", content: "Industrial power engineering since 1998." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The engineers behind the silence."
        description="Voltax was founded in 1998 by a team of marine engineers who believed industrial power should be boring — predictable, quiet, and absolutely reliable."
      />

      <section className="container-pro py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
        <img src={techImg} alt="Voltax workshop" width={1600} height={1000} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
        <div>
          <h2 className="text-3xl font-extrabold">Built around uptime.</h2>
          <p className="mt-4 text-muted-foreground">
            From a single workshop in 1998 to six regional service hubs today, our work has always been guided by one rule:
            our customers' production lines, hospitals, and data halls must not stop.
          </p>
          <p className="mt-3 text-muted-foreground">
            We are an OEM-authorized service partner for Cummins, Caterpillar, Perkins, and MTU,
            and an ISO 9001 & 45001 certified business with 240+ engineers in the field.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-5">
            {[
              { icon: Users, n: "240+", l: "Engineers" },
              { icon: Globe, n: "6", l: "Regional hubs" },
              { icon: Wrench, n: "12,400", l: "Units commissioned" },
              { icon: Award, n: "27", l: "Years in service" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-card p-5">
                <s.icon className="h-5 w-5 text-[var(--amber)]" />
                <div className="mt-3 font-display text-2xl font-extrabold">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-16">
        <div className="container-pro">
          <h2 className="text-2xl font-extrabold md:text-3xl">Certifications & partnerships</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {["ISO 9001:2015", "ISO 45001", "ISO 14001", "Cummins OEM", "Cat Authorized", "Perkins Partner"].map((c) => (
              <div key={c} className="rounded-lg border border-border bg-card p-5 text-center font-semibold">{c}</div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
