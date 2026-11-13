
export interface SocialLink {
  id: string;
  label: string;
  url: string;
  external: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/IMJACK7",
    external: true,
  },
];
