import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "cjs", // "cjs" format for compatibility with Node
    sourcemap: true,
  },
  plugins: [
    resolve(),         // Resolves external modules from node_modules
    commonjs(),        // Converts CommonJS modules to ES6
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};
