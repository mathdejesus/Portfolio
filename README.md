# Matheus Costa de Jesus — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.2-000?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?logo=cloudflare)](https://pages.cloudflare.com)

> Bento Box Portfolio — Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4 e Framer Motion 12.
> Dark mode nativo, grid responsivo, glow cards com mouse tracking.

---

## Stack

| Categoria | Tecnologia |
|-----------|-----------|
| **Framework** | Next.js 16.2 (App Router), static export |
| **UI** | React 19.2, TypeScript 5 |
| **Estilização** | Tailwind CSS v4 |
| **Animações** | Framer Motion 12 |
| **Ícones** | lucide-react + SVGs customizados |
| **Deploy** | Cloudflare Pages (estático) |

## Estrutura

```
src/
├── app/
│   ├── layout.tsx       — Layout raiz (fontes, metadata, dark mode)
│   ├── page.tsx         — Página única com Bento Grid
│   └── globals.css      — Tema escuro, grid pattern, scrollbar
├── components/
│   ├── Hero.tsx         — Destaque: nome, cargo, links sociais
│   ├── About.tsx        — Formação, bio e objetivo
│   ├── Skills.tsx       — Grid de habilidades (Java, Python, SQL)
│   ├── Experience.tsx   — Trajetória M. Dias Branco / SRE industrial
│   ├── Projects.tsx     — Cards de projetos com GitHub links
│   ├── Footer.tsx       — Footer com ano corrente
│   ├── GlowCard.tsx     — Card reutilizável com efeito glow por mouse
│   └── SocialIcons.tsx  — SVGs inline do GitHub e LinkedIn
├── data/
│   └── portfolio.ts     — Fonte única de dados (currículo)
└── lib/
    └── utils.ts         — cn() (clsx + tailwind-merge)
```

## Como Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produz build estático em out/
npm run lint     # ESLint
```

## Conteúdo

Todo o conteúdo (hero, about, skills, projects, experience) está centralizado em `src/data/portfolio.ts`.
Para atualizar o currículo, edite apenas este arquivo.

## Deploy — Cloudflare Pages

O projeto já está configurado para static export (`next.config.ts` com `output: "export"`).

### Via dashboard (recomendado)

1. Faça login em [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Acesse **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Selecione o repositório
4. Configure:

| Config | Valor |
|--------|-------|
| Build command | `npm run build` |
| Build output directory | `out` |

5. Deploy

### Via CLI (wrangler)

```bash
npm install --save-dev wrangler
npx wrangler pages deploy out
```

---

Built with precision by [Matheus Costa de Jesus](https://github.com/mathofjesus)
Lauro de Freitas, Bahia, Brasil · 2026
