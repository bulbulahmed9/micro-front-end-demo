import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./components/Counter";
import { Users } from "./components/Users";

import "./index.css";

const App = () => (
  <div className="container">
    <Counter />
    <Users />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
