import React from 'react';

type Project = {
  title: string;
  summary: string;
  tag: string;
  href?: string;
};

const ProjectBadge: React.FC<{ label: string }> = ({ label }) => {
  const short =
    label === 'Moviehub' ? 'MV' : label === 'Educards' ? 'ED' : label === 'Global Skillbot' ? 'GS' : 'PR';

  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 text-[11px] font-semibold text-slate-100">
      {short}
    </span>
  );
};

const projects: Project[] = [
  {
    title: 'Moviehub',
    summary: 'A small movie explorer built with React where you can quickly browse different films in a clean layout.',
    tag: 'React app',
    href: 'https://github.com/medc-0/react-movies',
  },
  {
    title: 'Educards',
    summary: 'A flashcards app I use to learn faster by flipping through cards and repeating the important stuff.',
    tag: 'Full stack app',
    href: 'https://github.com/medc-0/Educards-flashcards',
  },
  {
    title: 'Global Skillbot',
    summary: 'A Discord bot that tracks levels and skills across servers so communities can grow together.',
    tag: 'Discord bot',
    href: 'https://github.com/medc-0/global-skillbot-discord',
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="space-y-4 rounded-3xl border border-white/5 bg-slate-950/60 p-5 text-sm text-slate-300 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:p-6"
    >
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Projects</h2>
          <p className="mt-2 text-sm text-slate-200">
            A few things I&apos;ve built recently that show how I think about interfaces, learning, and community tools.
          </p>
        </div>
        <div className="mt-1 text-[11px] text-slate-400">
          More projects on{' '}
          <a
            href="https://github.com/medc-0"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-100 underline-offset-4 hover:text-slate-50 hover:underline"
          >
            github.com/medc-0
          </a>
        </div>
      </header>

      <div className="grid gap-3 sm:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-slate-900/60 p-3 transition hover:-translate-y-0.5 hover:border-sky-400/70 hover:bg-slate-900"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.2),_transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative space-y-2">
              <div className="flex items-center gap-2">
                <ProjectBadge label={project.title} />
                <div>
                  <p className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/60 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                    {project.tag}
                  </p>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-slate-50">{project.title}</h3>
              <p className="text-xs text-slate-300">{project.summary}</p>
            </div>

            <div className="relative mt-3 flex items-center justify-between text-[11px] text-slate-400">
              <p>Built with React, TypeScript, Tailwind</p>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/70 px-2 py-1 text-[11px] font-medium text-slate-100 opacity-80 transition hover:border-sky-400 hover:opacity-100"
                >
                  <span>Live</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};


