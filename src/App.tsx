import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Tech } from './components/Tech';
import { Projects } from './components/Projects';

export const App: React.FC = () => {
  return (
    <div className="bg-transparent text-slate-50">
      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
          <div className="absolute inset-[12%] rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="absolute inset-x-10 top-0 h-16 bg-gradient-to-b from-sky-500/18 via-transparent to-transparent blur-2xl" />
        </div>

        <Hero />
        <About />
        <Tech />
        <Projects />

        <footer className="mt-1 border-t border-white/5 pt-3 text-xs text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Omed. All rights reserved.</p>
          <p className="mt-1 sm:mt-0">Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

