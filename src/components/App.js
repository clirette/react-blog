import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import CreatePost from "./CreatePost";

const App = () => {
  return (
    <Router>
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/create-post" component={CreatePost} />
    </Router>
  );
};

export default App;
