import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-s-alert/dist/s-alert-css-effects/bouncyflip.css";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
