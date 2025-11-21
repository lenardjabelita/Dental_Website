import { Sparkles, Smile, ShieldCheck } from "lucide-react";

export default function ServicesPage() {
  return (
    <section className="relative">
      {/* soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-slate-50 to-white" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Our Services
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive, patient-first dentistry using modern
            technology and gentle care. Your comfort and long-term oral health
            are our top priorities.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4 text-teal-600">
              <ShieldCheck size={26} />
              <h2 className="text-lg font-semibold text-slate-900">
                Preventive Care
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Routine cleanings, check-ups, and digital X-rays to keep your
              smile healthy and prevent problems before they start.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4 text-teal-600">
              <Smile size={26} />
              <h2 className="text-lg font-semibold text-slate-900">
                Cosmetic Dentistry
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Whitening, bonding, and veneers designed to enhance your natural
              beauty and give you the confidence of a radiant smile.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4 text-teal-600">
              <Sparkles size={26} />
              <h2 className="text-lg font-semibold text-slate-900">
                Restorative
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              From fillings and crowns to clear aligner treatment, we restore
              both the health and appearance of your teeth using advanced
              techniques and materials.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-slate-700 max-w-2xl mx-auto">
            Unsure which service you need? We’ll guide you through your best
            options during your first visit.
          </p>
          <a
            href="tel:+13105391224"
            className="inline-block mt-6 rounded-md bg-teal-500 text-white px-8 py-3 font-medium shadow hover:bg-teal-600 transition"
          >
            Call to Schedule a Visit
          </a>
        </div>
      </div>
      
    </section>
  );
}


