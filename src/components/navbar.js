import React, { useState } from "react";
import "../css/navbar.css";
import logo from "../images/logo.png";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isActive, setisActive] = useState(false);

  return (
    <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img src={logo} height="14" width="120" alt="site logo"></img>
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link className="navbar-item" to='/' >Home</Link>
          <Link className="navbar-item" to='/Projects' >Projects</Link>
          <Link className="navbar-item" to='/Contact' >Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
