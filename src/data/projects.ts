
export type ProjectStatus =
  | "Desplegado"
  | "En desarrollo"
  | "Diseño académico"
  | "Planificado";

export type ProjectKind = "Personal" | "Académico";

export interface Project {
  id: string;
  name: string;
  summary: string;
  problem?: string;
  contribution?: string;
  technologies: string[];
  status: ProjectStatus;
  kind: ProjectKind;
  featured?: boolean;
  repoUrl?: string;
  demoUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "bioverde",
    name: "BioVerde",
    summary:
      "Plataforma de comercio electrónico full stack para " +
      "productos de jardinería. Integra catálogo con variantes, " +
      "configurador de kits de cultivo, carrito de compras y " +
      "panel administrativo para gestionar pedidos e inventarios.",

    problem:
      "Centralizar la comercialización de productos de " +
      "jardinería y la configuración de kits personalizados, " +
      "manteniendo un control estructurado de existencias.",

    contribution:
      "Desarrollo de la aplicación con Next.js, APIs y Prisma. " +
      "Modelado relacional en PostgreSQL y migración del " +
      "catálogo comercial a Neon, conservando las relaciones " +
      "y los identificadores originales.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Neon",
      "Auth.js",
      "Tailwind CSS",
    ],

    status: "En desarrollo",
    kind: "Académico",
    featured: true,

    repoUrl: "https://github.com/IMJACK7/Bioverde",

    // Agregar cuando exista una captura real:
    // image: "/images/projects/bioverde.webp",

    // Agregar únicamente cuando esté desplegado:
    // demoUrl: "https://...",
  },

  {
    id: "sitio-libro",
    name: "Sitio web del libro",

    summary:
      "Sitio web personal con una propuesta visual temática " +
      "y diseño adaptable a diferentes dispositivos.",

    technologies: ["Next.js"],

    status: "Desplegado",
    kind: "Personal",
  },

  {
    id: "medicare-ips-aws",
    name: "Arquitectura cloud para MediCare IPS",

    summary:
      "Diseño académico de infraestructura en AWS, " +
      "con segmentación de red, controles de acceso, " +
      "observabilidad y estrategias de respaldo.",

    technologies: [
      "AWS",
      "VPC",
      "Security Groups",
      "ECS Fargate",
      "RDS",
      "CloudTrail",
    ],

    status: "Diseño académico",
    kind: "Académico",
  },
];
