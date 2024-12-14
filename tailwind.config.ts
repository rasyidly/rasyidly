import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        amazon: {
          '50': '#f1f8f4',
          '100': '#deede2',
          '200': '#bfdbc9',
          '300': '#94c1a7',
          '400': '#66a181',
          '500': '#458464',
          '600': '#377255',
          '700': '#28543f',
          '800': '#224334',
          '900': '#1d372b',
          '950': '#0f1f18',
        },
      },
      fontFamily: {
        sans: ['Onest', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

