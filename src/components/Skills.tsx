"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GlowCard } from "./GlowCard";
import { Cpu, Terminal, Database, GitFork } from "lucide-react";

export function Skills() {
  const { skills } = portfolioData;

  return (
    <GlowCard className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between" glowColor="rgba(245, 158, 11, 0.15)">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Cpu className="w-5 h-5 text-amber-500" />
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-400">
            Habilidades / Core Stack
          </span>
        </div>

        {/* PROTAGONISMO VISUAL PARA JAVA, PYTHON E SQL */}
        <div className="mb-8">
          <h3 className="text-xs uppercase font-mono text-zinc-500 tracking-wider mb-3">Tecnologias Principais</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="relative group overflow-hidden rounded-2xl border border-amber-500/30 bg-amber-950/20 p-4 transition-all duration-300 hover:bg-amber-950/30 hover:border-amber-500/60">
              <div className="absolute -right-4 -bottom-4 text-6xl text-amber-500/5 font-mono select-none font-bold group-hover:scale-110 transition-transform">
                01
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-outfit">Java</span>
                <span className="text-xs font-mono text-amber-500/70 mt-1 font-bold">Linguagem 21</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl border border-sky-500/30 bg-sky-950/20 p-4 transition-all duration-300 hover:bg-sky-950/30 hover:border-sky-500/60">
              <div className="absolute -right-4 -bottom-4 text-6xl text-sky-500/5 font-mono select-none font-bold group-hover:scale-110 transition-transform">
                02
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-outfit">Python</span>
                <span className="text-xs font-mono text-sky-500/70 mt-1 font-bold">Data & Scripts</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl border border-teal-500/30 bg-teal-950/20 p-4 transition-all duration-300 hover:bg-teal-950/30 hover:border-teal-500/60">
              <div className="absolute -right-4 -bottom-4 text-6xl text-teal-500/5 font-mono select-none font-bold group-hover:scale-110 transition-transform">
                03
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-outfit">SQL</span>
                <span className="text-xs font-mono text-teal-500/70 mt-1 font-bold">Relacional (Pg)</span>
              </div>
            </div>
          </div>
        </div>

        {/* SUB-SEÇÕES DE HABILIDADES */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-amber-500/75" />
              <h4 className="text-xs uppercase font-mono text-zinc-400 tracking-wider">Backend & Arquitetura</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.backend.map((skill) => (
                <span key={skill} className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.03] border border-white/[0.05] text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-blue-500/75" />
              <h4 className="text-xs uppercase font-mono text-zinc-400 tracking-wider">Frontend & Mobile</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.frontend.map((skill) => (
                <span key={skill} className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.03] border border-white/[0.05] text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <GitFork className="w-4 h-4 text-emerald-500/75" />
              <h4 className="text-xs uppercase font-mono text-zinc-400 tracking-wider">Engenharia, QA & SRE</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.engineering.map((skill) => (
                <span key={skill} className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.03] border border-white/[0.05] text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}
