export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold text-slate-800">
            Leo Jireh C. Abelita, DMD, Inc.
          </div>
          <p>Compassionate family & cosmetic dentistry.</p>
        </div>
        <div>
          <div className="font-medium text-slate-800">Hours</div>
          <p>Mon • Wed • Fri • Sat<br/>11:00 AM - 7:00 PM</p>
        </div>
        <div>
          <div className="font-medium text-slate-800">Contact</div>
          <p>Phone: (310) 539-1224<br/>Email: Godsmile777@ymail.com</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-6">
        © {new Date().getFullYear()} Leo Jireh C. Abelita, DMD, Inc. All rights reserved.
      </div>
    </footer>
  );
}
