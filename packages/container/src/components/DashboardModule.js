import { mount } from "dashboardModule/DashboardBootstrapper";
import React, { useEffect } from "react";

const MOUNT_ID = "dashboard-module";

const DashboardModule = () => {
  useEffect(() => {
    mount(MOUNT_ID);
  }, []);

  return <div id={MOUNT_ID} />;
};

export default DashboardModule;
