import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="home">
        <Link to="/">Home</Link>
      </li>

      <li className="blog">
        <Link to="/blog">Blog</Link>
      </li>

      <li className="contact">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavBar;
