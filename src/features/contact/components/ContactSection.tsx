
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  MessageSquare,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

// Configura aquí tu correo de contacto.
const CONTACT_EMAIL = "";

export default function ContactSection() {
  const hasEmail = CONTACT_EMAIL.trim().length > 0;

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="site-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="pointer-events-none absolute -right-32 top-16 h-[350px] w-[350px] rounded-full bg-purple/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-32 left-0 h-[350px] w-[350px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-sm text-gold">
              05 / CONTACTO
            </span>

            <span className="h-px w-12 bg-gold/40" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Conectemos y{" "}
            <span className="text-gradient">
              construyamos algo.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-muted">
            Me interesa conectar con profesionales, equipos
            y organizaciones del sector tecnológico, especialmente
            en áreas de ciberseguridad, redes e infraestructura
            de TI.
          </p>
        </div>

        {/* Contact content */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12">

          {/* Left column */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#11131B]/70 p-6 sm:p-8">
            <div>
              <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                <MessageSquare
                  size={26}
                  className="text-gold"
                />
              </div>

              <h3 className="text-2xl font-semibold text-foreground">
                ¿Tienes una oportunidad o una idea?
              </h3>

              <p className="mt-5 max-w-lg leading-8 text-muted">
                Estoy abierto a conversar sobre oportunidades
                de prácticas profesionales, aprendizaje,
                colaboración y proyectos tecnológicos.
              </p>

              {/* Professional focus */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <BriefcaseBusiness
                    size={19}
                    className="mt-1 shrink-0 text-gold"
                  />

                  <div>
                    <p className="font-medium text-foreground">
                      Oportunidades profesionales
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted">
                      Prácticas y oportunidades de desarrollo
                      profesional en tecnología.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={19}
                    className="mt-1 shrink-0 text-purple"
                  />

                  <div>
                    <p className="font-medium text-foreground">
                      Áreas de interés
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted">
                      Ciberseguridad, infraestructura de TI,
                      redes y soluciones tecnológicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub link */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <a
                href="https://github.com/IMJACK7"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-gold"
              >
                <SiGithub size={21} />

                Explorar mi GitHub

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right column: Terminal card */}
          <div className="relative">
            <div className="glow-purple relative h-full rounded-2xl border border-white/10 bg-[#11131B]/95 p-6 sm:p-8">

              {/* Terminal header */}
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-2">
                  <Terminal
                    size={17}
                    className="text-purple"
                  />

                  <span className="font-mono text-xs text-muted">
                    contact.config
                  </span>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
              </div>

              {/* Terminal content */}
              <div className="space-y-6 font-mono text-sm">
                <div>
                  <p className="text-purple">
                    const contact = {"{"}
                  </p>

                  <div className="space-y-3 pl-4 pt-4">
                    <p>
                      <span className="text-muted">
                        name:
                      </span>{" "}
                      <span className="text-gold">
                        "IMJACK7"
                      </span>,
                    </p>

                    <p>
                      <span className="text-muted">
                        focus:
                      </span>{" "}
                      <span className="text-gold">
                        "Cybersecurity"
                      </span>,
                    </p>

                    <p>
                      <span className="text-muted">
                        contact:
                      </span>{" "}
                      <span className="text-gold">
                        "Let's connect"
                      </span>
                    </p>
                  </div>

                  <p className="mt-4 text-purple">
                    {"}"};
                  </p>
                </div>

                {/* Terminal message */}
                <div className="rounded-xl border border-white/10 bg-background/70 p-5">
                  <p className="mb-3 text-xs text-muted">
                    // New connection
                  </p>

                  <p className="leading-7 text-foreground">
                    <span className="text-gold">
                      &gt;
                    </span>{" "}
                    Las buenas oportunidades comienzan
                    con una conversación.
                  </p>
                </div>
              </div>

              {/* Contact action */}
              <div className="mt-8 border-t border-white/10 pt-7">
                {hasEmail ? (
                  <a
                    href={`mailto:${jhonnycastrillon027@gmail.com}`}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-gold px-6 py-3.5 font-semibold text-[#08090D] transition-all hover:bg-[#F0CB79] hover:shadow-[0_0_25px_rgba(214,168,75,0.2)]"
                  >
                    <Mail size={19} />
                    Enviarme un correo
                    <ArrowUpRight size={17} />
                  </a>
                ) : (
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-sm text-muted">
                    Configura tu correo para habilitar
                    el contacto directo.
                  </div>
                )}

                <p className="mt-4 text-center font-mono text-xs text-muted">
                  IMJACK7 / LET&apos;S CONNECT
                </p>
              </div>
            </div>

            {/* Decorative border */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-gold/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
