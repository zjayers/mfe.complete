import { createMemoryHistory, createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (
  htmlElementId,
  { onChildNavigate, useBrowserHistory, initialPath }
) => {
  const history = useBrowserHistory
    ? createBrowserHistory()
    : createMemoryHistory({
        initialEntries: [initialPath],
      });

  if (onChildNavigate) {
    history.listen(onChildNavigate);
  }

  ReactDOM.render(
    <App history={history} />,
    document.getElementById(htmlElementId)
  );

  return {
    onParentNavigate({ pathname: nextParentPathName }) {
      if (history.location.pathname !== nextParentPathName) {
        history.push(nextParentPathName);
      }
    },
  };
};

export { mount };
