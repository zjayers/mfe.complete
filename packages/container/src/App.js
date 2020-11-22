import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MarketingModule from "./components/MarketingModule";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingModule />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
