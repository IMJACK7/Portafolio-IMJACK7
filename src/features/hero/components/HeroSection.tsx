
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import {
  ArrowDown,
  ArrowUpRight,
  Network,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 lg:py-32"
    >
      {/* Background */}
      <div className="site-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-purple/10 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[130px]" />

      {/* Main layout */}
      <div className="section-container relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

        {/* Left column: Introduction */}
        <div>
          {/* Portfolio badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/[0.06] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_#D6A84B]" />

            <span className="font-mono text-xs tracking-wider text-gold">
              IMJACK7 / DIGITAL PORTFOLIO
            </span>
          </div>

          {/* Greeting */}
          <p className="mb-4 font-mono text-sm text-muted">
            HOLA, SOY JACKY.
          </p>

          {/* Main title */}
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Construyo tecnología.
            <br />

            <span className="text-gradient">
              Aprendo a protegerla.
            </span>
          </h1>

          {/* Professional introduction */}
          <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Estudiante de Ingeniería en Informática, orientado
            a la ciberseguridad, las redes y la infraestructura
            de TI. Mis conocimientos en desarrollo de software
            complementan mi comprensión de los sistemas y las
            soluciones tecnológicas.
          </p>

          {/* Areas of interest */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-foreground">
              <ShieldCheck size={16} className="text-gold" />
              Ciberseguridad
            </span>

            <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-foreground">
              <Network size={16} className="text-purple" />
              Redes e infraestructura
            </span>
          </div>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-[#08090D] transition-all hover:bg-gold-light hover:shadow-[0_0_25px_rgba(214,168,75,0.2)]"
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

        {/* Right column: Avatar + Identity */}
        <div className="relative mx-auto w-full max-w-[520px]">

          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple/20 blur-[90px]" />

          <div className="pointer-events-none absolute bottom-16 right-0 h-48 w-48 rounded-full bg-gold/10 blur-[75px]" />

          {/* Avatar */}
          <div className="relative z-10 mx-auto w-full max-w-[390px]">
            <Image
              src="/images/imjack7.png"
              alt="Avatar ilustrado de IMJACK7"
              width={1024}
              height={1024}
              priority
              sizes="(max-width: 1024px) 85vw, 390px"
              className="h-auto w-full object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.25)]"
            />
          </div>

          {/* Identity card */}
          <div className="glow-purple relative z-20 -mt-12 rounded-2xl border border-white/10 bg-[#11131B]/95 p-5 shadow-2xl backdrop-blur-xl sm:-mt-16 sm:p-6">

            {/* Card header */}
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-muted">
                identity.config
              </span>

              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
            </div>

            {/* Identity information */}
            <div className="space-y-4 font-mono text-xs sm:text-sm">
              <div>
                <p className="text-purple">
                  const identity = {"{"}
                </p>

                <div className="space-y-2 pl-4 pt-3">
                  <p>
                    <span className="text-muted">name:</span>{" "}
                    <span className="text-gold">
                      "IMJACK7"
                    </span>,
                  </p>

                  <p>
                    <span className="text-muted">focus:</span>{" "}
                    <span className="text-gold">
                      "Cybersecurity"
                    </span>,
                  </p>

                  <p>
                    <span className="text-muted">interests:</span>
                  </p>

                  <div className="pl-4 text-purple">
                    ["Networks",
                    <br />
                    &nbsp;"Infrastructure",
                    <br />
                    &nbsp;"Development"]
                  </div>

                  <p>
                    <span className="text-muted">mindset:</span>{" "}
                    <span className="text-gold">
                      "Always learning"
                    </span>
                  </p>
                </div>

                <p className="mt-3 text-purple">
                  {"}"}
                </p>
              </div>

              {/* Philosophy */}
              <div className="border-t border-white/10 pt-4">
                <p className="mb-3 text-muted">
                  // My philosophy
                </p>

                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 leading-7">
                  <span className="text-gold">
                    Learn
                  </span>

                  <span className="text-foreground">
                    →
                  </span>

                  <span className="text-purple">
                    Practice
                  </span>

                  <span className="text-foreground">
                    →
                  </span>

                  <span className="text-gold">
                    Build
                  </span>

                  <span className="text-foreground">
                    →
                  </span>

                  <span className="text-purple">
                    Share
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Decorative border */}
          <div className="pointer-events-none absolute -bottom-4 -right-4 z-0 h-[55%] w-full rounded-2xl border border-gold/20" />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Desplazarse hacia la sección Sobre mí"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted transition hover:text-gold xl:block"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
