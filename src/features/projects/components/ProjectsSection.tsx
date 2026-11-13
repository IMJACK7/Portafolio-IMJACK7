
import { SiGithub } from "react-icons/si";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-container section-padding"
    >
      {/* Section heading */}
      <div className="mb-12">
        <p className="font-mono text-sm text-gold">
          03 / SELECTED WORK
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Proyectos destacados
        </h2>

        <p className="mt-4 max-w-2xl text-muted">
          Una selección de proyectos académicos y personales
          en los que he trabajado, explorando diferentes áreas
          del desarrollo de software y la tecnología.
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/40"
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple/10 blur-3xl transition duration-500 group-hover:bg-purple/20" />

            {/* Card header */}
            <div className="relative flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                <Code2 size={21} />
              </div>

              <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted">
                {project.status}
              </span>
            </div>

            {/* Project information */}
            <div className="relative mt-6 flex-1">
              <p className="font-mono text-xs uppercase tracking-wider text-purple">
                {project.kind}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-foreground transition group-hover:text-gold-light">
                {project.name}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {project.summary}
              </p>
            </div>

            {/* Technologies */}
            <div className="relative mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Project links */}
            <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs text-muted">
                IMJACK7 / PROJECT_{project.id}
              </span>

              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código de ${project.name} en GitHub`}
                  className="inline-flex items-center gap-2 text-sm text-foreground transition hover:text-gold"
                >
                  <SiGithub size={16} />
                  Código
                  <ArrowUpRight size={15} />
                </a>
              ) : (
                <span className="text-xs text-muted">
                  Repositorio pendiente
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
