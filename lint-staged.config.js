// lint-staged.config.js
export default {
  // Run ESLint + Prettier on code files
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix --max-warnings=0", 
    "prettier --write"
  ],

  // Format other files
  "*.{json,md,yml,yaml,css,scss}": ["prettier --write"],
};
