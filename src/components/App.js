import React, { Component } from "react";
import Login from "./Login";

import blog from "../apis/blog";

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleFormSubmit = async (email, password) => {
    const res = await blog.post("/api/users/login", { email, password });
    console.log(res);
  };

  render() {
    return <Login handleFormSubmit={this.handleFormSubmit} />;
  }
}

export default App;
