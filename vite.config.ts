import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        createStyleImportPlugin({
            resolves: [AntdResolve()],
            libs: [
                // 如果没有你需要的resolve，可以在lib内直接写，也可以给我们提供PR
                {
                    libraryName: 'antd',
                    esModule: true,
                    resolveStyle: (name) => {
                        return `antd/lib/theme-chalk/${name}.css`;
                    },
                    ensureStyleFile: true, // 忽略文件是否存在, 导入不存在的CSS文件时防止错误。
                },
            ],
        }),
    ],
    resolve: {
        //设置别名
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
        },
    },
    server: {
        port: 3001,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1',
                changeOrigin: true,
                cookieDomainRewrite: '',
                secure: false,
            },
        },
    },
});
