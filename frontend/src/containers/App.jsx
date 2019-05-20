import { hot } from "react-hot-loader/root";
import { setConfig } from "react-hot-loader";
import * as React from "react";

const App = () => (
  <div>
    <h1>The Solar System</h1>
  </div>
);

setConfig({
  logLevel: "debug"
});

export default hot(App);
