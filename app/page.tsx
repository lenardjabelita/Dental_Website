import Hero from "@/components/Hero";
import { ShieldCheck, Sparkles, Smile } from "lucide-react";

export default function Home() {
  return (
    <section className="relative">
      {/* soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-slate-50 to-white" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Hero */}
        <Hero />

        {/* Featured Services */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">
            Featured Services
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
            Comprehensive dental care designed for comfort, confidence, and long-term health.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={28} className="text-teal-600" />,
                title: "Check-ups",
                desc: "Preventive care and exams to keep your smile healthy year-round.",
              },
              {
                icon: <Smile size={28} className="text-teal-600" />,
                title: "Cleanings",
                desc: "Professional cleanings for a confident, fresh smile.",
              },
              {
                icon: <Sparkles size={28} className="text-teal-600" />,
                title: "Cosmetic Dentistry",
                desc: "Whitening, bonding, and veneers to help your smile shine.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  {s.icon}
                  <h3 className="font-semibold text-slate-900 text-lg">{s.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <div className="mt-16 bg-white border border-slate-200 shadow-sm rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Ready to brighten your smile?
          </h3>
          <p className="text-slate-600 mb-6">
            Call us or visit our Contact page to schedule your appointment today.
          </p>
          <a
            href="tel:+13105391224"
            className="inline-block rounded-md bg-teal-500 text-white px-8 py-3 font-medium shadow hover:bg-teal-600 transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
