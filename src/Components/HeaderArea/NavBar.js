import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/company/fkagames/", "_blank");
  };
  const openInstagram = () => {
    window.open("https://www.instagram.com/fkagames/", "_blank");
  };

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <div className="Hambuerger">
      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`links ${isActive ? "active" : ""}`}>
        <Link className="links-link" onClick={closeMenu} to="/">
          Home
        </Link>
        <Link className="links-link" onClick={closeMenu} to="/thelosthope">
          The Last Hope
        </Link>
        <Link className="links-link" onClick={closeMenu} to="/team">
          Team
        </Link>
        <Link className="links-link" onClick={closeMenu} to="/press">
          Press
        </Link>
        <Link className="links-link" onClick={closeMenu} to="/contact">
          Contact
        </Link>
        <div className="social-buttons">
          <button className="btn-social" onClick={openInstagram}>
            <Link className="btn-link">
              <img src={require("../../Images/Instagram-Logo.png")} alt="Instagram"/>
            </Link>
          </button>
          <button className="btn-social" onClick={openLinkedin}>
            <Link className="btn-link">
              <img src={require("../../Images/LinkedIn-Logo.png")} alt="LinkedIn" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
