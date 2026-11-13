
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { education, workExperience } from "@/data/experience";

export default function ExperienceSection() {
  const academicEducation = education.filter(
    (item) => item.type === "academic"
  );

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-container section-padding"
    >
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-wider text-gold">
          EXPERIENCIA Y FORMACIÓN
        </p>

        <h2
          id="experience-heading"
          className="mt-3 text-3xl font-bold md:text-4xl"
        >
          Mi trayectoria
        </h2>

        <p className="mt-4 max-w-2xl text-muted">
          Experiencia profesional y formación académica que
          respaldan mi crecimiento en el sector tecnológico.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-surface p-6 md:p-8">
          <div className="mb-7 flex items-center gap-3">
            <div className="rounded-xl bg-gold/10 p-3 text-gold">
              <BriefcaseBusiness size={22} />
            </div>

            <h3 className="text-xl font-semibold">
              Experiencia profesional
            </h3>
          </div>

          <div className="space-y-8">
            {workExperience.map((item) => (
              <article key={item.id}>
                <p className="font-mono text-xs text-gold">
                  {item.organization}
                </p>

                <h4 className="mt-3 text-lg font-semibold">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm text-purple">
                  {item.area}
                </p>

                {item.period && (
                  <p className="mt-2 text-xs text-muted">
                    {item.period}
                  </p>
                )}

                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.description}
                </p>

                {item.responsibilities &&
                  item.responsibilities.length > 0 && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted marker:text-gold">
                      {item.responsibilities.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-gold/20 bg-gold/5 px-3 py-1.5 font-mono text-xs text-gold"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-surface p-6 md:p-8">
          <div className="mb-7 flex items-center gap-3">
            <div className="rounded-xl bg-purple/10 p-3 text-purple">
              <GraduationCap size={22} />
            </div>

            <h3 className="text-xl font-semibold">
              Formación académica
            </h3>
          </div>

          <div className="space-y-6">
            {academicEducation.map((item) => (
              <article
                key={item.id}
                className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-purple">
                    {item.period}
                  </span>

                  <span className="text-xs text-muted">
                    {item.status}
                  </span>
                </div>

                <h4 className="mt-3 text-lg font-semibold">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm text-gold">
                  {item.institution}
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
