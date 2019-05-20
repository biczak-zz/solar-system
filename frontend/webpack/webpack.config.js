/* IMPORTS */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { NamedModulesPlugin } = require("webpack");

/* BASE WEBPACK CONFIGURATION */
module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    app: "./src/index.jsx"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["react-hot-loader/webpack", "babel-loader"]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      title: "The Solar System"
    })
  ],

  resolve: {
    alias: {
      Containers: resolve("src/containers/"),
      Images: resolve("public/assets/images/")
    },
    extensions: [".js", ".jsx"]
  },

  output: {
    filename: "bundle.[hash].[name].js",
    path: resolve("dist")
  }
};
