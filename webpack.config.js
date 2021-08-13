module.exports = {
  mode: "production",
  entry: {
    'page1': './src/page1/index.js',
    'page2': './src/page2/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|webp|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
