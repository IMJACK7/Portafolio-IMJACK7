
import SiteHeader from "@/features/navigation/components/SiteHeader";

import HeroSection from "@/features/hero/components/HeroSection";
import AboutSection from "@/features/about/components/AboutSection";
import ExperienceSection from "@/features/experience/components/ExperienceSection";
import SkillsSection from "@/features/skills/components/SkillsSection";
import ProjectsSection from "@/features/projects/components/ProjectsSection";
import CybersecuritySection from "@/features/cybersecurity/components/CybersecuritySection";
import ContactSection from "@/features/contact/components/ContactSection";

export default function Home() {
  return (
    <>
      {/* Navegación principal */}
      <SiteHeader />

      {/* Contenido principal del portafolio */}
      <main id="main-content">

        {/* 00 - Presentación */}
        <HeroSection />

        {/* 01 - Perfil profesional */}
        <AboutSection />

        {/* 02 - Experiencia laboral y formación */}
        <ExperienceSection />

        {/* 03 - Habilidades técnicas */}
        <SkillsSection />

        {/* 04 - Proyectos destacados */}
        <ProjectsSection />

        {/* 05 - Formación en ciberseguridad */}
        <CybersecuritySection />

        {/* 06 - Contacto */}
        <ContactSection />

      </main>
    </>
  );
}
