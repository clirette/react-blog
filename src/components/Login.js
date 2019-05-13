import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import blog from "../apis/blog";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", redirect: false };
  }

  handleFormSubmit = async e => {
    e.preventDefault();
    const { data } = await blog
      .post("/api/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .catch(err => console.log(err));
    if (data && data.token) {
      localStorage.setItem("jwt", data.token);
      this.setState({ redirect: true });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="login-container">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="form-item">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
