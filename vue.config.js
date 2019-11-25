const webpack = require("webpack");
const path = require('path');

module.exports = {

    runtimeCompiler: true,
    // outputDir: 'public',
    // publicPath: '',
    lintOnSave: false,
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/assets/'),
            },
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    },
}