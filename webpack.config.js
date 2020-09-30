const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: "file-loader",
          include: path.resolve(__dirname, "dist/fonts"),
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
          },
        },
      },
    ],
  },
};
