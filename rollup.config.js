import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.ts',
  output: {
    dir: 'dist',
    sourcemap: false,
    format: 'cjs'
  },
  external: ['obsidian'],
  plugins: [
    typescript(),
    nodeResolve({ browser: true }),
    commonjs(),
    css({ output: 'styles.css' }),
    terser()
  ]
};
