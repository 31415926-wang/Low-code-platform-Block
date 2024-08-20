import typescript from 'rollup-plugin-typescript2';
// import css from 'rollup-plugin-css-only'
// import vuePlugin from 'rollup-plugin-vue'
import vue from '@vitejs/plugin-vue';
import alias from '@rollup/plugin-alias'
import scss from 'rollup-plugin-scss';
/* rollup默认是只能处理emjs，这和脚手架不同 */
// const { resolve } = require('path')
import resolve from '@rollup/plugin-node-resolve';
import packageData from "./package.json" assert {type: 'json'}
import del from 'rollup-plugin-delete'

// console.log("输出", packageData);

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input: 'src/main.ts',
    output: {
        format: 'es',
        file: 'dist/' + packageData.name + '.js',
        //自定义输出的文件名称
    },
    plugins: [
        resolve(),
        typescript({
            check: false,
            tsconfigOverride: {
                compilerOptions: { declaration: true },  //开启该项后，所有文件构建都会有ts类型文件，这样写只覆盖compilerOptions的declaration
                exclude: ['src/stories']  // src不能省略
            }
        }),
        alias({
            entries: [
                { find: '@', replacement: 'src' },
            ]
        }),
        scss({
            fileName: 'outputScss.css',
        }),
        del({ targets: 'dist/*' }),  //构建时删除旧文件
        // vuePlugin(),
        // css({
        //     output: 'bundle.css'
        // }),
        vue()
    ],
    external: [ //目的就是不要把其他的外部库全部打包到我们的库中
        "vue",
        "lodash-es"
    ]
};