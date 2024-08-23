import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias'
import scss from 'rollup-plugin-scss';
/* rollup默认是只能处理emjs，这和脚手架不同 */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import packageData from "./package.json" assert {type: 'json'}
import del from 'rollup-plugin-delete'

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

/* 获取绝对路径 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const overrides = {
    compilerOptions: { declaration: true },
    exclude: ["tests/**/*.ts", "tests/**/*.tsx"]
  }

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
            check: false, //设置为 false 可避免对代码进行任何诊断检查。因为这里的目的就是识别ts文件
            tsconfigDefaults: overrides
          }),
        scss({
            fileName: 'outputScss.css',
        }),
        del({ targets: 'dist/*' }),  //构建时删除旧文件
        vue()
    ],
    external: [ //目的就是不要把其他的外部库全部打包到我们的库中
        "vue",
        "lodash-es"
    ]
};