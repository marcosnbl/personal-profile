import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./about.css";
import "./skills.css";
import "./cv.css";
import "./social.css";
import "./hero.css";
import "./contact.css";
import "./projects.css";
import "./navigation.css";
import "./typography.css";
import "./editorial.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcos Lisoski — Software Developer",
  description:
    "Portfolio profesional de Marcos Lisoski. Desarrollo de software, backend, automatización y calidad.",
};

export const viewport: Viewport = { colorScheme: "light dark" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${mono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
