module.exports = {
  mode: "production",
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
