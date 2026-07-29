import type { Metadata } from "next";
import { Inter, Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Costa de Jesus | Backend Engineer",
  description: "Portfólio de Matheus Costa de Jesus — Backend Engineer com foco em Java, Python, SQL e arquitetura escalável. Experiência de 9 anos em operações industriais com visão de observabilidade e confiabilidade (SRE).",
  keywords: ["Matheus Costa de Jesus", "Backend Engineer", "Java", "Python", "SQL", "Spring Boot", "SRE", "Observabilidade", "Lauro de Freitas", "Bahia"],
  authors: [{ name: "Matheus Costa de Jesus" }],
  openGraph: {
    title: "Matheus Costa de Jesus | Backend Engineer",
    description: "Desenvolvedor focado em arquitetura backend escalável (Java, Python, SQL) com mentalidade SRE.",
    type: "website",
    locale: "pt_BR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable} ${firaCode.variable} dark antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-[#030303] text-zinc-100 flex flex-col font-sans select-none selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
