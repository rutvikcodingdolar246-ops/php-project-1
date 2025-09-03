import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* App Download Section */}
      <div className="footer-column app-download">
        <h4>Get the App</h4>
        <p>Available on Android & iOS</p>
        <div className="app-icons">
          <img src={playStore} alt="Google Play Store" />
          <img src={appStore} alt="Apple App Store" />
        </div>
      </div>

      {/* Branding Section */}
      <div className="footer-column brand">
        <h1>ECOMMERCE</h1>
        <p className="tagline">Quality & Trust Delivered.</p>
        <small>
          &copy; 2025 Dolar Rutvik, Darshan Raval, Devarsh Jasani.
        </small>
      </div>

      {/* Social Links Section */}
      <div className="footer-column social">
        <h4>Connect with Us</h4>
        <ul>
          <li>
            <span>Dolar Rutvik:</span>{" "}
            <a
              href="https://www.instagram.com/rutvik_dolar246"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <span>Darshan Raval:</span>{" "}
            <a
              href="https://www.instagram.com/darshuraval_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <span>Devarsh Jasani:</span>{" "}
            <a
              href="https://www.instagram.com/devarsh_jasani_3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
