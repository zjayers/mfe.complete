import("./bootstrap-app").then((app) =>
  app.mount("dev-auth", { useBrowserHistory: true })
);
