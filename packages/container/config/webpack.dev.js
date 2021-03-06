const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("../package.json");
const commonConfig = require("./webpack.common");

const DEV_PORT = 8080;

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
      name: "containerModule",
      remotes: {
        marketingModule: "marketingModule@http://localhost:8081/remoteEntry.js",
        authModule: "authModule@http://localhost:8082/remoteEntry.js",
        dashboardModule: "dashboardModule@http://localhost:8083/remoteEntry.js",
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
