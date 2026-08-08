<template>
  <a
    class="inline-flex items-center justify-center rounded-md px-4 py-2 font-mono font-bold transition-colors duration-150"
    :class="
      variant === 'ghost'
        ? 'bg-transparent text-midnight-100 border border-midnight-100/40 hover:bg-midnight-100/10'
        : 'bg-midnight-100 text-white hover:bg-midnight-800'
    "
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'primary' | 'ghost' }>(), {
  variant: 'primary',
});
</script>
