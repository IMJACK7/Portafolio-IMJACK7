
export type LearningStatus = "Completado" | "En curso" | "Pendiente";

export type AreaStage =
  | "Base académica"
  | "En formación"
  | "Objetivo a futuro";

export interface CybersecurityCourse {
  id: number;
  title: string;
  provider: string;
  status: LearningStatus;
  description: string;
  credentialUrl?: string;
}

export interface LearningPath {
  id: number;
  title: string;
  provider: string;
  status: LearningStatus;
  description: string;
  target?: string;
}

export interface CybersecurityArea {
  id: number;
  title: string;
  description: string;
  stage: AreaStage;
  topics: string[];
}

export interface CybersecurityLab {
  id: number;
  title: string;
  platform: string;
  status: LearningStatus;
  summary: string;
  topics: string[];
  evidenceUrl?: string;
}

// Solo formación finalizada y verificable.
export const cybersecurityCourses: CybersecurityCourse[] = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    provider: "Cisco",
    status: "Completado",
    description:
      "Fundamentos de seguridad informática, amenazas, vulnerabilidades y protección de sistemas.",
    credentialUrl:
      "https://www.credly.com/badges/c6ae9bca-86cd-4e25-a880-2cda8946c208",
  },
];

// Las rutas pendientes dejan de mostrarse públicamente.
export const learningPaths: LearningPath[] = [];

// Evitamos repetir intereses profesionales en tarjetas.
export const cybersecurityAreas: CybersecurityArea[] = [];

// Incorporaremos los laboratorios cuando revisemos
// sus archivos y comprobemos sus configuraciones.
export const cybersecurityLabs: CybersecurityLab[] = [];
