/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: "#ff5a60",
      },
    },
    minWidth: {
      '1/2': '50%',
    }
    
  },
  plugins: [],
}

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primario: "#ff5a60",
      },
    },
  },
  plugins: [],
});


