const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // configuration de base de Webpack
  mode: "development", // mode de développement
  entry: "./src/index.js", // point d'entrée de l'application
  // configuration de sortie
  output: {
    filename: "main.js", // nom du fichier de sortie
    path: path.resolve(__dirname, "dist"), // chemin de sortie
    clean: true, // nettoyer le dossier de sortie avant chaque build
  },
  plugins: [
    // plugin pour générer le fichier HTML
    new htmlWebpackPlugin({
      template: "./src/template.html", //chemin vers le fichier HTML
      filename: "index.html", //nom du fichier de sortie
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // pour les fichiers CSS
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // pour les images
        type: "asset/resource",
      },
      {
        test: /\.html$/i, // pour les fichiers HTML
        use: ["html-loader"],
      },
    ],
  },
  devtool: "eval-source-map", // pour le débogage
  devServer: {
    watchFiles: ["./src/template.html"], // surveiller les fichiers HTML
  },
};
