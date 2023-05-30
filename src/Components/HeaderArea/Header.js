import "./Header.css";
import { Link } from "react-router-dom";
import Navbar from "../HeaderArea/NavBar";
import React from "react";

function Header() {
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/company/fkagames/", "_blank");
  };
  const openInstagram = () => {
    window.open("https://www.instagram.com/fkagames/", "_blank");
  };
  return (
    <div className="header">
      <div className="left-part-header">
        <div className="logo">
          <button className="logo-btn">
            <Link className="btn-link" to="/">
              <img src={require("../../Images/logo.png")} alt="Logo" />
            </Link>
          </button>
        </div>
      </div>
      <div className="middle-part">
        <button className="btn">
          <Link className="btn-link-middle" to="/">
            Home
          </Link>
        </button>
        <button className="btn">
          <Link className="btn-link-middle" to="/thelosthope">
            The Lost Hope
          </Link>
        </button>
        <button className="btn">
          <Link className="btn-link-middle" to="/team">
            Team
          </Link>
        </button>
        <button className="btn">
          <Link className="btn-link-middle" to="/press">
            Press
          </Link>
        </button>
        <button className="btn">
          <Link className="btn-link-middle" to="/contact">
            Contact
          </Link>
        </button>
      </div>
      <div className="right-part">
        <div className="social-buttons">
          <button className="btn-social" onClick={openInstagram}>
            <Link className="btn-link">
              <img src={require("../../Images/Instagram-Logo.png")} alt="Instagram"/>
            </Link>
          </button>
          <button className="btn-social" onClick={openLinkedin}>
            <Link className="btn-link">
              <img src={require("../../Images/LinkedIn-Logo.png")} alt="LinkedIn"/>
            </Link>
          </button>
        </div>
      </div>

      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
