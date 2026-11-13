
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
      "Dashboard de indicadores financieros para un proyecto de economía circular, desarrollado con Next.js y TypeScript.",
    technologies: ["Next.js", "TypeScript", "React"],
    status: "En desarrollo",
    kind: "Académico",
  },
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
