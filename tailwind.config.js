/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'shuttle': "url('./Images/spaceX.jpg')",
      },
    },
  },
  plugins: [],
}

