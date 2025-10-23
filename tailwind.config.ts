import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d8ecff',
          200: '#b7dcff',
          300: '#86c6ff',
          400: '#4ba8ff',
          500: '#1e86ff',
          600: '#0a68e6',
          700: '#084fb4',
          800: '#0a448f',
          900: '#0c3a73',
        },
      },
      backgroundImage: {
        'grid': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-outfit)']
      }
    },
  },
  plugins: [],
} satisfies Config;
