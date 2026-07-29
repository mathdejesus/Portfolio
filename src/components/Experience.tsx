"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GlowCard } from "./GlowCard";
import { Briefcase, Activity, Settings, HelpCircle, FileText } from "lucide-react";

export function Experience() {
  const { experience } = portfolioData;
  const exp = experience[0]; // M. Dias Branco

  const icons = [
    <Activity key="activity" className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />,
    <Settings key="settings" className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />,
    <HelpCircle key="help" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />,
    <FileText key="file" className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
  ];

  return (
    <GlowCard className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col justify-between" glowColor="rgba(16, 185, 129, 0.12)">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="w-5 h-5 text-emerald-500" />
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-400">
            Trajetória / Confiabilidade do Sistema
          </span>
        </div>

        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <h3 className="text-xl font-bold font-outfit text-white">
              {exp.company}
            </h3>
            <span className="text-xs font-mono text-zinc-400 px-2 py-1 rounded bg-white/5 border border-white/10 w-fit">
              {exp.period}
            </span>
          </div>
          <h4 className="text-sm font-medium font-outfit text-amber-400">
            {exp.role}
          </h4>
          <p className="text-sm text-zinc-300 mt-3 leading-relaxed font-sans">
            {exp.description}
          </p>
        </div>

        <div className="space-y-4 pt-4 border-t border-white/[0.05]">
          {exp.points.map((point, index) => (
            <div key={index} className="flex gap-3 items-start">
              {icons[index % icons.length]}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </GlowCard>
  );
}
