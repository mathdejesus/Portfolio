"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GlowCard } from "./GlowCard";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function Hero() {
  const { hero } = portfolioData;

  return (
    <GlowCard className="col-span-1 md:col-span-2 lg:col-span-3 min-h-[380px] flex flex-col justify-between" glowColor="rgba(245, 158, 11, 0.12)">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-amber-500 text-2xl font-bold animate-pulse" aria-hidden="true">▲</span>
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-400">
            Portfolio // Backend Engineering
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-outfit text-white">
          Olá, eu sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300">{hero.name}</span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium font-outfit text-zinc-300 mt-2">
          {hero.title}
        </h2>

        <div className="flex items-center gap-2 text-zinc-400 text-sm mt-3 font-mono">
          <MapPin className="w-4 h-4 text-amber-500" />
          <span>{hero.location}</span>
        </div>

        <p className="mt-6 text-zinc-300 leading-relaxed font-sans text-base sm:text-lg max-w-3xl">
          {hero.headline}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/[0.05]">
        <a
          href={`mailto:${hero.email}`}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-200 transition-all hover:bg-amber-500 hover:text-black hover:border-amber-500"
        >
          <Mail className="w-4 h-4" />
          <span>Email</span>
        </a>
        <a
          href={hero.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-200 transition-all hover:bg-white hover:text-black hover:border-white"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GitHub</span>
        </a>
        <a
          href={hero.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-200 transition-all hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]"
        >
          <LinkedinIcon className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        <a
          href="/Matheus_Costa_de_Jesus_PT-BR_Geral.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm font-medium text-amber-400 transition-all hover:bg-amber-500 hover:text-black hover:border-amber-500 ml-auto"
        >
          <span>Visualizar Currículo PDF</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </GlowCard>
  );
}
