import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-terms">
          <Link className="btn-link" to="terms">
            <p>FKA Games Terms of Service and Privacy Policy</p>
          </Link>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-ersb-logo">
          <img src={require("../../Images/esrb.png")} alt="ersb-logo" />
        </div>
        <div className="footer-copyright">
          COPYRIGHT © 2023 FKA GAMES INC. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
}

export default Footer;
