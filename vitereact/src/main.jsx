import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const elementone = (
  <a href="https://google.com" target="_blank">
    google
  </a>
);

const text = "coding";

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me",
  text
);
createRoot(document.getElementById("root")).render(reactElement);
