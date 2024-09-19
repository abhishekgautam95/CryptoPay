import React from "react";
import ReactDOM from "react-dom";
import { Buffer } from "buffer";
import App from "./App";
import "./index.css";

// Set global Buffer
window.Buffer = Buffer;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

 