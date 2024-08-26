import typescript from 'rollup-plugin-typescript2';
import vue from '@vitejs/plugin-vue';
import alias from '@rollup/plugin-alias'
import scss from 'rollup-plugin-scss';
/* rollup默认是只能处理emjs，这和脚手架不同 */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import packageData from "./package.json" assert {type: 'json'}
import del from 'rollup-plugin-delete'
import commonjs from '@rollup/plugin-commonjs';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { externalAssets } from "rollup-plugin-external-assets";
import url from '@rollup/plugin-url';
import cjs from "rollup-plugin-cjs-es";

/* 获取绝对路径 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("断点1", __filename);
console.log("断点2", __dirname);
console.log("断点3", path.resolve(__dirname, 'src'));


/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input: 'src/main.ts',
    output: [{
        file: 'dist/' + packageData.name + '.es.js',
        format: 'es',
        sourcemap: true,
        exports: 'named'
        // 在没有这个配置选项时，打包工具可能会将默认导出包装在一个 default 属性中，这在某些环境中可能不太直观
    },
    {
        file: 'dist/' + packageData.name + '.cjs.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named'
    },
    ],
    plugins: [
        del({ targets: 'dist/*' }),  //构建时删除旧文件
        url({
            include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
            limit: 0, // 在该大小内的图片，将内联，不作为文件处理
            fileName: '[name][extname]',
            destDir: path.resolve(__dirname, 'dist/assets'),
            publicPath: './assets/',
        }),
        externalAssets('assets/*'),
        nodeResolve(),
        alias({
            entries: [
                {
                    find: '@',
                    replacement: path.resolve(__dirname, 'src')
                }
            ]
        }),
        typescript({
            check: false,
            tsconfigOverride: {
                compilerOptions: {
                    declaration: true,
                    declarationMap: true,
                },  //开启该项后，所有文件构建都会有ts类型文件，这样写只覆盖compilerOptions的declaration
                exclude: ['src/stories']  // src不能省略
            }
        }),
        vue(),
        scss({
            fileName: 'outputScss.css',
        }),
    ],
    external: [ //目的就是不要把其他的外部库全部打包到我们的库中
        "vue",
        "lodash-es"
    ]
};