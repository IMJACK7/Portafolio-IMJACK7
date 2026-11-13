
export type SkillEvidence =
  | "Experiencia laboral"
  | "Usado en proyectos"
  | "Base académica"
  | "En formación";

export interface Skill {
  name: string;
  evidence: SkillEvidence;
}

export interface SkillCategory {
  id: number;
  title: string;
  description: string;
  skills: Skill[];
}

export interface Language {
  name: string;
  level: string;
  note: string;
}

export const skillEvidenceLegend: Record<SkillEvidence, string> = {
  "Experiencia laboral": "Aplicado en un entorno laboral.",
  "Usado en proyectos": "Aplicado en proyectos realizados.",
  "Base académica": "Conocimiento adquirido en formación académica.",
  "En formación": "Conocimiento en desarrollo.",
};

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Redes e infraestructura",
    description:
      "Fundamentos de redes, sistemas e infraestructura tecnológica.",
    skills: [
      { name: "Redes informáticas", evidence: "Base académica" },
      { name: "Cisco Packet Tracer", evidence: "Base académica" },
      { name: "Sistemas operativos", evidence: "Base académica" },
      { name: "Arquitectura AWS", evidence: "Base académica" },
    ],
  },
  {
    id: 2,
    title: "Ciberseguridad",
    description:
      "Fundamentos de seguridad informática y protección de sistemas.",
    skills: [
      {
        name: "Fundamentos de ciberseguridad",
        evidence: "Base académica",
      },
      {
        name: "Seguridad de terminales",
        evidence: "En formación",
      },
    ],
  },
  {
    id: 3,
    title: "Desarrollo de software",
    description:
      "Tecnologías utilizadas en proyectos académicos y personales.",
    skills: [
      { name: "Next.js y React", evidence: "Usado en proyectos" },
      { name: "TypeScript", evidence: "Usado en proyectos" },
      { name: "C# y ASP.NET MVC", evidence: "Usado en proyectos" },
      { name: "Java", evidence: "Usado en proyectos" },
      { name: "APIs REST", evidence: "Usado en proyectos" },
    ],
  },
  {
    id: 4,
    title: "Bases de datos y herramientas",
    description:
      "Gestión de información y herramientas de trabajo.",
    skills: [
      { name: "PostgreSQL", evidence: "Usado en proyectos" },
      { name: "SQL y PL/pgSQL", evidence: "Usado en proyectos" },
      { name: "Git y GitHub", evidence: "Usado en proyectos" },
      { name: "Joomla", evidence: "Experiencia laboral" },
    ],
  },
];

export const languages: Language[] = [
  {
    name: "Inglés",
    level: "B1–B2",
    note: "Nivel autodeclarado, sin certificación oficial.",
  },
];
