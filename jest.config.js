module.exports = {
  preset: "jest-expo",
  testMatch: ["**/tests/**/*.test.ts", "**/tests/**/*.test.tsx"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/types/**"],
};
