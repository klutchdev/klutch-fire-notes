import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import UserContextProvider from "./contexts/AuthContext";
import ModalContextProvider from "./contexts/ModalContext";

ReactDOM.render(
  <UserContextProvider>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </UserContextProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();

reportWebVitals();
