<template>
  <div
    class="slidev-layout code h-full flex flex-col"
    style="padding: 2.5rem clamp(1.5rem, 4vw, 3rem)"
  >
    <h2 v-if="$frontmatter.title" style="margin: 0 0 1.25rem">
      {{ $frontmatter.title }}
    </h2>
    <div class="flex-1" style="min-height: 0">
      <slot />
    </div>
  </div>
</template>
