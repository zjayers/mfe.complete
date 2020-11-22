const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("../package.json");
const commonConfig = require("./webpack.common");

const DEV_PORT = 8082;

const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${DEV_PORT}/`,
  },
  devServer: {
    port: DEV_PORT,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "authModule",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthBootstrapper": "./src/bootstrap-app",
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
