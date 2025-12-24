import React from 'react';

const tech = [
  { label: 'React', tone: 'UI & state', short: 'R' },
  { label: 'TypeScript', tone: 'Correctness', short: 'TS' },
  { label: 'Tailwind', tone: 'Design systems', short: 'TW' },
  { label: 'Node', tone: 'APIs & tooling', short: 'N' },
];

export const Tech: React.FC = () => {
  return (
    <section
      id="stack"
      className="grid gap-4 rounded-3xl border border-white/5 bg-slate-950/50 p-5 text-xs text-slate-300 shadow-[0_18px_60px_rgba(15,23,42,0.8)] backdrop-blur-xl sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] sm:p-6"
    >
      <div className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Stack</h2>
        <p className="text-sm text-slate-200">
          I lean on a modern TypeScript + React stack with Tailwind for design systems. I care about performance,
          accessibility, and code that stays easy to change as products grow.
        </p>
        <p className="text-xs text-slate-400">
          Recently I&apos;ve been exploring better state management patterns, design tokens, and making my projects feel instant and predictable.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {tech.map((item) => (
          <article
            key={item.label}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 p-3 transition hover:border-sky-400/70 hover:bg-slate-900"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),_transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950/80 text-[11px] font-semibold text-slate-100">
                {item.short}
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-semibold text-slate-50">{item.label}</p>
                <p className="text-[11px] text-slate-400">{item.tone}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};


