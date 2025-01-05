import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";

// Find the root element
const container = document.getElementById("root");

// Create the React root
const root = createRoot(container);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
