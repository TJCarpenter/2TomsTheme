/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.(html,js)", "./src/stories/**/*.(js|jsx|ts|tsx)"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif']
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^(.*?)/,
      variants: ["hover", "focus"]
    },
  ],
}
