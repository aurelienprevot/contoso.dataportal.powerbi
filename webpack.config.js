module.exports = {
    devServer: {
        port: 8008
    },
    entry: './src/embeddedAsset.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};