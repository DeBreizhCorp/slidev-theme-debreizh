<template>
  <div
    class="slidev-layout cover flex flex-col justify-center items-center h-full text-center"
    style="padding: 3rem clamp(1.5rem, 5vw, 4rem)"
  >
    <div v-if="$frontmatter.eyebrow" class="eyebrow">
      {{ $frontmatter.eyebrow }}
    </div>
    <div class="cover-body">
      <slot />
    </div>
  </div>
</template>
