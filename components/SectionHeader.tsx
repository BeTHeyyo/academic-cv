interface SectionHeaderProps {
  num: string;
  title: string;
}

export default function SectionHeader({ num, title }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline gap-4 mb-8 border-b border-indigo-900/10 pb-4">
      <span className="font-mono text-[11px] text-indigo-500 tracking-widest">{num}</span>
      <span className="font-mono text-[11px] text-slate-400 tracking-[0.1em] uppercase">{title}</span>
    </div>
  );
}
