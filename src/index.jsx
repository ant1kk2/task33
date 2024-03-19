"use strict";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { HashRouter } from "react-router-dom";

const mainEl = document.querySelector("main");
const root = ReactDOM.createRoot(mainEl);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
