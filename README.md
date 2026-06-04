# Matheus Costa de Jesus — Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Zero JavaScript](https://img.shields.io/badge/JavaScript-0%25-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://en.wikipedia.org/wiki/JavaScript)
[![WCAG AA](https://img.shields.io/badge/WCAG-AA%20Compliant-2E8B57?style=for-the-badge&logo=w3c&logoColor=white)](https://www.w3.org/WAI/WCAG2AA-Conformance)

> Portfólio semântico, acessível e limpo — construído inteiramente com HTML5 e CSS3, sem JavaScript.
> Dual-theme com paleta Solarized (Light e Dark) para máxima legibilidade e conforto visual.

![Portfolio Screenshot](https://via.placeholder.com/1200x630/fdf6e3/268bd2?text=Matheus+Costa+de+Jesus)

---

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Identidade Visual](#identidade-visual)
- [Stack Tecnológica](#stack-tecnológica)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Como Rodar](#como-rodar)
- [Notas de Acessibilidade](#notas-de-acessibilidade)
- [Notas de SEO](#notas-de-seo)
- [Licença](#licença)

---

## Sobre o Projeto

Este portfólio é a residência digital de **Matheus Costa de Jesus**, Desenvolvedor Full-Stack
baseado em Lauro de Freitas, Bahia, Brasil. Demonstra competências técnicas em Java, Python,
JavaScript/TypeScript, React, Angular, Spring Boot e Node.js, com experiência profissional
em automação industrial.

**Propósito Técnico:**
O projeto demonstra domínio de HTML5 semântico, arquitetura CSS (custom properties,
tematização via checkbox hack, CSS Grid e Flexbox), e acessibilidade web (WCAG 2.1 AA).
Construído sem JavaScript, frameworks ou ferramentas de build — código puro e artesanal
que prioriza performance e conformidade com padrões web.

**Visão Estética:**
O design utiliza a paleta **Solarized** — um esquema de cores cuidadosamente projetado
para legibilidade e conforto visual. O modo claro (Solarized Light) é o padrão,
enquanto o modo escuro (Solarized Dark) oferece uma alternativa para ambientes com pouca luz.

---

## Identidade Visual

O portfólio possui uma **identidade visual dual** — cada modo é uma declaração de design
completa e intencional, não apenas uma troca de cores.

### Modo Claro — Solarized Light (padrão)

Uma paleta quente e legível, inspirada em tons de areia e céu:

| Elemento | Função |
|---|---|
| **Fundo** (`#fdf6e3`) | Branco quente (base3) — máximo contraste para leitura |
| **Painéis** (`#eee8d5`) | Cinza areia (base2) — superfícies de cards e seções |
| **Primário** (`#268bd2`) | Azul Solarized — títulos, botões, acento principal |
| **Secundário** (`#2aa198`) | Ciano Solarized — links, acento secundário |
| **Destaque** (`#b58900`) | Amarelo Solarized — ▲ Avicii gold, destaques |

### Modo Escuro — Solarized Dark

Mesma paleta, invertida para ambientes escuros:

| Elemento | Função |
|---|---|
| **Fundo** (`#002b36`) | Azul-marinho profundo (base03) |
| **Painéis** (`#073642`) | Azul escuro (base02) — superfícies elevadas |
| **Primário** (`#268bd2`) | Azul Solarized — constante em ambos os modos |
| **Secundário** (`#2aa198`) | Ciano Solarized — constante em ambos os modos |
| **Destaque** (`#b58900`) | Amarelo Solarized — constante em ambos os modos |

### O Símbolo Avicii

O triângulo equilátero é a marca pessoal, inspirada em **Avicii (Tim Bergling, 1989–2018)**.
Renderizado via Unicode — nunca como imagem externa. Sempre em dourado (`#b58900`) em ambos os modos.
Representa: precisão, três pilares da arte (código / infraestrutura / segurança), e ascensão.

### Paleta de Cores

> Valores correspondentes à implementação CSS em `assets/css/style.css`.

| CSS Variable | Modo Claro (Light) | Modo Escuro (Dark) |
|---|---|---|
| `--color-bg` | `#fdf6e3` branco quente | `#002b36` azul-marinho |
| `--color-bg-secondary` | `#eee8d5` cinza areia | `#073642` azul escuro |
| `--color-bg-card` | `#eee8d5` cinza areia | `#073642` azul escuro |
| `--color-primary` | `#268bd2` azul Solarized | `#268bd2` azul Solarized |
| `--color-secondary` | `#2aa198` ciano Solarized | `#2aa198` ciano Solarized |
| `--color-accent` | `#b58900` amarelo Solarized | `#b58900` amarelo Solarized |
| `--color-text` | `#002b36` azul-marinho | `#839496` cinza azulado |
| `--color-text-muted` | `#586e75` cinza médio | `#586e75` cinza médio |
| `--color-border` | `#93a1a1` cinza claro | `#586e75` cinza médio |

---

## Stack Tecnológica

| Categoria | Tecnologia / Recurso |
|---|---|
| **Markup** | HTML5 — suporte semântico completo |
| **Estilo** | CSS3 — sem pré-processadores, sem frameworks |
| **Sistema de Design** | CSS Custom Properties com documentação inline em cada variável |
| **Tematização** | CSS Checkbox Hack — toggle dark/light com zero JavaScript |
| **Layout** | CSS Grid, Flexbox, `clamp()` para tipografia fluida responsiva |
| **Tipografia** | Google Fonts: Bebas Neue (display), Barlow (corpo), IBM Plex Mono (código) |
| **Efeitos Decorativos** | `radial-gradient` halftone, pseudo-elementos, `backdrop-filter` blur, neon `box-shadow` |
| **Acessibilidade** | Skip link, atributos `aria-*`, `:focus-visible`, `<time datetime>`, contraste WCAG AA |
| **SEO** | Meta tags Open Graph, link canônico, hierarquia semântica de headings |

---

## Estrutura de Pastas

```
portfolio/
├── index.html          — Documento HTML principal: estrutura semântica completa
├── README.md           — Este arquivo
└── assets/
    ├── css/
    │   └── style.css   — Todos os estilos: variáveis, layout, temas, acessibilidade
    └── images/
        └── (vazio)     — Sem imagens externas: toda decoração é CSS-only
```

---

## Funcionalidades Principais

- **HTML5 Semântico** — `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` para significado, não apresentação
- **Acessibilidade WCAG AA** — skip link, labels ARIA, focus rings, elementos `<time>`, contraste mínimo 4.5:1
- **Otimizado para SEO** — meta description, tags Open Graph, URL canônica, hierarquia de headings estruturada
- **Toggle dark/light CSS-only** — checkbox hack com `input` e `label`, zero JavaScript necessário
- **Sistema de design CSS** — todos os valores como custom properties, cada variável comentada com sua finalidade
- **Layout responsivo** — fluido do mobile ao 4K com CSS Grid, Flexbox e `clamp()`
- **Identidade visual dual** — Solarized Light (claro) e Solarized Dark (escuro) como sistemas de design independentes
- **Header fixo com blur** — `position: sticky` + `backdrop-filter: blur(8px)` efeito de vidro
- **Código extensivamente comentado** — cada bloco explica o porquê, não apenas o quê

---

## Como Rodar

Nenhum passo de build. Nenhuma dependência. Nenhum comando de terminal necessário.

```bash
# Clonar o repositório
git clone https://github.com/mathdejesus/portfolio.git
cd portfolio
# Abrir no navegador (Linux)
xdg-open index.html
# Ou no Windows
start index.html
```

Ou baixe o ZIP, extraia e abra `index.html` em qualquer navegador moderno.

---

## Notas de Acessibilidade

| Implementação | Padrão / Motivo |
|---|---|
| Link skip-to-content | WCAG 2.1 SC 2.4.1 — usuários de teclado pulam navegação para conteúdo principal |
| `aria-label` em cada `section` | Leitores de tela anunciam a região antes de ler o conteúdo |
| `aria-labelledby` nos cards `article` | Vincula cada card ao seu próprio heading para nome acessível |
| `aria-hidden` nos triângulos decorativos | Impede narração de caracteres Unicode decorativos |
| `tabindex="-1"` no `#theme-toggle` | Remove checkbox oculto da ordem de tabulação do teclado |
| `:focus-visible` outline em dourado | Anel de foco visível para teclado, não acionado pelo mouse |
| `<time datetime>` em todas as datas | Datas legíveis por máquina para tecnologia assistiva e mecanismos de busca |
| Contraste de cor >= 4.5:1 | Ambas as paletas validadas contra mínimo WCAG AA |

---

## Notas de SEO

| Tag / Elemento | Finalidade |
|---|---|
| `<title>` | Formato "Nome — Cargo" para mecanismos de busca e abas do navegador |
| `<meta name="description">` | Resumo de ~155 caracteres indexado pelo Google para trechos de busca |
| `<meta name="author">` | Associa o documento ao seu criador |
| Tags Open Graph | Controla pré-visualização em LinkedIn, WhatsApp e Twitter/X |
| `<link rel="canonical">` | Impede indexação de conteúdo duplicado |
| `<h1>` único | Esquema correto do documento — um heading de nível superior |
| `<h2>` por seção | Estrutura de página rastreável para mecanismos de busca |
| `<nav>` com links âncora | Mapa de links internos para rastreadores de busca |
| `lang="pt-BR"` no `<html>` | Declaração de idioma para indexação e leitores de tela |

---

## Licença

MIT License — Copyright (c) 2026 Matheus Costa de Jesus

Permission is hereby granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions: The above copyright notice and this
permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

---

Built with precision by [Matheus Costa de Jesus](https://github.com/mathdejesus)
Lauro de Freitas, Bahia, Brazil · 2026
