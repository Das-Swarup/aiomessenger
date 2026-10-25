import { defineConfig } from "eslint/config";
import expoConfig from "eslint-config-expo/flat.js";

export default defineConfig([
  ...expoConfig,
  {
    ignores: ["coverage/**", "dist/**", "node_modules/**", "web-build/**"],
  },
]);
