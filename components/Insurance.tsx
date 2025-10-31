import { ShieldCheck, CreditCard, HelpCircle } from "lucide-react";

const INSURERS = [
  // ⬇️ Replace with your real list later
  "Delta Dental", "MetLife", "Aetna", "Cigna",
  "Blue Cross/Blue Shield", "Guardian", "Humana", "United Concordia"
];

export default function Insurance() {
  return (
    <section className="mt-20">

      {/* Accepted Insurances */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4 text-teal-600">
          <ShieldCheck size={22} />
          <h3 className="text-lg font-semibold text-slate-900">Accepted Insurances</h3>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {INSURERS.map(name => (
            <div
              key={name}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
            >
              {name}
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Coverage varies by plan. Please call with your member ID so we can verify benefits before your visit.
        </p>
      </div>

      {/* Payment Options */}
      <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4 text-teal-600">
          <CreditCard size={22} />
          <h3 className="text-lg font-semibold text-slate-900">Payment Options</h3>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li>Cash, debit, and major credit cards</li>
          <li>Financing options available for larger treatments</li>
        </ul>
        <p className="mt-3 text-sm text-slate-500">
          Insert text.
        </p>
      </div>

      {/* FAQ (simple, no extra libs) */}
      <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-3 text-teal-600">
          <HelpCircle size={22} />
          <h3 className="text-lg font-semibold text-slate-900">FAQs</h3>
        </div>

        <details className="group border-t first:border-t-0 border-slate-200 py-3">
          <summary className="cursor-pointer font-medium text-slate-900 flex justify-between items-center">
            Do you accept my specific plan?
            <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-2 text-slate-700">
            Call us at <a href="tel:+13105391224" className="text-teal-600 hover:underline">(310) 539-1224</a> with your
            insurance details; we’ll verify benefits and review expected copays.
          </p>
        </details>

        <details className="group border-t border-slate-200 py-3">
          <summary className="cursor-pointer font-medium text-slate-900 flex justify-between items-center">
            Do you offer payment plans?
            <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-2 text-slate-700">
            Yes—ask our front desk about financing options for larger treatments.
          </p>
        </details>
      </div>
    </section>
  );
}
