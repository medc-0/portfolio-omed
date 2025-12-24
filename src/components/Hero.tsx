import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-1 flex-col justify-center gap-8 rounded-3xl border border-white/5 bg-slate-950/60 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:p-8 md:flex-row md:items-center"
    >
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-100">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>15 y/o · Germany · Frontend focused</span>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Curious frontend developer</p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Omed</span>.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I&apos;m a 15 year old developer from Germany who enjoys building small web projects and learning how real
            products are put together. My goal is to grow into a strong frontend web developer who writes clear code and
            interfaces that feel light and focused.
          </p>
          <p className="max-w-xl text-xs leading-relaxed text-slate-400">
            In my hobby projects I go low-level with <span className="text-slate-100">C++</span>,{' '}
            <span className="text-slate-100">assembly</span>, and sometimes <span className="text-slate-100">Python</span>.
            Outside of coding, I train <span className="text-slate-100">calisthenics</span> and enjoy pushing my limits there too.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/medc-0"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-400" />
            <span>View my GitHub</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-400/60 hover:bg-slate-900"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-400" />
            <span>View projects</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full bg-gradient-to-tr from-sky-500 to-cyan-400 ring-2 ring-sky-500/60">
              <img
                src="/profilePic.jpg"
                alt="Profile Picture"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-medium text-slate-100">Self-taught</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">learning in public</p>
            </div>
          </div>

          <div className="hidden h-6 w-px bg-gradient-to-b from-slate-600/40 via-slate-600/70 to-slate-600/20 sm:block" />

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/medc-0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 px-3 text-[11px] font-semibold text-slate-200 transition hover:border-sky-400 hover:bg-slate-900"
            >
              github.com/medc-0
            </a>
            <div className="inline-flex h-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 px-3 text-[11px] font-semibold text-slate-200">
              discord: <span className="ml-1 text-slate-50">hexamed22</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-1 justify-center md:mt-0">
        <div className="group relative h-52 w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.8)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Currently Focusing</span>
              </span>
              <span className="rounded-full border border-white/10 bg-slate-900/70 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Frontend • UI
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                Focus
              </p>
              <p className="text-sm font-medium text-slate-50">
                Building interfaces that feel <span className="text-sky-300">fast</span>,{' '}
                <span className="text-sky-300">intentional</span>, and <span className="text-sky-300">alive</span>.
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <p>Based in Anywhere</p>
              <p className="text-slate-500">Available for freelance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


