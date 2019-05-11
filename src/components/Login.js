import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.handleFormSubmit(this.state.email, this.state.password);
  };

  render() {
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
