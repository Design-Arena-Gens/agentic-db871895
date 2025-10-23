import Hero3D from '@/components/Hero3D';
import { Section } from '@/components/Section';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <section className="container pt-10 md:pt-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight">
              Precision on Demand: 3D Printing, CAD, PCB & CNC Services
            </h1>
            <p className="mt-4 subtext max-w-xl">
              From concept to production. Rapid prototypes, engineering-grade parts, custom PCB fabrication, and precision CNC machining — delivered with quality and speed.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#contact" className="rounded-md bg-brand-500 px-5 py-3 font-medium hover:bg-brand-400">Get a Quote</a>
              <a href="#services" className="text-white/80 hover:text-white">Explore Services →</a>
            </div>
          </div>
          <Hero3D />
        </div>
      </section>

      <Section id="services" title="Capabilities" subtitle="Flexible manufacturing across materials and processes.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard title="3D Printing" points={["FDM, SLA, SLS", "PLA, ABS, Nylon, Resin", "Functional prototypes", "Batch production"]}>
            <span className="text-brand-300">High-detail prototypes and durable end-use parts.</span>
          </ServiceCard>
          <ServiceCard title="CAD Design & Modeling" points={["DFM-first approach", "Parametric modeling", "Assembly simulation", "Manufacturing drawings"]}>
            <span className="text-brand-300">From sketches to production-ready models.</span>
          </ServiceCard>
          <ServiceCard title="Customized PCB Manufacturing" points={["2-8 layers", "SMT & THT", "Stencil + assembly", "Testing & QA"]}>
            <span className="text-brand-300">Schematics, layout, fabrication, and assembly.</span>
          </ServiceCard>
          <ServiceCard title="CNC Machining" points={["3-axis milling", "Turning", "Aluminum, steel, plastics", "Tight tolerances"]}>
            <span className="text-brand-300">Precision parts with engineering-grade finishes.</span>
          </ServiceCard>
        </div>
      </Section>

      <Section id="process" title="How it works" subtitle="A proven flow to move from idea to part.">
        <ol className="grid md:grid-cols-4 gap-6 list-decimal list-inside">
          <ProcessStep step="1" title="Brief & Files" description="Share requirements, drawings, step/stl/gerbers." />
          <ProcessStep step="2" title="DFM Review" description="Design-for-manufacture feedback and quote." />
          <ProcessStep step="3" title="Production" description="3D print, fabricate PCBs, or machine parts." />
          <ProcessStep step="4" title="QC & Delivery" description="Inspection, finish, and ship globally." />
        </ol>
      </Section>

      <Section id="contact" title="Request a quote" subtitle="Tell us about your project — we reply within 24 hours.">
        <ContactForm />
      </Section>
    </>
  );
}

function ServiceCard({ title, children, points }: { title: string; children: React.ReactNode; points: string[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-brand-400/40 transition-colors">
      <h3 className="font-display text-xl">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{children}</p>
      <ul className="mt-4 space-y-1 text-sm text-white/80">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <li className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-brand-500 text-black font-semibold grid place-items-center">{step}</div>
        <h4 className="font-medium">{title}</h4>
      </div>
      <p className="mt-2 text-sm text-white/70">{description}</p>
    </li>
  );
}
