import { ReactNode } from 'react';

export function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="container py-16 md:py-24">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="mt-3 subtext max-w-2xl">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}
