"use client";

import { motion } from "framer-motion";
import { AsciiPortrait } from "@/components/ascii-portrait";
import { TypingIntro } from "@/components/typing-intro";
import {
  contacts,
  navItems,
  profile,
  projects,
  skillGroups
} from "@/lib/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

const viewport = { once: true, margin: "-80px" };

export function Portfolio() {
  return (
    <>
      <Header />
      <main>
        <section
          id="home"
          className="section-anchor mx-auto grid min-h-[88svh] w-full max-w-[var(--page-max)] items-center gap-10 px-[var(--page-x)] pb-16 pt-28 lg:grid-cols-[0.96fr_1.04fr] lg:gap-16"
          aria-labelledby="hero-title"
        >
          <AsciiPortrait />
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.18 } }
            }}
            className="max-w-2xl"
          >
            <motion.p
              variants={reveal}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 text-sm uppercase tracking-[0.24em] text-dim"
            >
              /home/naman
            </motion.p>
            <motion.h1
              id="hero-title"
              variants={reveal}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl font-bold leading-[1.02] text-ink sm:text-5xl md:text-6xl"
            >
              Naman Aggarwal
            </motion.h1>
            <motion.div
              variants={reveal}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 border-l border-accent/35 pl-5"
            >
              <TypingIntro lines={profile.terminalLines} />
            </motion.div>
            <motion.p
              variants={reveal}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg"
            >
              {profile.shortIntro}
            </motion.p>
            <motion.div
              variants={reveal}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm"
            >
              <a className="terminal-link" href="#projects">
                <span aria-hidden="true">&gt;</span> projects
              </a>
              <a className="terminal-link" href="#contact">
                <span aria-hidden="true">&gt;</span> contact
              </a>
              <a
                className="terminal-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true">&gt;</span> github
              </a>
            </motion.div>
          </motion.div>
        </section>

        <Section id="about" label="01" title="About" command="cat ./about.txt">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <p className="max-w-xl text-lg leading-8 text-muted">{profile.about}</p>
            <div className="terminal-card p-5 sm:p-6">
              <pre className="overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-muted">
                <code>{profile.aboutBlock}</code>
              </pre>
            </div>
          </div>
        </Section>

        <Section id="skills" label="02" title="Skills" command="skills --grouped">
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.name}
                variants={reveal}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="terminal-card p-5"
              >
                <p className="mb-4 text-sm text-accent">&gt; {group.name}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-line bg-panel-soft px-2.5 py-1 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          label="03"
          title="Projects"
          command="gh repo list namanaggarwal76 --public"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={reveal}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="terminal-card flex min-h-[250px] flex-col p-5 sm:p-6"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-dim">{project.signal}</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">
                      {project.title}
                    </h3>
                  </div>
                  <pre aria-hidden="true" className="text-right text-xs leading-4 text-dim">
                    {project.ascii}
                  </pre>
                </div>
                <p className="text-sm leading-7 text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="border border-line px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-dim"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-7 text-sm">
                  <a
                    className="terminal-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    github
                  </a>
                  <a
                    className="terminal-link"
                    href={project.demoUrl ?? `${project.githubUrl}#readme`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.demoUrl ? "live demo" : "demo/readme"}
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="contact" label="04" title="Contact" command="contact --open">
          <div className="terminal-card p-5 sm:p-7">
            <p className="text-sm text-accent">&gt; contact --email</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Open to collaboration and hackathons.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group border border-line bg-panel-soft p-4 transition duration-200 ease-[var(--ease-out-quart)] hover:border-accent/45 hover:bg-panel"
                >
                  <span className="block text-xs uppercase tracking-[0.18em] text-dim">
                    {contact.command}
                  </span>
                  <span className="mt-3 block break-words text-sm text-ink group-hover:text-accent">
                    {contact.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-black/86 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[var(--nav-height)] max-w-[var(--page-max)] items-center justify-between gap-5 px-[var(--page-x)] text-sm"
      >
        <a href="#home" className="terminal-link border-none font-semibold text-ink">
          ~/naman
        </a>
        <div className="hidden items-center gap-6 text-xs text-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-dim" aria-label="Current status">
          <span className="text-accent">*</span> building
        </p>
      </nav>
    </header>
  );
}

function Section({
  id,
  label,
  title,
  command,
  children
}: {
  id: string;
  label: string;
  title: string;
  command: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-title`}
      className="section-anchor mx-auto w-full max-w-[var(--page-max)] px-[var(--page-x)] py-16 sm:py-20"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } }
      }}
    >
      <motion.div
        variants={reveal}
        transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="text-sm text-dim">[{label}]</p>
          <h2 id={`${id}-title`} className="mt-2 text-2xl font-semibold text-ink">
            {title}
          </h2>
        </div>
        <p className="text-sm text-accent">{command}</p>
      </motion.div>
      {children}
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[var(--page-max)] flex-col gap-3 border-t border-line px-[var(--page-x)] py-8 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
      <p>(c) {new Date().getFullYear()} Naman Aggarwal</p>
      <p>built in Next.js / Tailwind / Framer Motion</p>
    </footer>
  );
}
