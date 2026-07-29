"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GlowCard } from "./GlowCard";
import { FolderGit2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <GlowCard className="col-span-1 md:col-span-2 lg:col-span-3" glowColor="rgba(139, 92, 246, 0.12)">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <FolderGit2 className="w-5 h-5 text-purple-500" />
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-400">
            Projetos / Engenharia
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.1] p-5 sm:p-6 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-bold font-outfit text-white text-lg group-hover:text-amber-400 transition-colors">
                    {project.name}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all shrink-0"
                    title="Acessar Repositório"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-4">
                  {project.description}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-4 italic">
                  {project.details}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/[0.03]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-amber-500/5 border border-amber-500/10 text-amber-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlowCard>
  );
}
