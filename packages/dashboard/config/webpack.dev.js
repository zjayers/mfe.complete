const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("../package.json");
const commonConfig = require("./webpack.common");

const DEV_PORT = 8083;

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
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboardModule",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardBootstrapper": "./src/bootstrap-app",
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
