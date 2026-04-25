import SectionHeader from "./SectionHeader";

const stages = [
  {
    num: "I",
    status: "active" as const,
    tag: "Текущий этап",
    title: "Математическая модель",
    desc: "Выбор функции плотности энергии деформации W для анизотропного случая. Формулировка краевой задачи в вариационной постановке. Вывод тензора напряжений и касательного модуля упругости.",
  },
  {
    num: "II",
    status: "next" as const,
    tag: "Следующий",
    title: "Численные алгоритмы",
    desc: "Реализация МКЭ-алгоритма в FEniCS для геометрически нелинейных задач. Устранение объёмного замыкания (F-bar метод). Нелинейный решатель — метод Ньютона-Рафсона.",
  },
  {
    num: "III",
    status: "next" as const,
    tag: "Планируется",
    title: "Программный комплекс",
    desc: "Верификация (сравнение с аналитическими решениями), валидация (сравнение с экспериментом), регистрация программы для ЭВМ (Роспатент), вычислительный эксперимент.",
  },
];

export default function Progress() {
  return (
    <section id="progress" className="mb-20 fade-up delay-4">
      <SectionHeader num="03" title="Этапы работы" />

      <div className="relative timeline-line pl-0">
        {stages.map((s, i) => (
          <div key={s.num} className={`flex gap-5 ${i < stages.length - 1 ? "pb-8" : ""}`}>
            {/* dot */}
            <div
              className={`relative z-10 w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-mono text-[10px] font-medium mt-1 ${
                s.status === "active"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-white border border-slate-200 text-slate-400"
              }`}
            >
              {s.num}
            </div>

            {/* content */}
            <div className="pb-1">
              <span
                className={`inline-block font-mono text-[10px] px-3 py-1 rounded-full mb-2 tracking-wider ${
                  s.status === "active"
                    ? "bg-indigo-100 text-indigo-600"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {s.tag}
              </span>
              <h3 className="text-base font-semibold text-slate-800 mb-1">{s.title}</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed max-w-xl">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
