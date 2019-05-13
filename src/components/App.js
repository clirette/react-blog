import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }
  render() {
    return (
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    );
  }
}

export default App;
