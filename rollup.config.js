import rollupPluginBabel from "rollup-plugin-babel";

const input = './js/index.js';

export default [
    {
        input,
        plugins: [
            rollupPluginBabel()
        ],
        output: {
            format: 'umd',
            name: 'D',
            file: './dist/super-d.umd.js'
        }
    },
    {
        input,
        output: {
            format: 'esm',
            file: './dist/super-d.js'
        }
    }
];
