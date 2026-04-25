import SectionHeader from "./SectionHeader";

const skills = [
  { name: "Python",         type: "язык программирования", color: "bg-indigo-50 border-indigo-200" },
  { name: "FEniCS",         type: "платформа МКЭ",          color: "bg-indigo-50 border-indigo-200" },
  { name: "C++",            type: "язык программирования", color: "bg-indigo-50 border-indigo-200" },
  { name: "NumPy / SciPy",  type: "вычисления",             color: "bg-slate-50  border-slate-200"  },
  { name: "МКЭ",            type: "численный метод",        color: "bg-emerald-50 border-emerald-200" },
  { name: "Нелин. упругость", type: "область знаний",       color: "bg-emerald-50 border-emerald-200" },
  { name: "LaTeX",          type: "типографика",            color: "bg-slate-50  border-slate-200"  },
  { name: "Прикл. математика", type: "базовое образование", color: "bg-slate-50  border-slate-200"  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-20 fade-up delay-3">
      <SectionHeader num="02" title="Навыки и инструменты" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {skills.map((s) => (
          <div
            key={s.name}
            className={`border rounded-xl p-4 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 ${s.color}`}
          >
            <p className="font-mono text-[13px] font-medium text-slate-800 mb-1">{s.name}</p>
            <p className="font-mono text-[10px] text-slate-400 tracking-wide">{s.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
