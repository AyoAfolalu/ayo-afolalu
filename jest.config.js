// jest.config.js
module.exports = {
    testRunner: "jest-circus/runner", // ✅ correct for Jest 30
    testEnvironment: "jsdom",         // ✅ since you installed jest-environment-jsdom
    roots: ["<rootDir>"],             // look for tests in the project root by default
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  };
  