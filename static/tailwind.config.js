/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './web/styles/*.css',
    './web/scripts/*.js',
    './web/artist/*.html',
    './web/artlover/*.html',
    './web/artistandartlovers/*.html',
    './web/public/*.html'
  ],
  theme: {
    extend: {
      textColor: {
        skin:{
          base: withOpacity('--color-text-base'),
          inverted: withOpacity('--color-text-inverted'),
          muted: withOpacity('--color-text-muted'),
          accent: withOpacity('--color-text-accent')
        }
      },
      backgroundColor:{
        skin:{
          normal: withOpacity('--color-normal'),
          base: withOpacity('--color-button-base'),
          accent: withOpacity('--color-button-accent'),
          muted: withOpacity('--color-button-muted'),
          disabled: withOpacity('--color-button-disabled')
        }
      },
      gradientColorStops:{
        stop:{
          normal: withOpacity('--color-normal'),
          base: withOpacity('--color-button-base'),
          accent: withOpacity('--color-button-accent'),
          muted: withOpacity('--color-button-muted'),
          disabled: withOpacity('--color-button-disabled')
        }
      },
      fontFamily: {
        'bahnschrift' : ['Bahnschrift','sans-serif'],
      }
    },
  },
  plugins: [],
}

function withOpacity(variable){
  return ({opacityValue}) => {
    if (opacityValue != undefined){
      return `rgba(var(${variable}),${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  }
}