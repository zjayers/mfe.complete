const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("../package.json");
const commonConfig = require("./webpack.common");

const DOMAIN = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "containerModule",
      remotes: {
        marketingModule: `marketingModule@${DOMAIN}/marketing/latest/remoteEntry.js`,
        authModule: `authModule@${DOMAIN}/auth/latest/remoteEntry.js`,
        dashboardModule: `dashboardModule@${DOMAIN}/dashboard/latest/remoteEntry.js`,
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
