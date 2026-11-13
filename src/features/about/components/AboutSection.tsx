
import {
  GraduationCap,
  ShieldCheck,
  Code2,
  Network,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

const interests = [
  {
    icon: ShieldCheck,
    title: "Ciberseguridad",
    description:
      "Comprender, implementar y fortalecer mecanismos de protección para sistemas y entornos tecnológicos.",
    color: "text-gold",
    background: "bg-gold/10",
  },
  {
    icon: Network,
    title: "Infraestructura y redes",
    description:
      "Explorar la arquitectura de redes, los sistemas operativos y la infraestructura que conecta los servicios.",
    color: "text-purple",
    background: "bg-purple/10",
  },
  {
    icon: Code2,
    title: "Desarrollo de software",
    description:
      "Construir soluciones tecnológicas aplicando buenas prácticas, estructuras organizadas y pensamiento lógico.",
    color: "text-gold",
    background: "bg-gold/10",
  },
  {
    icon: Terminal,
    title: "Tecnología y aprendizaje",
    description:
      "Experimentar con herramientas, sistemas y nuevas tecnologías mediante el aprendizaje práctico.",
    color: "text-purple",
    background: "bg-purple/10",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-container section-padding relative"
    >
      {/* Section heading */}
      <div className="mb-14">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          01 / About me
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Detrás de{" "}
          <span className="text-gradient">IMJACK7.</span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Una mirada a mi formación, intereses y la dirección
          profesional que estoy construyendo.
        </p>
      </div>

      {/* Main content */}
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

        {/* Personal introduction */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface p-6 sm:p-8">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple/10 blur-[90px]" />

          <div className="relative z-10">
            <span className="font-mono text-xs tracking-wider text-purple">
              // WHO AM I?
            </span>

            <h3 className="mt-5 text-2xl font-semibold leading-snug sm:text-3xl">
              Soy estudiante de{" "}
              <span className="text-gold">
                Ingeniería Informática
              </span>
              , apasionado por comprender y construir tecnología.
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-7 text-muted sm:text-base">
              <p>
                Mi interés por la tecnología va más allá del
                desarrollo de software. Me gusta comprender
                cómo funcionan los sistemas, cómo se comunican
                sus componentes y qué permite que una
                infraestructura tecnológica sea confiable.
              </p>

              <p>
                Actualmente estoy fortaleciendo mis conocimientos
                en redes, sistemas operativos, infraestructura
                y ciberseguridad, mientras aprovecho mi formación
                en desarrollo para entender mejor las soluciones
                tecnológicas desde diferentes perspectivas.
              </p>

              <p>
                Mi objetivo es orientar mi crecimiento profesional
                hacia la seguridad de TI, con especial interés
                en la implementación de soluciones y, a largo
                plazo, en la arquitectura de seguridad.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Aprender", "Practicar", "Construir", "Compartir"].map(
                (item, index) => (
                  <span
                    key={item}
                    className="rounded-full border border-gold/20 bg-gold/[0.05] px-3 py-1.5 font-mono text-xs text-gold"
                  >
                    0{index + 1} / {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Academic information */}
        <div className="flex flex-col gap-5">

          <div className="rounded-2xl border border-white/[0.08] bg-surface p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gold/10 p-3">
                <GraduationCap className="text-gold" size={23} />
              </div>

              <span className="font-mono text-xs tracking-wider text-muted">
                ACADEMIC BACKGROUND
              </span>
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Ingeniería Informática
            </h3>

            <p className="mt-2 text-sm text-gold">
              Universidad de Caldas
            </p>

            <p className="mt-3 text-sm leading-6 text-muted">
              Formación universitaria orientada al análisis,
              diseño y construcción de soluciones informáticas.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-surface p-6">
            <span className="font-mono text-xs tracking-wider text-muted">
              PROFESSIONAL DIRECTION
            </span>

            <h3 className="mt-4 text-xl font-semibold">
              Hacia dónde voy
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted">
              Busco desarrollar una perspectiva integral de
              la tecnología, combinando conocimientos de
              software, infraestructura y seguridad.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gold">
              Seguridad de TI
              <ArrowUpRight size={16} />
            </div>
          </div>

        </div>
      </div>

      {/* Areas of interest */}
      <div className="mt-20">
        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-purple">
            02 / Areas of interest
          </span>

          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
            Lo que me impulsa a aprender.
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((interest) => {
            const Icon = interest.icon;

            return (
              <article
                key={interest.title}
                className="group rounded-xl border border-white/[0.08] bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
              >
                <div
                  className={`mb-5 inline-flex rounded-xl p-3 ${interest.background}`}
                >
                  <Icon className={interest.color} size={22} />
                </div>

                <h4 className="text-base font-semibold">
                  {interest.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {interest.description}
                </p>

                <div className="mt-5 h-px w-full bg-white/[0.06] transition-colors group-hover:bg-gold/30" />
              </article>
            );
          })}
        </div>
      </div>

    </section>
  );
}
