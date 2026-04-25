import SectionHeader from "./SectionHeader";

const contacts = [
  { label: "Email",           value: "bolsocop@gmail.ru" },
  { label: "Организация",     value: "СВФУ · ИМИ · Кафедра ВТ" },
];

export default function Contacts() {
  return (
    <section id="contacts" className="mb-20 fade-up delay-6">
      <SectionHeader num="05" title="Контакты" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {contacts.map((c) => (
          <div
            key={c.label}
            className="bg-white border border-indigo-900/10 rounded-xl p-4 hover:border-indigo-300 transition-colors duration-200"
          >
            <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-1">{c.label}</p>
            <p className="font-mono text-[13px] text-slate-800">{c.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
