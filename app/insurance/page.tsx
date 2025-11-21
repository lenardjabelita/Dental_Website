import Insurance from "@/components/Insurance";

export default function InsurancePage() {
  return (
    <section className="relative">
      {/* soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-slate-50 to-white" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Insurance & Payment</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We accept many major insurance plans and offer flexible payment options.
            Call us and we’ll verify your benefits before your visit.
          </p>
        </div>
        
        <Insurance />
      </div>
    </section>
  );
}
