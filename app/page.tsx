
import { Mail } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "SOFTWARE DEVELOPMENT",
    title: "Booklist 2.0",
    description:
      "A full-stack reading app combining book discovery, personal organization, and AI-powered recommendations.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AI"],
    href: "https://github.com/laurenaschmidt/BOOKLIST2.0",
    linkLabel: "View on GitHub",
    symbol: "✳",
  },
  {
    number: "02",
    category: "DATA ANALYTICS",
    title: "Book Sales Analysis",
    description:
      "Exploring book sales, pricing, longevity, and genre trends through SQL and data visualization.",
    technologies: ["SQL", "BigQuery", "Tableau"],
    href: "#contact",
    linkLabel: "Case study coming soon",
    symbol: "↗",
  },
  {
    number: "03",
    category: "DATA EXPLORATION",
    title: "Dance Moms Analytics",
    description:
      "Investigating the relationship between pyramid placements and solo competition results across seasons.",
    technologies: ["Data Analysis", "SQL", "Tableau"],
    href: "#contact",
    linkLabel: "Case study coming soon",
    symbol: "✳",
  },
  {
    number: "04",
    category: "GAME DEVELOPMENT",
    title: "Tech Trek",
    description:
      "A 3D university-themed runner built in Unity, combining gameplay programming, animation, and environment design.",
    technologies: ["Unity", "C#", "3D"],
    href: "#contact",
    linkLabel: "Project details coming soon",
    symbol: "↗",
  },


  {
    number: "05",
    category: "GAME DEVELOPMENT",
    title: "ChuckRun",
    description:
      "A Game Boy Advance game built in C, bringing classic handheld gaming to life through custom gameplay and low-level programming.",
    technologies: ["C", "Game Boy Advance", "Game Development"],
    href: "https://github.com/laurenaschmidt/ChuckRun",
    linkLabel: "View on GitHub",
    symbol: "♡",
  },


];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-[#a84f6d]"
          aria-label="Lauren's portfolio home"
        >
          LS<span className="text-[#d58ca2]">.</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-5 text-sm text-[#806a75] sm:gap-8"
        >
          <a className="transition hover:text-[#a84f6d]" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-[#a84f6d]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#a84f6d]" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24"
      >
        <div
          aria-hidden="true"
          className="absolute right-8 top-12 -z-10 h-48 w-48 rounded-full bg-[#f8e5ea] blur-3xl md:right-20 md:h-72 md:w-72"
        />

        <p className="mb-6 text-xs font-semibold tracking-[0.22em] text-[#a84f6d]">
          COMPUTER SCIENCE GRADUATE · DEVELOPER · DATA ENTHUSIAST
        </p>

        <h1 className="max-w-4xl text-5xl leading-[1.08] font-semibold tracking-tight md:text-7xl">
          Hello, I&apos;m Lauren
          <span className="text-[#b65c78]">.</span>
          <br />
          <span className="font-normal italic text-[#a84f6d]">
            I love making
            <br className="hidden sm:block" /> ideas come to life.
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-8 text-[#806a75] md:text-lg">
          I&apos;m a computer science graduate who enjoys building software,
          exploring data, and creating thoughtful digital experiences. This is
          where technology meets a little creativity.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[#a84f6d] px-7 py-3.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#8e3c59]"
          >
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/laurenaschmidt"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#ead8df] bg-white/70 px-7 py-3.5 text-sm font-medium transition hover:border-[#d58ca2]"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>


<div className="mt-6 flex items-center gap-3">
  <a
    href="mailto:naurel3@gmail.com"
    aria-label="Email Lauren"
    title="Email me"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ead8df] bg-white/70 text-[#a84f6d] transition hover:-translate-y-1 hover:border-[#d58ca2] hover:bg-[#f8e5ea]"
  >
    <Mail size={19} strokeWidth={1.7} />
  </a>

  <a
    href="https://www.linkedin.com/in/lauren-schmidt-ga/"
    target="_blank"
    rel="noreferrer"
    aria-label="Lauren on LinkedIn"
    title="Find me on LinkedIn"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ead8df] bg-white/70 text-[#a84f6d] transition hover:-translate-y-1 hover:border-[#d58ca2] hover:bg-[#f8e5ea]"
  >
    <span className="text-sm font-bold tracking-tight">in</span>
  </a>
</div>


        <div className="mt-12 flex items-center gap-3 text-xs tracking-wide text-[#806a75]">
          <span className="h-px w-10 bg-[#d58ca2]" />
          A LITTLE BIT OF CODE, A LITTLE BIT OF CREATIVITY
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-y border-[#ead8df] bg-white/50 px-6 py-20 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[#a84f6d]">
                A FEW THINGS I&apos;VE MADE
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Selected projects<span className="text-[#b65c78]">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#806a75]">
              From full-stack applications to data stories, here&apos;s a look
              at what I enjoy building.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-[#ead8df] bg-[#fffafa] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d58ca2] hover:shadow-lg hover:shadow-[#a84f6d]/5 md:p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest text-[#a84f6d]">
                    {project.number} / 05
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8e5ea] text-lg text-[#a84f6d]"
                  >
                    {project.symbol}
                  </span>
                </div>

                <p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-[#a84f6d]">
                  {project.category}
                </p>

                <h3 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-7 text-[#806a75]">
                  {project.description}
                </p>


{project.title === "ChuckRun" && (
  <div className="mt-5 overflow-hidden rounded-xl border border-[#ead8df] bg-white">
    <iframe
      src="https://drive.google.com/file/d/1296AY6Htf9y4wgNnsqU6ur22GQjWgGUV/preview"
      title="ChuckRun gameplay demonstration"
      className="aspect-video w-full"
      allow="autoplay"
      allowFullScreen
    />
    <p className="px-3 py-2 text-xs text-[#806a75]">
      Gameplay demonstration
    </p>
  </div>
)}


                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#f8e5ea] px-3 py-1.5 text-xs text-[#684653]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#a84f6d] transition group-hover:gap-3"
                >
                  {project.linkLabel} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[#a84f6d]">
              A LITTLE ABOUT ME
            </p>
            <h2 className="text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
              Curious by nature.
              <br />
              <span className="font-normal italic text-[#a84f6d]">
                Technical by choice.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-[#806a75] md:text-base">
            <p>
              I&apos;m a recent computer science graduate interested in the
              intersection of software engineering, data analytics, and
              creative problem-solving.
            </p>
            <p>
              I love learning how things work, turning ideas into real
              projects, and finding new ways to combine technical skills with
              creativity.
            </p>

            <div className="border-t border-[#ead8df] pt-5">
              <p className="mb-3 text-xs font-semibold tracking-widest text-[#a84f6d]">
                THINGS I LIKE WORKING WITH
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Python",
                  "SQL",
                  "PostgreSQL",
                  "Tableau",
                  "Unity",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#ead8df] px-3 py-1.5 text-xs text-[#684653]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 pb-20 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#f8e5ea] px-6 py-12 text-center md:px-12 md:py-16">
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[#a84f6d]">
            LET&apos;S CONNECT
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Have something in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#806a75]">
            I&apos;m always happy to connect with people who love technology,
            creativity, and building something meaningful.
          </p>
          <a
            href="https://github.com/laurenaschmidt"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-[#a84f6d] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#8e3c59]"
          >
            Find me on GitHub ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ead8df] px-6 py-6 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-[#806a75] sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-semibold text-[#a84f6d]">LS.</span> Made with
            curiosity and a little pink.
          </p>
          <a
            href="#home"
            className="transition hover:text-[#a84f6d]"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
