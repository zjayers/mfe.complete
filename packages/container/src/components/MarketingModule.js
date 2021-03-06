import { mount } from "marketingModule/MarketingBootstrapper";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const MOUNT_ID = "marketing-module";

const MarketingModule = () => {
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(MOUNT_ID, {
      initialPath: history.location.pathname,
      onChildNavigate: ({ pathname: nextMarketingPathName }) => {
        if (history.location.pathname !== nextMarketingPathName)
          history.push(nextMarketingPathName);
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div id={MOUNT_ID} />;
};

export default MarketingModule;
