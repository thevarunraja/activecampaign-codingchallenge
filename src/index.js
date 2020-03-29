import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import "./index.css";

axios.defaults.headers.common["Api-Token"] =
  "0f7e5c9167768f6bb0a6e09e335ce464da7cb5e7008b989f0057266c26342424a4d8d3e5";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
