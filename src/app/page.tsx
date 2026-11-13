
import SiteHeader from "@/features/navigation/components/SiteHeader";
import HeroSection from "@/features/hero/components/HeroSection";
import AboutSection from "@/features/about/components/AboutSection";
import ExperienceSection from "@/features/experience/components/ExperienceSection";
import SkillsSection from "@/features/skills/components/SkillsSection";
import ProjectsSection from "@/features/projects/components/ProjectsSection";
import CybersecuritySection from "@/features/cybersecurity/components/CybersecuritySection";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        {/* 00 - Presentación */}
        <HeroSection />

        {/* 01 - Perfil profesional */}
        <AboutSection />

        {/* 02 - Experiencia y formación */}
        <ExperienceSection />

        {/* 03 - Habilidades técnicas */}
        <SkillsSection />

        {/* 04 - Proyectos destacados */}
        <ProjectsSection />

        {/* 05 - Formación en ciberseguridad */}
        <CybersecuritySection />

        {/* 06 - Contacto */}
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="section-container section-padding"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            06 / CONTACT
          </p>

          <h2
            id="contact-title"
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Construyamos conexiones.
          </h2>

          <p className="mt-4 max-w-2xl text-muted">
            Actualmente estoy fortaleciendo mi perfil
            profesional en tecnología y Seguridad de TI.
            Puedes conocer mis proyectos y mi trayectoria
            técnica a través de GitHub.
          </p>

          <a
            href="https://github.com/IMJACK7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-xl border border-gold/30 bg-gold/10 px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/20"
          >
            Explorar mi GitHub
          </a>
        </section>
      </main>
    </>
  );
}
