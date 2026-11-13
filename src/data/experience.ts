
export interface EducationItem {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  status: "En curso" | "Completado";
  type: "academic" | "complementary";
  credentialUrl?: string;
}

export interface WorkExperienceItem {
  id: number;
  title: string;
  organization: string;
  area: string;
  period?: string;
  description: string;
  responsibilities?: string[];
  technologies: string[];
}

export interface TechnicalTrajectoryItem {
  id: number;
  title: string;
  category: string;
  period: string;
  description: string;
  tags: string[];
}

export const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    title: "Gestión de sitio web institucional",
    organization: "Universidad Nacional de Colombia, Sede Manizales",
    area: "Ingeniería en Arquitectura",
    description:
      "Gestión y actualización de contenidos del sitio web institucional mediante Joomla.",
    responsibilities: [
      "Publicación y actualización de artículos y documentos.",
      "Administración de contenidos en Joomla.",
      "Ajustes puntuales al código para habilitar filtros.",
      "Documentación de publicaciones y cambios realizados.",
    ],
    technologies: ["Joomla"],
  },
];

export const education: EducationItem[] = [
  {
    id: 1,
    title: "Ingeniería en Informática",
    institution: "Universidad de Caldas",
    period: "En curso",
    description:
      "Formación en ingeniería de software, bases de datos, redes, sistemas e infraestructura tecnológica.",
    status: "En curso",
    type: "academic",
  },
  {
    id: 2,
    title: "Técnico en Sistemas",
    institution: "Institución Educativa Aureliano Flórez Cardona",
    period: "2021",
    description:
      "Formación técnica en sistemas, mantenimiento de equipos y fundamentos de redes.",
    status: "Completado",
    type: "academic",
  },
];

// Conservamos la exportación temporalmente
// hasta depurar el componente ExperienceSection.
export const technicalTrajectory: TechnicalTrajectoryItem[] = [];
