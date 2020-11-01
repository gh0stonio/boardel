/* eslint-disable @typescript-eslint/no-var-requires */
const themeSwapper = require('tailwindcss-theme-swapper')
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  variants: {},
  plugins: [
    themeSwapper({
      themes: [
        {
          name: 'base',
          selectors: [':root'],
          theme: {
            colors: {
              ...colors,
              background: colors.white,
              font: {
                primary: colors.gray[900],
                link: colors.blue[500],
              },
            },
          },
        },
        {
          name: 'dark',
          selectors: ['html.dark'],
          // mediaQuery: '@media (prefers-color-scheme: dark)',
          theme: {
            colors: {
              ...colors,
              background: colors.gray[600],
              font: {
                primary: colors.white,
                link: colors.white,
              },
            },
          },
        },
      ],
    }),
  ],
  experimental: {
    applyComplexClasses: true,
  },
}
