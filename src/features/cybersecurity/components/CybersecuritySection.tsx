
import {
  ArrowUpRight,
  Award,
  Network,
  ShieldCheck,
} from "lucide-react";

import {
  cybersecurityCourses,
  cybersecurityLabs,
} from "@/data/cybersecurity";

export default function CybersecuritySection() {
  const completedCourses = cybersecurityCourses.filter(
    (course) => course.status === "Completado"
  );

  const publishedLabs = cybersecurityLabs.filter(
    (lab) => lab.status === "Completado" && lab.evidenceUrl
  );

  return (
    <section
      id="cybersecurity"
      aria-labelledby="cybersecurity-heading"
      className="section-container section-padding"
    >
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-wider text-purple">
          CIBERSEGURIDAD
        </p>

        <h2
          id="cybersecurity-heading"
          className="mt-3 text-3xl font-bold md:text-4xl"
        >
          Formación y práctica en{" "}
          <span className="text-gradient">
            seguridad informática.
          </span>
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-muted">
          Desarrollo mis conocimientos en seguridad de TI,
          redes e infraestructura mediante formación
          técnica y ejercicios prácticos.
        </p>
      </div>

      <div className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <Award size={22} className="text-gold" />

          <h3 className="text-xl font-semibold">
            Formación completada
          </h3>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {completedCourses.map((course) => (
            <article
              key={course.id}
              className="rounded-2xl border border-white/10 bg-surface p-6 transition-colors hover:border-gold/30"
            >
              <div className="mb-5 inline-flex rounded-xl bg-gold/10 p-3 text-gold">
                <ShieldCheck size={23} />
              </div>

              <h4 className="text-lg font-semibold">
                {course.title}
              </h4>

              <p className="mt-2 text-sm text-purple">
                {course.provider}
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                {course.description}
              </p>

              {course.credentialUrl && (
                <a
                  href={course.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
                >
                  Ver credencial
                  <ArrowUpRight size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>

      {publishedLabs.length > 0 && (
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Network size={22} className="text-purple" />

            <h3 className="text-xl font-semibold">
              Laboratorios prácticos
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {publishedLabs.map((lab) => (
              <article
                key={lab.id}
                className="rounded-2xl border border-white/10 bg-surface p-6 transition-colors hover:border-purple/30"
              >
                <p className="font-mono text-xs text-purple">
                  {lab.platform}
                </p>

                <h4 className="mt-3 text-lg font-semibold">
                  {lab.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {lab.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {lab.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-white/10 px-3 py-1.5 font-mono text-xs text-muted"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <a
                  href={lab.evidenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light"
                >
                  Ver laboratorio
                  <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
