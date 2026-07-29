<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — AGENTS.md

> Bento Box Portfolio: Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion.

## Stack
- Next.js 16.2 (App Router), React 19.2, TypeScript 5, Tailwind CSS v4, Framer Motion 12
- All components are `"use client"` (entire page is client-rendered)
- Path alias `@/*` → `./src/*`
- Utility: `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)

## Commands
```bash
npm run dev      # dev server
npm run build    # production build
npm run lint     # ESLint only (no separate typecheck)
```

## Architecture
- `src/data/portfolio.ts` — single source of truth for all content (hero, about, skills, projects, experience). Edit strictly here for curriculum updates.
- `src/app/page.tsx` — single page, Bento Grid layout.
- `src/components/` — `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Footer`, `GlowCard`.
- `public/Matheus_Costa_de_Jesus_PT-BR_Geral.pdf` — linked from Hero.

## Constraints
- Dark mode only (`dark` class, `colorScheme: dark` forced in layout)
- No test framework — no test files or test command
- No CI/CD workflows found in repo
- Fonts: Inter, Outfit, Fira Code via `next/font/google`
