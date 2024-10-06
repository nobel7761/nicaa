const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      keyframes: {
        draw: {
          '0%': { strokeDashoffset: 4500 },
          '100%': { strokeDashoffset: 0 },
        },
      },
      animation: {
        draw: 'draw 8s ease',
      },
    },
  },
  plugins: [],
};
