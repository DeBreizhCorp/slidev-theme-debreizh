<template>
  <div
    class="slidev-layout section flex flex-col justify-center h-full"
    style="padding: 3rem clamp(1.5rem, 5vw, 4rem)"
  >
    <div
      class="relative inline-block font-display"
      style="font-size: clamp(2.5rem, 6vw, 4.5rem)"
    >
      <span
        v-if="$frontmatter.index != null"
        aria-hidden="true"
        class="absolute font-mono font-bold text-slate-700"
        style="top: -1.7rem; left: 0; font-size: clamp(1.1rem, 3vw, 2.25rem)"
      >
        {{ String($frontmatter.index).padStart(2, '0') }}.
      </span>
      <slot />
    </div>
  </div>
</template>
