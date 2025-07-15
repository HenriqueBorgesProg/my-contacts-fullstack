import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS recommended rules + browser globals
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      js,
      react: pluginReact,
    },
    rules: {
      "no-unused-vars": "off", // <--- Desativa unused-vars
    },
    extends: [js.configs.recommended],
  },

  // React recommended rules
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: pluginReact,
    },
    rules: {
      // React-specific rules overrides if any
    },
    ...pluginReact.configs.flat.recommended,
  },
]);
