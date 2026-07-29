"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GlowCard } from "./GlowCard";
import { GraduationCap, Target } from "lucide-react";

export function About() {
  const { about } = portfolioData;

  return (
    <GlowCard className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col justify-between" glowColor="rgba(59, 130, 246, 0.12)">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-5 h-5 text-blue-500" />
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-400">
            Sobre / Formação
          </span>
        </div>

        <h3 className="text-xl font-bold font-outfit text-white mb-3">
          Estudante de Ciência da Computação
        </h3>
        <p className="text-sm text-zinc-400 font-mono mb-4">
          {about.education} <br />
          <span className="text-blue-400">Previsão: {about.completion}</span>
        </p>

        <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
          {about.bio}
        </p>
      </div>

      <div className="pt-4 border-t border-white/[0.05] mt-auto">
        <div className="flex items-start gap-3">
          <Target className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs uppercase font-mono text-zinc-400 tracking-wider">Foco / Objetivo</h4>
            <p className="text-sm text-zinc-200 mt-1 font-sans">
              {about.objective}
            </p>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}
