import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="grid gap-4 rounded-3xl border border-white/5 bg-slate-950/50 p-5 text-sm text-slate-300 shadow-[0_18px_60px_rgba(15,23,42,0.8)] backdrop-blur-xl sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:p-6"
    >
      <div className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">About me</h2>
        <p className="text-balance text-sm leading-relaxed text-slate-200">
          I&apos;m Omed a student and curious frontend developer from Germany. I like building small, focused projects
          where the UI feels clean, fast, and easy to understand.
        </p>
        <p className="text-xs leading-relaxed text-slate-400">
          Most of my time goes into learning modern web tools, but I also explore low-level programming with C++ and
          assembly to better understand how things work under the hood. When I&apos;m not coding, I train calisthenics and
          play strategy games like chess I enjoy seeing slow, consistent progress there as well.
        </p>
      </div>

      <div className="mt-3 space-y-3 sm:mt-0">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Snapshot</p>
        <dl className="grid grid-cols-2 gap-3 text-xs text-slate-300">
          <div className="space-y-1 rounded-2xl border border-white/5 bg-slate-900/40 p-3">
            <dt className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Name</dt>
            <dd className="font-medium text-slate-100">Omed</dd>
          </div>
          <div className="space-y-1 rounded-2xl border border-white/5 bg-slate-900/40 p-3">
            <dt className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Age & location</dt>
            <dd className="font-medium text-slate-100">15 · Germany</dd>
          </div>
          <div className="space-y-1 rounded-2xl border border-white/5 bg-slate-900/40 p-3">
            <dt className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Goal</dt>
            <dd className="font-medium text-slate-100">Become a frontend web developer</dd>
          </div>
          <div className="space-y-1 rounded-2xl border border-white/5 bg-slate-900/40 p-3">
            <dt className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Hobbies</dt>
            <dd className="font-medium text-slate-100">Low-level coding, calisthenics & chess</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};


