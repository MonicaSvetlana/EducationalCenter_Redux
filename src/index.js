import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { myStore } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);
