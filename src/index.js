import React from "react";
import { render } from "react-dom";
import App from "./app";
import "normalize.css";
import "./index.css";

/**
 * root render
 */
render(
    <App />,
    document.getElementById("app")
);