import { defineConfig } from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      midnight: {
        DEFAULT: '#36459b',
        100: '#4658be',
        800: '#1e2a78',
        900: '#05060f',
      },
      darkend: {
        DEFAULT: '#0c0f19',
        2: '#1a1c1f',
      },
      grayend: '#858b98',
    },
    fontFamily: {
      display: "'Lostar', sans-serif",
      sans: "'Source Sans 3 Variable', sans-serif",
      mono: "'Fira Code Variable', monospace",
      serif: "'Crimson Pro Variable', serif",
      'serif-2': "'Platypi Variable', serif",
    },
  },
});
