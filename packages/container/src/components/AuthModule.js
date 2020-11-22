import { mount } from "authModule/AuthBootstrapper";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const MOUNT_ID = "auth-module";

const AuthModule = ({ setIsSignedIn }) => {
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(MOUNT_ID, {
      initialPath: history.location.pathname,
      onSignIn: () => {
        setIsSignedIn(true);
      },
      onChildNavigate: ({ pathname: nextMarketingPathName }) => {
        if (history.location.pathname !== nextMarketingPathName)
          history.push(nextMarketingPathName);
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div id={MOUNT_ID} />;
};

export default AuthModule;
