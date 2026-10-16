/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F2E8',
        'paper-2': '#E5D9C6',
        ink: '#2D3528',
        'ink-soft': 'rgba(45,53,40,.62)',
        'ink-muted': '#5B6350',
        olive: '#586844',
        accent: '#99482F',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
