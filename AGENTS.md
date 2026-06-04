# Portfolio — AGENTS.md

> Static portfolio site: semântico, acessível, zero JS.

## Stack

- HTML5 + CSS3 puro — sem frameworks, sem build tools, sem dependências
- Zero JavaScript — tema dark/light automático via `prefers-color-scheme` do SO
- Sem dev server, sem teste, sem linter configurado
- `assets/images/` intencionalmente vazio — toda decoração é CSS-only

## Arquitetura (3 arquivos)

| Arquivo | Papel |
|---|---|
| `index.html` | Conteúdo semântico completo (header, hero, about, skills, projects, experience, education, certifications, footer) — alinhado ao CV em `MATHEUS_COSTA_DE_JESUS_PT-BR.md` |
| `assets/css/style.css` | Base: reset, custom properties (Solarized Light), layout, componentes, responsivo |
| `assets/css/style-dark.css` | Override Solarized Dark — variáveis e ajustes finos, carregado com `media="(prefers-color-scheme: dark)"` |

## Como rodar

Abra `index.html` em qualquer browser. Nada mais.

## Deploy

GitHub Pages: `mathdejesus.github.io/portfolio/` — mirror do branch `main`.

## Convenções

- Idioma: **pt-BR** (html lang, conteúdo, aria-labels, comentários)
- CSS: custom properties, BEM-like naming, transições via `var(--transition)`
- Temas: Solarized Light (padrão, `style.css`) e Solarized Dark (`style-dark.css`, carregado via `<link media="(prefers-color-scheme: dark)">`). Tema é decidido pelo sistema operacional do visitante — sem toggle, sem JS
- **Trocar tema do sistema operacional exige F5** — o tema é resolvido no carregamento da página
- PDF do currículo em `assets/Matheus_Costa_de_Jesus_PT-BR_Geral.pdf`
- Badge ▲ (Avicii gold `#b58900`) nas section titles — sempre Unicode, nunca imagem

## Skills disponíveis (globais em ~/.agents/skills/)

- `brainstorming` — antes de modificar design ou adicionar seções
- `writing-plans` — planejar alterações
- `frontend-design` — criar/estilizar componentes
- `web-design-guidelines` — revisar acessibilidade e semântica
- `systematic-debugging` — debug (ex: !important excessivo, grids sem media queries)
- `verification-before-completion` — verificar antes de finalizar
