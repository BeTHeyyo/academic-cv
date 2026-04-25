import SectionHeader from "./SectionHeader";

const highlights = [
  {
    label: "Архитектура",
    value: "Свёрточная нейронная сеть (CNN) для семантической сегментации",
  },
  {
    label: "Задача",
    value: "Автоматическая разметка областей на медицинских снимках",
  },
  {
    label: "Результат",
    value: "Обучена и валидирована модель сегментации на реальных данных",
  },
];

const tags = ["Python", "Tensorflow", "CNN", "Сегментация", "Мед. изображения", "DICOM"];

export default function MLExperience() {
  return (
    <section className="mb-20 fade-up delay-4">
      <SectionHeader num="05" title="Практический опыт" />

      <div className="relative bg-white border border-indigo-900/10 rounded-2xl overflow-hidden hover:border-indigo-300 transition-colors duration-300">

        {/* top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-400" />

        <div className="p-7">
          {/* header row */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-[10px] text-indigo-500 tracking-widest uppercase mb-2 block">
                Прикладной проект
              </span>
              <h3 className="text-lg font-semibold text-slate-800 leading-snug">
                Сегментация медицинских изображений<br />
                <span className="font-light text-slate-500">на основе свёрточной нейронной сети</span>
              </h3>
            </div>

            {/* icon badge */}
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-2xl">
              🧠
            </div>
          </div>

          {/* description */}
          <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 border-l-2 border-indigo-200 pl-4">
            Разработал и обучил свёрточную модель для автоматической сегментации
            областей интереса на медицинских снимках. Работа включала подготовку
            датасета, выбор архитектуры сети, обучение и валидацию модели на
            реальных данных.
          </p>

          {/* highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-slate-50 border border-slate-100 rounded-xl p-4"
              >
                <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                  {h.label}
                </p>
                <p className="text-[13px] text-slate-700 font-light leading-snug">
                  {h.value}
                </p>
              </div>
            ))}
          </div>

          {/* tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}