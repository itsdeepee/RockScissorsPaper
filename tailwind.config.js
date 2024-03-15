/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: 
    {
      keyframes:{
        grow:{
           '0%,100%': { transform: 'scale(0.8)', opacity: '0.2' },
          '50%': { transform: 'scale(1)', opacity: '0.1' },
        },
        appear:{
          '0%':{transform:'scale(0.8)',opacity:'0'},
          '100%':{transform:'scale(1)',opacity:'1'}
        }
      },
      animation: {
        'grow-small': 'grow 3s ease-out  infinite',
        'grow-medium': 'grow 3s  ease-out  infinite', // Starts after 1s
        'grow-large': 'grow 3s  ease-out  infinite', // Starts after 2s
        'appear-animation':'appear 1s  ease-in'
      },
      boxShadow: {
        'inner-circle': 'inset 0px 20px 0px -5px rgba(186,191,212,0.5)',
        'inner-circle-small': 'inset 0px 10px 0px -5px  rgba(186,191,212,0.5)',
        'outer-circle': ' 0px 16px 0px -3px var(--tw-shadow-color)',
        'outer-circle-small': ' 0px 8px 0px -3px var(--tw-shadow-color)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 100%)',
      },
      colors:{
        'primary':{
          'scissors-start': 'hsl(39, 89%, 49%)',
          'scissors-end': 'hsl(40, 84%, 53%)',
          'paper-start': 'hsl(230, 89%, 62%)',
          'paper-end': 'hsl(230, 89%, 65%)',
          'rock-start': 'hsl(349, 71%, 52%)',
          'rock-end': 'hsl(349, 70%, 56%)',
          'lizard-start': 'hsl(261, 73%, 60%)',
          'lizard-end': 'hsl(261, 72%, 63%)',
          'cyan-start': 'hsl(189, 59%, 53%)',
          'cyan-end': 'hsl(189, 58%, 57%)',
        },
        'neutral': {
          'dark-text': 'hsl(229, 25%, 31%)',
          'score-text': 'hsl(229, 64%, 46%)',
          'header-outline': 'hsl(217, 16%, 45%)',
        },
        'background': {
          'radial-start': 'hsl(214, 47%, 23%)',
          'radial-end': 'hsl(237, 49%, 15%)',
        },
      },
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
      },
      fontWeight: {
        'semi-bold': 600,
        'bold': 700,
      },
    },
    theme:{
      screens:{
        'sm':'375px', 
        'lg':'1366px'
      }
    }
  },
  plugins: [],
}

