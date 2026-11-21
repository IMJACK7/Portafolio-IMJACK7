
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import {
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Layers3,
  ShoppingBag,
} from "lucide-react";

import { projects, type Project } from "@/data/projects";

// Proyectos destacados y secundarios
const featuredProjects = projects.filter(
  (project) => project.featured
);

const otherProjects = projects.filter(
  (project) => !project.featured
);

// Etiquetas de tecnologías
function TechnologyTags({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}

// Enlaces disponibles para cada proyecto
function ProjectLinks({
  project,
}: {
  project: Project;
}) {
  if (!project.repoUrl && !project.demoUrl) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-5">
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver repositorio de ${project.name}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-gold"
        >
          <SiGithub size={18} />
          Código
          <ArrowUpRight size={16} />
        </a>
      )}

      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver demostración de ${project.name}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-gold"
        >
          <ExternalLink size={17} />
          Ver proyecto
          <ArrowUpRight size={16} />
        </a>
      )}
    </div>
  );
}

// Proyecto principal
function FeaturedProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-surface transition-colors duration-300 hover:border-gold/50">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-purple/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-gold/[0.06] blur-[100px]" />

      <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">

        {/* Project information */}
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">

          {/* Labels */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
              PROYECTO PRINCIPAL
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted">
              {project.status}
            </span>
          </div>

          {/* Title */}
          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-purple">
              {project.kind} / Full Stack
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-foreground transition-colors group-hover:text-gold sm:text-4xl">
              {project.name}
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              {project.summary}
            </p>
          </div>

          {/* Technical contribution */}
          {project.contribution && (
            <div className="mt-7 border-l-2 border-purple/50 pl-4">
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-purple">
                Contribución técnica
              </p>

              <p className="text-sm leading-7 text-muted">
                {project.contribution}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="mt-8">
            <TechnologyTags
              technologies={project.technologies}
            />
          </div>

          {/* Links */}
          <div className="mt-auto pt-9">
            <div className="border-t border-white/10 pt-5">
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>

        {/* Visual panel */}
        <div className="relative flex min-h-[300px] flex-col justify-center overflow-hidden border-t border-white/10 bg-[#0C0E15] p-6 sm:p-8 lg:min-h-[460px] lg:border-l lg:border-t-0">

          {project.image ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src={project.image}
                alt={`Captura del proyecto ${project.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative mx-auto w-full max-w-sm">

              {/* Visual heading */}
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-xs text-muted">
                  project.overview
                </span>

                <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_#D6A84B]" />
              </div>

              {/* Technical modules */}
              <div className="grid grid-cols-2 gap-3">

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <ShoppingBag
                    size={23}
                    className="mb-4 text-gold"
                  />

                  <p className="text-sm font-medium text-foreground">
                    E-commerce
                  </p>

                  <p className="mt-1 text-xs text-muted">
                    Catálogo y pedidos
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <Layers3
                    size={23}
                    className="mb-4 text-purple"
                  />

                  <p className="text-sm font-medium text-foreground">
                    Kits
                  </p>

                  <p className="mt-1 text-xs text-muted">
                    Configuración
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <Database
                    size={23}
                    className="mb-4 text-purple"
                  />

                  <p className="text-sm font-medium text-foreground">
                    PostgreSQL
                  </p>

                  <p className="mt-1 text-xs text-muted">
                    Prisma ORM
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <Cloud
                    size={23}
                    className="mb-4 text-gold"
                  />

                  <p className="text-sm font-medium text-foreground">
                    Neon
                  </p>

                  <p className="mt-1 text-xs text-muted">
                    Datos en la nube
                  </p>
                </div>
              </div>

              {/* Bottom terminal */}
              <div className="mt-5 rounded-lg border border-white/10 bg-background/70 px-4 py-3 font-mono text-xs">
                <span className="text-purple">
                  project.status
                </span>

                <span className="text-muted">
                  {" = "}
                </span>

                <span className="text-gold">
                  "En desarrollo"
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// Tarjetas secundarias
function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 sm:p-7">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple/10 blur-3xl transition duration-500 group-hover:bg-purple/20" />

      {/* Header */}
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
          <Code2 size={21} />
        </div>

        <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted">
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="relative mt-6 flex-1">
        <p className="font-mono text-xs uppercase tracking-wider text-purple">
          {project.kind}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-foreground transition-colors group-hover:text-gold">
          {project.name}
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted">
          {project.summary}
        </p>
      </div>

      {/* Technologies */}
      <div className="relative mt-7">
        <TechnologyTags
          technologies={project.technologies}
        />
      </div>

      {/* Footer */}
      <div className="relative mt-7 border-t border-white/10 pt-5">
        {project.repoUrl || project.demoUrl ? (
          <ProjectLinks project={project} />
        ) : (
          <span className="font-mono text-xs text-muted">
            IMJACK7 / {project.id.toUpperCase()}
          </span>
        )}
      </div>
    </article>
  );
}

// Main section
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-container section-padding"
    >
      {/* Section heading */}
      <div className="mb-12">
        <p className="font-mono text-sm text-gold">
          04 / SELECTED WORK
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Proyectos destacados
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-muted">
          Una selección de proyectos que reflejan mi experiencia
          práctica en desarrollo de software, bases de datos,
          infraestructura y soluciones tecnológicas.
        </p>
      </div>

      {/* Featured projects */}
      {featuredProjects.length > 0 && (
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      )}

      {/* Other projects */}
      {otherProjects.length > 0 && (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      )}
    </section>
  );
}
