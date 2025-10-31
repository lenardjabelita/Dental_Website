import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 to-white" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Gentle, dental care for the whole family
          </h1>
          <p className="mt-4 text-slate-600">
            Personalized treatment in a calm, comfortable environment—with
            a friendly team focused on your smile.
          </p>
          <div className="mt-8">
            <Link href="/services" className="rounded-md bg-teal-500 text-white px-6 py-3 shadow hover:bg-teal-600">
              View services
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
          <h3 className="font-semibold text-slate-900">Why patients choose us:</h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>• Compassionate, patient-first care</li>
            <li>• Timely emergency appointments when available</li>
            <li>• X-rays...</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
