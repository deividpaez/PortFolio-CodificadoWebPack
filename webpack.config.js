const HtmlWebPackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        use: {
          loader: "html-loader",
          options: {
            minimize: true,
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }, 
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: {
          loader: "file-loader",
          options:{
            name: "[path][name].[ext]",
            outputPath: "assets"
          }
        },
      },
      {
        test: /\.(woff)$/i,
        use: {
          loader: "file-loader",
          options:{
            name: "[path][name].[ext]",
            outputPath: "assets"
          }
        },
      }
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
