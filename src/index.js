import React from "react";
import ReactDOM from "react-dom";
import Converter from "./converter";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Currency exchange Rate</h1>
      <Converter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
