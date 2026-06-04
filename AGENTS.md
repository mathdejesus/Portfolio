# Portfolio — AGENTS.md

> Static portfolio site: semântico, acessível, zero JS.

## Stack

- HTML5 + CSS3 puro — sem frameworks, sem build tools, sem dependências
- Zero JavaScript (checkbox hack para dark/light toggle)
- Sem dev server, sem teste, sem linter configurado
- `assets/images/` intencionalmente vazio — toda decoração é CSS-only

## Arquitetura (2 arquivos)

| Arquivo | Papel |
|---|---|
| `index.html` | Conteúdo semântico completo (header, hero, about, skills, projects, experience, education, certifications, footer) — alinhado ao CV em `MATHEUS_COSTA_DE_JESUS_PT-BR.md` |
| `assets/css/style.css` | Todo o CSS: reset, custom properties, layout, temas (dark/light), responsivo |

## Como rodar

Abra `index.html` em qualquer browser. Nada mais.

## Deploy

GitHub Pages: `mathdejesus.github.io/portfolio/` — mirror do branch `main`.

## Convenções

- Idioma: **pt-BR** (html lang, conteúdo, aria-labels, comentários)
- CSS: custom properties, BEM-like naming, transições via `var(--transition)`
- Temas: dark (padrão "Street Prestige") e light ("Tricolor Heroico") via `#theme-toggle:checked ~ *`
- PDF do currículo em `assets/Matheus_Costa_de_Jesus_PT-BR_Geral.pdf`
- Badge ▲ (Avicii gold `#FFBE0B`) nas section titles — sempre Unicode, nunca imagem

## Skills disponíveis (globais em ~/.agents/skills/)

- `brainstorming` — antes de modificar design ou adicionar seções
- `writing-plans` — planejar alterações
- `frontend-design` — criar/estilizar componentes
- `web-design-guidelines` — revisar acessibilidade e semântica
- `systematic-debugging` — debug (ex: !important excessivo, grids sem media queries)
- `verification-before-completion` — verificar antes de finalizar
