import React, { Component } from "react";
import AppRouter from "./router/AppRouter";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
    );
  }
}
