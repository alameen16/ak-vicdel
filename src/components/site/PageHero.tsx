import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-navy-grid text-white">
      <div className="container-pro py-20 md:py-28">
        {eyebrow && (
          <span className="inline-block rounded-full border border-[var(--amber)]/40 bg-[var(--amber)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--amber)]">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
