
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import {ArrowDown, ArrowUpRight, Code2, ShieldCheck} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background */}
      <div className="site-grid absolute inset-0 opacity-60" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-purple/10 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[130px]" />

      <div className="section-container relative z-10 grid items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">

        {/* Introduction */}
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/[0.06] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_#D6A84B]" />

            <span className="font-mono text-xs tracking-wider text-gold">
              IMJACK7 / DIGITAL PORTFOLIO
            </span>
          </div>

          <p className="mb-4 font-mono text-sm text-muted">
            HOLA, SOY JACKY.
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Construyo tecnología.
            <br />

            <span className="text-gradient">
              Aprendo a protegerla.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Estudiante de Ingeniería Informática, apasionado por
            la tecnología, el desarrollo de software y la
            ciberseguridad.

            Me interesa comprender cómo funcionan los sistemas,
            construir soluciones y aprender a protegerlas.
          </p>

          {/* Areas */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-foreground">
              <Code2 size={16} className="text-gold" />
              Software Development
            </span>

            <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-foreground">
              <ShieldCheck size={16} className="text-purple" />
              Cybersecurity
            </span>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-[#08090D] transition-all hover:bg-[#F0CB79] hover:shadow-[0_0_25px_rgba(214,168,75,0.2)]"
            >
              Explorar proyectos
              <ArrowUpRight size={18} />
            </Link>

            <a
              href="https://github.com/IMJACK7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-medium transition-all hover:border-purple hover:text-purple"
            >
              <SiGithub size={20} />
              Mi GitHub
            </a>
          </div>
        </div>

        {/* Identity panel */}
        <div className="relative hidden lg:block">
          <div className="glow-purple relative rounded-2xl border border-white/10 bg-[#11131B]/90 p-6">

            <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-muted">
                identity.config
              </span>

              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
            </div>

            <div className="space-y-5 font-mono text-sm">
              <div>
                <p className="text-purple">const identity = {"{"}</p>

                <div className="space-y-3 pl-5 pt-3">
                  <p>
                    <span className="text-muted">name:</span>{" "}
                    <span className="text-gold">"IMJACK7"</span>,
                  </p>

                  <p>
                    <span className="text-muted">focus:</span>{" "}
                    <span className="text-gold">"Technology"</span>,
                  </p>

                  <p>
                    <span className="text-muted">interests:</span>
                  </p>

                  <div className="pl-4 text-purple">
                    ["Development",
                    <br />
                    &nbsp;"Cybersecurity",
                    <br />
                    &nbsp;"Infrastructure"]
                  </div>

                  <p>
                    <span className="text-muted">mindset:</span>{" "}
                    <span className="text-gold">"Always learning"</span>
                  </p>
                </div>

                <p className="mt-3 text-purple">{"}"}</p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="mb-3 text-muted">// My philosophy</p>

                <p className="leading-7 text-foreground">
                  <span className="text-gold">Learn</span>
                  {" → "}
                  <span className="text-purple">Practice</span>
                  {" → "}
                  <span className="text-gold">Build</span>
                  {" → "}
                  <span className="text-purple">Share</span>
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-2xl border border-gold/20" />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Desplazarse hacia abajo"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted hover:text-gold lg:block"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
