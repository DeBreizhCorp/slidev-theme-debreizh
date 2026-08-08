<template>
  <div
    class="slidev-layout two-cols grid grid-cols-1 lg:grid-cols-2 gap-10 h-full"
    style="padding: 3rem clamp(1.5rem, 5vw, 4rem)"
  >
    <div><slot name="left" /></div>
    <div><slot name="right" /></div>
  </div>
</template>
