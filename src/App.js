import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.scss";
import Nav from "./components/Navigation/Nav";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  return (
    <Router>
      <div className="app-content">
        <Nav />

        <Switch>
          <Route path="/about">About</Route>
          <Route path="/news">News</Route>
          <Route path="/contact">Contact</Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">Home</Route>
        </Switch>
      </div>
    </Router>
  );
}

function Register2() {
  return <h2>Users</h2>;
}
export default App;
