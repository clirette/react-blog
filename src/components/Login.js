import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import blog from "../apis/blog";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleFormSubmit = async e => {
    e.preventDefault();
    const { data } = await blog
      .post("/api/users/login", {
        email,
        password
      })
      .catch(err => console.log(err));
    if (data && data.token) {
      localStorage.setItem("jwt", data.token);
      setRedirect(true);
    }
  };

  return (
    <>
      {redirect ? <Redirect to="/dashboard" /> : null}
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

export default Login;
