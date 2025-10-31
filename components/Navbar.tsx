"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/insurance", label: "Insurance" },
  { href: "/contact", label: "Contact" },
];


export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          <span className="text-teal-600">Dr. Leo Abelita</span>{" "}
          <span className="text-slate-700">DMD</span>
        </Link>
        <ul className="flex items-center gap-6 text-sm">
  {links.map((l) => (
    <li key={l.href}>
      <Link
        href={l.href}
        className={`px-1 py-2 hover:text-teal-600 transition ${
          pathname === l.href ? "text-teal-600" : "text-slate-700"
        }`}
      >
        {l.label}
      </Link>
    </li>
  ))}

  {/* 📞 Call Now Button */}
  <li>
    <a
      href="tel:+13105391224" // replace with real number
      className="rounded-md bg-teal-500 text-white px-4 py-2 hover:bg-teal-600 transition"
    >
      Call Now
    </a>
  </li>
</ul>

      </nav>
    </header>
  );
}
