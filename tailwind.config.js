module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      poppin: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        'site': "url('./src/assets/site-bg.jpg)",
        'about': "url('https://raw.githubusercontent.com/jonycmtt/personal-portfolio/main/src/assets/aboutme.png')",
        'services': "url('https://raw.githubusercontent.com/jonycmtt/personal-portfolio/main/src/assets/services.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};


