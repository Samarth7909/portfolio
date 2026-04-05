import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="{logo}" alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem" to="/">
          Home
        </Link>
        <Link className="desktopMenuListItem" to="/about">
          About
        </Link>
        <Link className="desktopMenuListItem" to="/projects">
          Portfolio
        </Link>
        <Link className="desktopMenuListItem" to="/contact">
          Clients
        </Link>
      </div>
      <button className="desktopMenuBtn">
        <img src="{contactImg}" alt="" className="desktopMenuImg" />
        Contant me
      </button>
    </nav>
  );
};

export default Navbar;
