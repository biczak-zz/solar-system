/* IMPORTS */
const merge = require("webpack-merge");
const config = require("./webpack.config");

/* DEVELOPMENT WEBPACK CONFIGURATION */
module.exports = merge(config, {
  devtool: "eval-source-map",

  devServer: {
    contentBase: "../dist",
    hot: true
  }
});
