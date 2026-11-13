
import { SiGithub } from "react-icons/si";

const navigation = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Ciberseguridad", href: "#cybersecurity" },
  { label: "Contacto", href: "#contact" },
];

export default function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.07] bg-[#08090D]/85 backdrop-blur-xl">
      <div className="section-container flex h-[76px] items-center justify-between">

        <a href="#home" className="group flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            IM<span className="text-gold">JACK</span>
            <span className="text-purple">7</span>
          </span>

          <span className="hidden text-[10px] font-mono text-muted sm:block">
            / PORTFOLIO
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/IMJACK7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar GitHub de IMJACK7"
          className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm transition-all hover:border-gold/50 hover:text-gold"
        >
          <SiGithub size={17} />
          <span className="hidden sm:inline">GitHub</span>
        </a>

      </div>
    </header>
  );
}

