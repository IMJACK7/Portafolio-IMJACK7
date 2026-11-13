
import {
  Code2,
  Database,
  Network,
  ShieldCheck,
} from "lucide-react";

import { skillCategories } from "@/data/skills";

const categoryIcons = {
  "Redes e infraestructura": Network,
  Ciberseguridad: ShieldCheck,
  "Desarrollo de software": Code2,
  "Bases de datos y herramientas": Database,
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-container section-padding"
    >
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-wider text-gold">
          HABILIDADES TÉCNICAS
        </p>

        <h2
          id="skills-heading"
          className="mt-3 text-3xl font-bold md:text-4xl"
        >
          Conocimientos y{" "}
          <span className="text-gradient">
            herramientas.
          </span>
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-muted">
          Fundamentos técnicos y tecnologías que he utilizado
          durante mi formación, proyectos y experiencia laboral.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon =
            categoryIcons[
              category.title as keyof typeof categoryIcons
            ] ?? Code2;

          const isGold = index % 2 === 0;

          return (
            <article
              key={category.id}
              className="group rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className={`mb-5 inline-flex rounded-xl p-3 ${
                  isGold
                    ? "bg-gold/10 text-gold"
                    : "bg-purple/10 text-purple"
                }`}
              >
                <Icon size={24} />
              </div>

              <h3 className="text-xl font-semibold">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    title={skill.evidence}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-foreground/80 transition-colors hover:border-gold/30"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
