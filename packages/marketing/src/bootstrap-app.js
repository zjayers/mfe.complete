import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (htmlElementId) => {
  ReactDOM.render(<App />, document.getElementById(htmlElementId));
};

export { mount };
