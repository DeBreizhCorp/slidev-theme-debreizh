<template>
  <span
    class="inline-block font-mono bg-zinc-900 rounded-full border border-[#27272a]"
    :class="[
      size === 'sm' ? 'text-sm px-2 py-1' : 'text-[15px] px-2 py-1',
      learning && 'border-dashed opacity-50 hover:opacity-100 transition-opacity duration-200',
    ]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ size?: 'sm' | 'md'; learning?: boolean }>(), {
  size: 'md',
  learning: false,
});
</script>
