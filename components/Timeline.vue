<template>
  <div class="relative" style="padding-left: 1.8rem">
    <div
      class="absolute w-px"
      style="
        left: 5px;
        top: 6px;
        bottom: 6px;
        background: linear-gradient(
          to bottom,
          var(--portfolio-midnight-100),
          color-mix(in srgb, var(--portfolio-grayend) 30%, transparent) 90%
        );
      "
    />
    <slot />
  </div>
</template>
