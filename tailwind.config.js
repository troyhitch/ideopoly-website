const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs':['0.50rem', '0.75rem'],
        '4.5xl': ['2.50rem', '2.75rem']
      },
      colors: {
        red: {
          DEFAULT: '#E63946'
        },
        indigo: {
          DEFAULT: '#6100FF'
        }
      },
      spacing: {
        '88': '22rem',
        '128': '32rem',
        '168': '42rem',
        '192': '48rem'
      },
      screens: {
      },
      maxWidth: {
        '2xl': '40rem',
        '5xl': '60rem',
        '7xl': '79rem'
      },
      inset: {
        '16.5': '4,125rem',
        '17': '4.25rem',
        '18': '4.5rem'
      }
    },
    container: {
      center: true,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
