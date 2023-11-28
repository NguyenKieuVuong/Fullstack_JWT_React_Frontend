import React from "react";
import "../Navigation/Nav.scss";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
  return (
    <div className="top-menu">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Nav;
