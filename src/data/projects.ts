
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
  repoUrl?: string;
  demoUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  
{
  id: "bioverde",
  name: "BioVerde",
  summary:
    "Plataforma de comercio electrónico full stack para jardinería. " +
    "Incluye catálogo con variantes, configurador de kits de cultivo, " +
    "carrito de compras y panel administrativo para gestionar " +
    "productos, pedidos e inventarios.",

  problem:
    "Centralizar la comercialización de productos de jardinería " +
    "y la configuración de kits personalizados, manteniendo " +
    "un control estructurado de productos y existencias.",

  contribution:
    "Desarrollo con Next.js, APIs y Prisma; modelado de datos " +
    "relacionales en PostgreSQL y migración del catálogo a " +
    "Neon, conservando identificadores y relaciones.",

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

  repoUrl: "https://github.com/IMJACK7/Bioverde",
}
,
  {
    id: "sitio-libro",
    name: "Sitio web del libro",
    summary:
      "Sitio web personal con una propuesta visual temática y diseño adaptable a diferentes dispositivos.",
    technologies: ["Next.js"],
    status: "Desplegado",
    kind: "Personal",
  },
  {
    id: "medicare-ips-aws",
    name: "Arquitectura cloud para MediCare IPS",
    summary:
      "Diseño académico de infraestructura AWS con segmentación de red, control de acceso, observabilidad y respaldo.",
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
