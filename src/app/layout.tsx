
import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMJACK7 | Ciberseguridad y Seguridad de TI",
  description:
    "Portafolio de Jhonny Alexander Castrillón Calle, estudiante de Ingeniería en Informática de la Universidad de Caldas, enfocado en ciberseguridad, Seguridad de TI y desarrollo de software.",
  keywords: [
    "IMJACK7",
    "Jhonny Alexander Castrillón Calle",
    "Ciberseguridad",
    "Seguridad de TI",
    "Ingeniería en Informática",
    "Desarrollo de software",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
