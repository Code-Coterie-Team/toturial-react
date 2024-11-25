/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: "media", //os user
  darkMode: "selector", // user select
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "rgb(255,255,255)",
          200: "",
          300: "",
        },

        dark: {
          primary: {
            100: "rgb(0,25,255)",
            200: "",
            300: "",
          },
        },
      },
    },
  },

  plugins: [],
};

//step 1: select stertegy

//step2: create state (global)

//step3: create button dark mode

//step4: add dark class to html tag(document.documentElement)
