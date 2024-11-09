const typescript = require("@rollup/plugin-typescript");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs", // "cjs" format for compatibility with Node
    sourcemap: false,
  },
  plugins: [
    resolve(), // Resolves external modules from node_modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
};
