<template>
  <span
    class="inline-block font-mono font-bold text-midnight-100 bg-zinc-900 rounded-md"
    :class="size === 'sm' ? 'text-sm px-2 py-1' : 'text-[15px] px-2 py-1'"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ size?: 'sm' | 'md' }>(), { size: 'md' });
</script>
