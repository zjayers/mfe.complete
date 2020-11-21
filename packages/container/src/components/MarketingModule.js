import { mount } from "marketingModule/MarketingBootstrapper";
import React, { useEffect } from "react";

const MOUNT_ID = "marketing-module";

const MarketingModule = () => {
  useEffect(() => {
    mount(MOUNT_ID);
  }, []);

  return <div id={MOUNT_ID} />;
};

export default MarketingModule;
