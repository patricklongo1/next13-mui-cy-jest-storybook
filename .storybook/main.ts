import path from 'path'
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', {
    name: '@storybook/addon-storysource',
    options: {
      rule: {
        // test: [/\.stories\.jsx?$/], This is default
        include: [path.resolve(__dirname, '/\\.tsx?$/')], // You can specify directories
      },
      loaderOptions: {
        prettierConfig: { printWidth: 80, singleQuote: false },
      },
    },
  },],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
};

export default config;
