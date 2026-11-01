/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#e11d48',
          600: '#be123c',
          700: '#9f1239',
          800: '#881337',
          900: '#70102b',
          950: '#450616',
        },
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f4ede0',
          300: '#ebe1cb',
          400: '#ded0b0',
        },
        charcoal: {
          700: '#2b2b36',
          800: '#1b1b22',
          900: '#131318',
          950: '#0b0b0e',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'royal': '0 10px 30px -10px rgba(112, 16, 43, 0.3)',
        'gold-glow': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};

