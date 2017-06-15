import React from "react";
import { render } from "react-dom";
import App from "./app";
import "normalize.css";
import "./index.css";

import Promise from 'promise-polyfill'; 

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

import Find from "array.prototype.find";

Find.shim();

/**
 * root render
 */
render(
    <App />,
    document.getElementById("app")
);