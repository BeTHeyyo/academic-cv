"use client";

const links = [
  { href: "#research", label: "Исследование" },
  { href: "#skills",   label: "Навыки" },
  { href: "#progress", label: "Этапы" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-7 py-4 bg-[#f5f4f0]/90 backdrop-blur-md border-b border-indigo-900/10">
      <ul className="flex gap-7">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-[11px] text-slate-400 hover:text-indigo-600 tracking-wider uppercase transition-colors duration-200"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
