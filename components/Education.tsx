import SectionHeader from "./SectionHeader";

const entries = [
  {
    date: "2024 — настоящее время",
    title: "Математическое моделирование, численные методы и комплексы программ.",
    org: "СВФУ, Институт математики и информатики, кафедра ВТ",
    desc: "Тема: «Численное моделирование деформации анизотропных гиперупругих материалов».",
  },
  {
    date: "2022 - 2024",
    title: "Перспективные методы искусственного интеллекта в сетях передачи и обработки данных",
    org: "СВФУ им. М.К. Аммосова",
    desc: "Модификация архитектуры U-Net капсульными нейронными сетями для сегментации медицинских снимков",
  },
  {
    date: "2018 - 2022",
    title: "Прикладная математика и информатика",
    org: "СВФУ им. М.К. Аммосова",
    desc: "Численное моделирование динамики температурного поля в окресности газопровода из полиэтиленовых труб",
  },
];

export default function Education() {
  return (
    <section className="mb-20 fade-up delay-5">
      <SectionHeader num="04" title="Образование" />
      <div className="grid gap-3">
        {entries.map((e) => (
          <div
            key={e.title}
            className="group bg-white border border-indigo-900/10 rounded-xl p-6 hover:border-indigo-300 hover:translate-x-1 transition-all duration-200"
          >
            <p className="font-mono text-[11px] text-indigo-500 tracking-wider mb-1">{e.date}</p>
            <h3 className="text-base font-semibold text-slate-800 mb-1">{e.title}</h3>
            <p className="text-sm text-indigo-400 font-light mb-2">{e.org}</p>
            {e.desc && <p className="text-sm text-slate-500 font-light leading-relaxed">{e.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
