const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {

    mode: "development",
    devtool: "inline-source-map",
    entry: ["./client/index.js"],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },

            {
                test: /\.(css|scss)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg|webp|mp3)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {}
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist/bundle/",
        publicPath: "/static/"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),

        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
}