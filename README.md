# slidev-theme-debreizh

A [Slidev](https://sli.dev) theme built around the **Debreizh** design system: Midnight/Darkend colors, and the Lostar / Source Sans 3 / Fira Code / Crimson Pro typefaces.

## Installation

Once published to npm:

```bash
npm install slidev-theme-debreizh
```

```yaml
---
theme: slidev-theme-debreizh
---
```

In the meantime — before it's published — install it from a local path or from your Git remote once you've pushed this repo:

```bash
npm install /path/to/slidev-theme-debreizh
# or, once pushed to a Git remote:
npm install git+<your-repo-url>
```

## Development

This repo is a theme package but also a runnable Slidev deck (`example.md`), useful to preview changes while working on the theme itself.

```bash
npm install
npm run dev      # serve example.md with hot reload
npm run build    # static build
npm run export   # PDF/PNG export
```

## Header / logo

The theme ships a transparent header, top-left, opt-in via `themeConfig` in your deck's frontmatter. It renders nothing unless a `logo` is set:

```yaml
---
theme: slidev-theme-debreizh
themeConfig:
  logo: /my-logo.svg
  logoAlt: My Company     # optional, defaults to "Logo"
  logoHref: https://example.com  # optional, makes the logo a link
---
```

`logo` is a path resolved from your own deck's `public/` folder (not the theme's).

## Layouts

| Layout      | Usage                                                                    |
| ----------- | ------------------------------------------------------------------------- |
| `cover`     | Title slide. `eyebrow` (frontmatter) shows a small mono label above.      |
| `default`   | Standard content.                                                         |
| `section`   | Numbered section break (`index` in frontmatter, e.g. `01.`).              |
| `two-cols`  | Two columns, `left` / `right` slots.                                      |
| `quote`     | Quote in Crimson Pro, `attribution` in frontmatter.                       |
| `center`    | Centered content.                                                         |
| `end`       | Closing slide, same treatment as `cover`.                                 |
| `code`      | Optional title (`title` in frontmatter) + code area.                      |

## Examples

- `slides.md` — neutral starter deck, no personal content.
- `example.md` — filled-in demo deck showing every layout and component in context.

## Components

- `<Badge size="sm|md">...</Badge>`
- `<Card>...</Card>`
- `<Button variant="primary|ghost" href="...">...</Button>`
- `<Timeline>...</Timeline>` / `<TimelineItem status="done|progress|todo">...</TimelineItem>` — vertical roadmap with a status dot.
- `<CodeWindow filename="...">...</CodeWindow>` — editor-style frame around a native Slidev code block.

## Utility classes (UnoCSS)

Design tokens are exposed as Tailwind/UnoCSS classes:

- Colors: `bg-darkend`, `bg-darkend-2`, `bg-midnight`, `bg-midnight-100`, `bg-midnight-800`, `bg-midnight-900`, `text-grayend`, ... (+ `text-*` / `border-*` variants)
- Fonts: `font-display` (Lostar), `font-sans` (Source Sans 3), `font-mono` (Fira Code), `font-serif` (Crimson Pro), `font-serif-2` (Platypi)
