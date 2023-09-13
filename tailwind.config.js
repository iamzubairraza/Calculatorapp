/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: "#ff6600",
          secondary: "#3366cc",
          green: "#518428",
          lightgray: "#eee",
          silvergray: "#bbb",
          royalblue: "#336699",
        },
      },
    },
  },
  plugins: [],
};
