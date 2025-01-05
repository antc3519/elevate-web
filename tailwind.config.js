const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/styles/tailwind.css"   // Global Tailwind CSS file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
