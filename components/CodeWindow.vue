<template>
  <div class="code-window rounded-md border border-grayend/10 bg-darkend-2 overflow-hidden">
    <div
      class="flex items-center gap-2 border-b border-grayend/10"
      style="padding: 0.6rem 1rem"
    >
      <div class="flex gap-1.5">
        <span class="rounded-full bg-grayend/30" style="width: 9px; height: 9px" />
        <span class="rounded-full bg-grayend/30" style="width: 9px; height: 9px" />
        <span class="rounded-full bg-midnight-100" style="width: 9px; height: 9px" />
      </div>
      <span
        v-if="filename"
        class="font-mono text-grayend"
        style="font-size: 0.78rem; margin-left: 0.25rem"
      >
        {{ filename }}
      </span>
    </div>
    <div style="padding: 0.25rem 0.5rem">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ filename?: string }>();
</script>

<style>
/* The window chrome above already frames the code — strip the default
   pre/code box (background/border/radius/margin) from layout.css so it
   doesn't nest a second box inside this one. */
.code-window pre {
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  margin: 0 !important;
}
</style>
