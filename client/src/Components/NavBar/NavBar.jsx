import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

function NavBar({ loggedIn }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          MyKeep
          <i className="fa-solid fa-chart-simple"></i>
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
