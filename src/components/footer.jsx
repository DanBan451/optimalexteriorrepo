import React from "react";
import { default as companyLogo } from "../images/OptimalPandaWordPress_PandaWordLogo.svg";
import { default as facebookIcon } from "../images/facebook-icon.png";
import { default as instagramIcon } from "../images/instagram-icon.png";

import "../styles/footer.css";

export default function footer ({ quoteHandler }) {
  return (
    <div className="footer">
      <div className="footer-navigation">
        <div className={"navbar-wrapper"}>
          <div className="navbar-logo">
            <a href="/">
              <img src={companyLogo} alt="" />
            </a>
          </div>
          <ul className={"links-list"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Our Services</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
          <ul className={"socials-list"}>
            <a href="/">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="/">
              <img src={instagramIcon} alt="" />
            </a>
          </ul>
          <div className="quote-btn">
            {/* <a href="/contact"> */}
              <button onClick={quoteHandler}>
                GET A QUOTE
              </button>
            {/* </a> */}
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <span>
          Copyright © 2022 <span>Optimal Exterior</span>
        </span>
      </div>
    </div>
  );
}
