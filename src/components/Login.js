import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { requestAuthenticateUser } from "../actions";

const Login = ({ requestAuthenticateUser, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async e => {
    e.preventDefault();
    requestAuthenticateUser({ email, password });
  };

  return (
    <>
      {user && user.success ? (
        <Redirect to="/dashboard" />
      ) : (
        <h1>{user && user.msg}</h1>
      )}
      <div className="login-container">
        <form onSubmit={handleFormSubmit}>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="form-item">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = state => ({ user: state.users.user });

export default connect(
  mapStateToProps,
  { requestAuthenticateUser }
)(Login);
