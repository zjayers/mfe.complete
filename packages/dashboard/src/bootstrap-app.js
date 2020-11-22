import { createApp } from "vue";
import Dashboard from "./components/Dashboard";

const mount = (htmlElementId) => {
  const mountPoint = document.getElementById(htmlElementId);
  const app = createApp(Dashboard);
  app.mount(mountPoint);
};

export { mount };
