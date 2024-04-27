/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'prayer-one-to': '#95ECF9',
        'prayer-one-from': '#DAECB8',
        'prayer-two-to': '#F6D6C8',
        'prayer-two-from': '#FDBAB3',
        'prayer-three-to': '#FFBECF',
        'prayer-three-from': '#FAD8DF',
        'prayer-four-to': '#C6F0F7',
        'prayer-four-from': '#75CBD7',
        'prayer-five-to': '#131419',
        'prayer-five-from': '#272C3B',
      },
    },
  },
  plugins: [],
};
