// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      sevillana:['Sevillana', 'cursive']
    }
  },
  plugins: [require("daisyui")],


  // while adding the daisyui the screen becomes black so why the bellow action is perforemd
  // daisyui: {
  //   themes: [
  //     "light",
  //     "dark",
  //     "cupcake",
  //     "bumblebee",
  //     "emerald",
  //     "corporate",
  //     "synthwave",
  //     "retro",
  //     "cyberpunk",
  //     "valentine",
  //     "halloween",
  //     "garden",
  //     "forest",
  //     "aqua",
  //     "lofi",
  //     "pastel",
  //     "fantasy",
  //     "wireframe",
  //     "black",
  //     "luxury",
  //     "dracula",
  //     "cmyk",
  //     "autumn",
  //     "business",
  //     "acid",
  //     "lemonade",
  //     "night",
  //     "coffee",
  //     "winter",
  //     "dim",
  //     "nord",
  //     "sunset",
  //   ],
  //   font
  // },
  // daisyui: {
  //   darkTheme: "light",
  // },
}

