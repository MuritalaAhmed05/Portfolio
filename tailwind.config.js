/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 3px 3px rgba(0, 0, 0, 0.3)',
      },
      borderWidth: {
        'custom': '0px 0px 3px 3px',
        'customBtn': '0px 2px 0px 2px',
      },
      // keyframes: {
      //   fadeIn: {
      //     '0%': { opacity: '0' },
      //     '100%': { opacity: '1' },
      //   },
      //   slideInLeft: {
      //     '0%': { transform: 'translateX(-100%)' },
      //     '100%': { transform: 'translateX(0)' },
      //   },
      // },
      // animation: {
      //   fadeIn: 'fadeIn 1.5s ease-in-out',
      //   slideInLeft: 'slideInLeft 1s ease-in-out',
      // },
    },
  },
  plugins: [],
};
