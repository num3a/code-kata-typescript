module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    "**/*.{js,ts,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
};
