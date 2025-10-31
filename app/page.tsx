import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Featured services</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { title: "Check-ups", desc: "Preventive care to keep your smile healthy year-round." },
            { title: "Cleanings", desc: "Deep cleaning for a confident smile." },
            { title: "Cosmetic Dentistry", desc: "Whitening..." },
          ].map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-slate-900">{s.title}</div>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-slate-200 bg-teal-50 p-6">
          <p className="text-slate-800">
            To schedule a visit, please call our office or reach us on the Contact page.
          </p>
        </div>
      </section>
    </>
  );
}
