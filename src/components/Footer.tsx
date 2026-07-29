"use client";

import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-12 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="text-amber-500 font-bold" aria-hidden="true">▲</span>
        <span className="text-xs font-mono text-zinc-400">
          Matheus Costa de Jesus &copy; {currentYear}
        </span>
      </div>

      <div className="text-xs font-mono text-zinc-500 text-center sm:text-right">
        Construído com precisão utilizando Next.js, Tailwind CSS e Framer Motion.
      </div>
    </footer>
  );
}
