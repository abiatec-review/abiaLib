const path = require("path");
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

require('dotenv').config()

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, "build"),
        libraryTarget: "umd",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        port: process.env.APP_PORT || 3333,
        static: {
            directory: path.resolve(__dirname, 'src')
        },
        open: true
    },

    resolve: {
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
}
