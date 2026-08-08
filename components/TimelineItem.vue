<template>
  <div class="relative" style="padding: 0.875rem 0 0.875rem 0.875rem">
    <span
      class="absolute rounded-full"
      style="left: -1.75rem; top: 1.35rem; width: 9px; height: 9px; border-width: 2px; border-style: solid"
      :style="dotStyle"
    />
    <div class="flex flex-wrap items-baseline gap-2.5 font-bold text-lg">
      <slot name="title" />
    </div>
    <p
      v-if="$slots.description"
      class="text-sm text-grayend"
      style="max-width: 46ch; margin: 0.4rem 0 0.6rem"
    >
      <slot name="description" />
    </p>
    <div v-if="$slots.default" class="flex flex-wrap gap-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{ status?: 'done' | 'progress' | 'todo' }>(),
  { status: 'todo' },
);

const dotStyle = computed(() => {
  if (props.status === 'done') {
    return {
      background: 'var(--portfolio-midnight-100)',
      borderColor: 'var(--portfolio-midnight-100)',
    };
  }
  if (props.status === 'progress') {
    return {
      background: 'var(--portfolio-darkend)',
      borderColor: 'var(--portfolio-midnight)',
    };
  }
  return {
    background: 'var(--portfolio-darkend)',
    borderColor: 'var(--portfolio-grayend)',
  };
});
</script>
