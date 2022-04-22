import React, { Component } from "react"
import AppRouter from "./router/AppRouter"

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
    )
  }
}
