

import typescript from 'rollup-plugin-typescript2';

const externals = [
  'vuex',
];
export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/esm/index.js',
      format: 'esm',
      target: 'es2015'
    },
    external: externals,
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            target: 'es2015',
            declaration: true
          }
        }
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      target: 'es2015'
    },
    external: externals,
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            target: 'es2015',
          }
        }
      })

    ]
  }
]