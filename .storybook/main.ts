import type { StorybookConfig } from "@storybook/vue3-webpack5";
const path = require('path')

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },

  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src/')
      }
    }

    if (config.module && config.module.rules) {
      // 添加处理 SCSS 文件的规则
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          'style-loader',  // 将 CSS 插入到 DOM 中
          'css-loader',    // 解析 CSS 文件
          'sass-loader'    // 将 SCSS 转换为 CSS
        ],
        include: path.resolve(__dirname, '../src')  // 确保只处理你的源代码目录
      });
    }

    
    return config
  }


};
export default config;
