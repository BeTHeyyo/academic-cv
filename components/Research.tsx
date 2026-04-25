import SectionHeader from "./SectionHeader";

const cards = [
  {
    sub: "Объект исследования",
    title: "Анизотропные гиперупругие материалы",
    text: "Материалы с направленной внутренней структурой (волокнистые композиты, биологические ткани), поведение которых описывается нелинейной упругостью с учётом анизотропии.",
  },
  {
    sub: "Предмет исследования",
    title: "Математические модели, алгоритмы МКЭ и программный комплекс",
    text: "Разработка функции плотности энергии деформации, алгоритмов МКЭ для геометрически нелинейных задач и их программная реализация.",
  },
  {
    sub: "Направление подготовки",
    title: "1.2.2 — Мат. моделирование, численные методы и комплексы программ",
    text: "Обязательная триада результатов: математическая модель · численные алгоритмы · программный комплекс.",
  },
];

export default function Research() {
  return (
    <section id="research" className="mb-20 fade-up delay-2">
      <SectionHeader num="01" title="Тема диссертации" />

      {/* dark hero card */}
      <div className="relative bg-[#1c1c2e] rounded-2xl p-8 mb-4 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-indigo-600/20 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-indigo-900/30 blur-3xl" />
        <div className="relative z-10">
          <span className="font-mono text-[10px] text-indigo-400 tracking-[0.12em] uppercase mb-4 block">
            Диссертационное исследование
          </span>
          <h2 className="text-xl md:text-2xl font-light text-white leading-relaxed mb-4">
            «Численное моделирование деформации<br className="hidden md:block" />
            анизотропных гиперупругих материалов»
          </h2>
          <p className="font-mono text-[11px] text-white/40 tracking-wider">
            Северо-Восточный федеральный университет · ИМИ · Кафедра ВТ
          </p>
        </div>
      </div>

      {/* info cards */}
      <div className="grid gap-3">
        {cards.map((c) => (
          <div
            key={c.sub}
            className="group bg-white border border-indigo-900/10 rounded-xl p-6 hover:border-indigo-300 transition-colors duration-200"
          >
            <p className="font-mono text-[11px] text-indigo-500 tracking-wider mb-2">{c.sub}</p>
            <h3 className="text-base font-semibold text-slate-800 mb-2 leading-snug">{c.title}</h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
