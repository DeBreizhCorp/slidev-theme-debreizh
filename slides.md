---
theme: ./
title: Titre de la présentation
colorSchema: dark
layout: cover
eyebrow: Sous-titre
---

<h1 class="gradient-title">Titre de la présentation</h1>

Sous-titre ou accroche

---
layout: section
index: 1
---

# Section 1

---
layout: default
---

<div class="font-mono font-bold text-midnight-100" style="font-size: 18px">
  Date
</div>
<h2 class="font-sans" style="font-size: 1.9rem; margin: 0.3rem 0 0.6rem">
  Titre du bloc
</h2>
<p class="text-grayend" style="max-width: 60ch">
  Texte de description. Remplacez ce paragraphe par votre propre contenu.
</p>
<div class="flex flex-wrap gap-2 mt-4">
  <Badge>Tag</Badge>
  <Badge>Tag</Badge>
  <Badge size="sm">Tag</Badge>
  <Badge size="sm">Tag</Badge>
</div>

---
layout: two-cols
---

::left::

## Colonne gauche

<div class="flex flex-wrap gap-2 mt-4 mb-6">
  <Badge>Tag</Badge>
  <Badge size="sm">Tag</Badge>
</div>

<Card>
  <div class="font-bold mb-2">Titre</div>
  <Badge size="sm">Tag</Badge>
</Card>

::right::

## Colonne droite

<div class="flex flex-wrap gap-2 mt-4 mb-6">
  <Badge>Tag</Badge>
  <Badge size="sm">Tag</Badge>
</div>

<Card>
  <div class="font-bold mb-2">Titre</div>
  <Badge size="sm">Tag</Badge>
</Card>

---
layout: default
---

## Titre de la liste

<Timeline>
  <TimelineItem status="done">
    <template #title>
      Élément 1
      <span class="font-mono font-bold text-grayend border border-grayend/40 rounded px-1.5 py-0.5" style="font-size: 0.65rem">CATÉGORIE</span>
    </template>
    <template #description>Description courte de l'élément.</template>
    <Badge size="sm">Tag</Badge>
    <Badge size="sm">Tag</Badge>
  </TimelineItem>
  <TimelineItem status="progress">
    <template #title>
      Élément 2
      <span class="font-mono font-bold text-midnight-100 border border-midnight-100/50 bg-midnight-100/10 rounded px-1.5 py-0.5" style="font-size: 0.65rem">CATÉGORIE</span>
    </template>
    <template #description>Description courte de l'élément.</template>
    <Badge size="sm">Tag</Badge>
  </TimelineItem>
  <TimelineItem status="todo">
    <template #title>Élément 3</template>
    <template #description>Description courte de l'élément.</template>
    <Badge size="sm">Tag</Badge>
  </TimelineItem>
</Timeline>

---
layout: code
title: Un exemple de code
---

<CodeWindow filename="exemple.ts">

```ts {1-2|4-6|all}
interface Props {
  label: string;
}

export function Example({ label }: Props) {
  return label;
}
```

</CodeWindow>

---
layout: quote
attribution: Auteur
---

Une citation à remplacer.

---
layout: section
index: 2
---

# Section 2

---
layout: center
---

# Titre

Description ou chiffre clé à mettre en avant.

---
layout: end
eyebrow: Merci
---

<h1 class="gradient-title">Des questions ?</h1>

<div class="mt-6">
  <Button href="#">Contact</Button>
</div>
