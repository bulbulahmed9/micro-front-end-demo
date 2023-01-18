import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "counter/Counter";
import { Users } from "counter/Users";
// Guide : https://dev.to/devsmitra/the-complete-guide-to-micro-frontend-with-reactjs-for-2022-36b2
// Create project : npx create-mf-app

import "./index.css";

const App = () => (
  <div className="container">
    <Counter initialValue={10} />
    <Users />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
