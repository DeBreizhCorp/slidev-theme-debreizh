<template>
  <header v-if="$slidev.themeConfigs?.logo" class="theme-header">
    <a
      v-if="$slidev.themeConfigs?.logoHref"
      :href="$slidev.themeConfigs.logoHref"
      class="theme-header-link"
    >
      <img
        :src="$slidev.themeConfigs.logo"
        :alt="$slidev.themeConfigs.logoAlt ?? 'Logo'"
        class="theme-header-logo"
      />
    </a>
    <img
      v-else
      :src="$slidev.themeConfigs.logo"
      :alt="$slidev.themeConfigs.logoAlt ?? 'Logo'"
      class="theme-header-logo"
    />
  </header>
</template>

<style>
/* Transparent, configurable header — opt-in via themeConfig in the deck's
   frontmatter (see README). Renders nothing when no logo is configured. */
.theme-header {
  position: absolute;
  top: 1.25rem;
  right: clamp(1.5rem, 5vw, 4rem);
  z-index: 20;
  background: transparent;
}

.theme-header-link {
  display: block;
  text-decoration: none;
}

.theme-header-logo {
  display: block;
  height: 2.5rem;
  width: auto;
}
</style>
