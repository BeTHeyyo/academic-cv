const pills = [
  { label: "1.2.2 Мат. моделирование", accent: true },
  { label: "Механика деформируемого тела" },
  { label: "МКЭ · FEniCS" },
];

export default function Hero() {
  return (
    <section className="py-20 border-b border-indigo-900/10 mb-20">
      <h1 className="text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight mb-3 fade-up delay-2">
        Большаков{" "}
        <em className="not-italic text-indigo-600">Алексей</em>
        <br />
        Владимирович
      </h1>

      <p className="text-base text-slate-400 font-light mb-8 fade-up delay-2">
        Аспирант · 1.2.2 · СВФУ ИМИ, кафедра ВТ
      </p>

      <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl border-l-2 border-indigo-300 pl-5 mb-10 fade-up delay-3">
        Занимаюсь численным моделированием деформации анизотропных гиперупругих
        материалов — материалов с направленной внутренней структурой, поведение
        которых описывается нелинейной упругостью. Основной инструмент — метод
        конечных элементов, реализованный на платформе FEniCS.
      </p>

      <div className="flex flex-wrap gap-2 fade-up delay-4">
        {pills.map((p) => (
          <span
            key={p.label}
            className={`font-mono text-[11px] px-4 py-1.5 rounded-full border tracking-wider ${
              p.accent
                ? "bg-indigo-100 border-indigo-300 text-indigo-700"
                : "bg-white border-indigo-900/10 text-slate-500"
            }`}
          >
            {p.label}
          </span>
        ))}
      </div>
    </section>
  );
}
