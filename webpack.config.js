module.exports = {
  entry: "./app/main.js",
  output: {
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel"],
        include: __dirname
      },
      {
        test: /\.sass$/,
        loaders: ["style", "css", "sass?config=sassConfig"],
        include: __dirname
      }
    ]
  },
  sassConfig: {
    indentedSyntax: true
  }
}