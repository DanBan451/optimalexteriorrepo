import "../styles/navbar.css";
import React, { useEffect, useState } from "react";
import { Toolbar, Link } from "@material-ui/core";
import { default as logo } from "../images/OptimalPandaWordPress_PandaWordLogo.svg";
import { default as facebook_icon } from "../images/facebook-icon.png";
import { default as instagram_icon } from "../images/instagram-icon.png";
import {default as menuIcon} from '../images/menu.png';
import useWindowDimensions from "./useWindowDimensions";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Quote from "./quote-component";

function NavBar ({ quoteHandler }) {
  const { height, width } = useWindowDimensions();

  return (width > 396) ? ( // basically the size of mobile
    <div className={"navbar-wrapper"}>
      <div className='navbar-logo'>
        <a href="/"><img src={logo} alt="" /></a>         
      </div>
      <ul className={'links-list'}>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Our Services</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <ul className={'socials-list'}> 
        <a href="/">
          <img src={facebook_icon} alt="" />   
        </a>
        <a href="/">
          <img src={instagram_icon} alt="" />   
        </a>
      </ul>

      <div className='quote-btn'>
        {/* <a href="/contact"> */}
          <button onClick={quoteHandler}>GET A QUOTE</button>
        {/* </a> */}
      </div>      
      {/* <Quote handler={quoteHandler} isNavbar={true} /> */}

      
    </div>
  ) : (
    <div className="navbar-mobile-wrapper">
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <NavLink className="navbar-brand navbar-logo" to="/" style={{ height: 'auto' }}>
          <img id='logo' src={logo} alt="" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"          
        >
          <img src={menuIcon} alt="" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">          
          <ul className="navbar-nav ms-auto">
                        
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>

            <li className='nav-item active'>
              <NavLink className='nav-link' to='/services'>
                Our Services
              </NavLink>
            </li>            
            
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </li>            
           
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/contact'>
                Contact Us
              </NavLink>
            </li>            

          </ul>
        </div>

      </nav>
    </div>
  );
}

export default NavBar;
