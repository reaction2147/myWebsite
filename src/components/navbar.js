import React, {useState } from "react";
import "../css/navbar.css";
import logo from "../images/logo.png";



const Navbar = () => {

    const [isActive, setisActive] = useState(false)

  return (
    <>
      <nav
        className="navbar is-spaced has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <img src={logo} alt="website logo" width="120" height="14" />
          <a
            onclick={() => {
                setisActive(!isActive)
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="website-navbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="website-navbar" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Projects</a>
            <a className="navbar-item">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
