<template>
  <div class="portfolio-ambient" aria-hidden="true">
    <div class="portfolio-ambient-blob blob-1" />
    <div class="portfolio-ambient-blob blob-2" />
    <div class="portfolio-ambient-noise" />
    <div class="portfolio-ambient-grid" />
  </div>
</template>

<style>
/* Mirrors src/components/backgrounds/Background1.astro: near-black base,
   two blurred conic-gradient blobs, a noise texture and a subtle 1px grid
   overlay. The mouse-follow spotlight mask is intentionally omitted here —
   distracting during a live talk, and not essential to the look. */
.portfolio-ambient {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background: var(--portfolio-darkend);
}

.portfolio-ambient-blob {
  position: absolute;
  height: 26%;
  width: 26%;
  filter: blur(4.5rem);
  opacity: 0.8;
}

/* corners only: bottom-left (red/midnight) and top-right (midnight-100),
   pulled outside the edge so the glow reads as a corner accent rather
   than spilling toward the center of the slide */
.blob-1 {
  left: -6%;
  bottom: -10%;
  background: conic-gradient(
    from 2.35rad,
    var(--portfolio-accent-red),
    color-mix(in srgb, var(--portfolio-midnight) 60%, transparent)
  );
}

.blob-2 {
  right: -6%;
  top: -10%;
  background: conic-gradient(
    from 2.35rad,
    transparent,
    var(--portfolio-midnight-100)
  );
}

.portfolio-ambient-noise {
  position: absolute;
  inset: 0;
  background: url('/noise.svg') top center / 50px repeat;
  opacity: 0.12;
  mix-blend-mode: overlay;
}

.portfolio-ambient-grid {
  position: absolute;
  inset: 0;
  mix-blend-mode: overlay;
  opacity: 0.5;
  background-image:
    linear-gradient(to right, white 1px, transparent 1px),
    linear-gradient(to bottom, white 1px, transparent 1px);
  background-size:
    calc(100vw / 16) calc(100vw / 16),
    calc(100vw / 16) calc(100vw / 16);
  background-position: center center;
}
</style>
