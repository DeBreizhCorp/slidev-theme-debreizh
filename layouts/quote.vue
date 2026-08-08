<template>
  <div
    class="slidev-layout quote flex flex-col justify-center h-full"
    style="padding: 3rem clamp(1.5rem, 5vw, 4rem)"
  >
    <div
      class="font-serif"
      style="
        font-size: clamp(1.75rem, 4vw, 2.75rem);
        font-style: italic;
        line-height: 1.4;
        color: white;
      "
    >
      <slot />
    </div>
    <div
      v-if="$frontmatter.attribution"
      class="font-mono"
      style="
        margin-top: 1.5rem;
        font-size: 0.9rem;
        color: var(--portfolio-grayend);
      "
    >
      — {{ $frontmatter.attribution }}
    </div>
  </div>
</template>
