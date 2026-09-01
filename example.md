---
theme: ./
title: Benjamin Piel — Portfolio
colorSchema: dark
layout: cover
eyebrow: Portfolio 2026
# See README "Header / logo" to configure your own.
themeConfig:
  logo: /logo.svg
  logoAlt: Benjamin Piel
---

<h1 class="gradient-title">Benjamin Piel</h1>

Développeur Full-Stack basé en France

---
layout: section
index: 1
---

# Expériences

---
layout: default
---

<div class="font-mono font-bold text-midnight-100" style="font-size: 18px">
  2023 — Aujourd'hui
</div>
<h2 class="font-sans" style="font-size: 1.9rem; margin: 0.3rem 0 0.6rem">
  Développeur Full-Stack
</h2>
<p class="text-grayend" style="max-width: 60ch">
  Conception et développement d'applications web, de l'architecture backend
  aux interfaces React, en passant par la mise en place de design systems.
</p>
<div class="flex flex-wrap gap-2 mt-4">
  <Badge>React</Badge>
  <Badge>Astro</Badge>
  <Badge size="sm">Node.js</Badge>
  <Badge size="sm">TypeScript</Badge>
</div>

---
layout: two-cols
---

::left::

## Front-end

<div class="flex flex-wrap gap-2 mt-4 mb-6">
  <Badge>React</Badge>
  <Badge>Astro</Badge>
  <Badge size="sm">Tailwind</Badge>
</div>

<Card>
  <div class="font-bold mb-2">Storybook</div>
  <Badge size="sm">UI</Badge>
</Card>

::right::

## Back-end

<div class="flex flex-wrap gap-2 mt-4 mb-6">
  <Badge>Node.js</Badge>
  <Badge size="sm">REST</Badge>
  <Badge size="sm" learning>AdonisJS</Badge>
</div>

<Card>
  <div class="font-bold mb-2">PostgreSQL</div>
  <Badge size="sm">SQL</Badge>
</Card>

---
layout: default
---

## Mes Skills

<Timeline>
  <TimelineItem status="done">
    <template #title>
      React
      <span class="font-mono font-bold text-grayend border border-grayend/40 rounded px-1.5 py-0.5" style="font-size: 0.65rem">TECH</span>
    </template>
    <template #description>Composants, hooks, SSR avec Astro.</template>
    <Badge size="sm">Front-End</Badge>
    <Badge size="sm">SSR</Badge>
  </TimelineItem>
  <TimelineItem status="progress">
    <template #title>
      Design systems
      <span class="font-mono font-bold text-midnight-100 border border-midnight-100/50 bg-midnight-100/10 rounded px-1.5 py-0.5" style="font-size: 0.65rem">PILOTAGE</span>
    </template>
    <template #description>Construire et documenter des design systems réutilisables.</template>
    <Badge size="sm">Storybook</Badge>
  </TimelineItem>
  <TimelineItem status="todo">
    <template #title>Rust</template>
    <template #description>Prochaine étape : explorer les workers Rust côté edge.</template>
    <Badge size="sm">Édge</Badge>
  </TimelineItem>
</Timeline>

---
layout: code
title: Le composant Badge
---

<CodeWindow filename="src/components/ui/Badge/index.tsx">

```tsx {1|4-8|all}
export function Badge({ children, modifiers = [] }: BadgeProps) {
  return (
    <span
      className={clsx(
        'ui-badge',
        modifiers.map((modifier) => `ui-badge--${modifier}`),
      )}
    >
      {children}
    </span>
  );
}
```

</CodeWindow>

---
layout: quote
attribution: Benjamin Piel
---

Le code est un moyen, pas une fin.

---
layout: section
index: 2
---

# En chiffres

---
layout: center
---

# 5+

Années d'expérience en développement full-stack

---
layout: end
eyebrow: Merci
---

<h1 class="gradient-title">Des questions ?</h1>

<div class="mt-6">
  <Button href="mailto:benjamin.piel.3591@gmail.com">Me contacter</Button>
</div>
