import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090d",
        surface: "#11131b",
        "surface-elevated": "#171a24",
        gold: "#d6a84b",
        "gold-light": "#f0cb79",
        purple: "#8b5cf6",
        "purple-dark": "#6d28d9",
        foreground: "#f4f1ea",
        muted: "#9293a0",
        border: "rgba(255,255,255,0.09)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;