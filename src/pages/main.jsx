import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Quote from "../components/quote-component";
import QuoteView from "../components/QuoteView";
import Reviews from "../components/reviews";
import { useState } from "react";

import { default as coverImage } from "../images/how-to-pressure-wash-house-goggles.jpg";
import { default as commercialIcon } from "../images/CommercialIcon.svg";
import { default as guttersIcon } from "../images/GuttersIcon.svg";
import { default as pressureWashIcon } from "../images/PressureWashIcon.svg";
import { default as windowIcon } from "../images/ResidentialIcon.svg";
import { default as roofIcon } from "../images/roof-icon.png";
import { default as starIcon } from "../images/starIcon.png";
import { default as clockIcon } from "../images/clockIcon.png";
import { default as caseIcon } from "../images/caseIcon.png";

import "../styles/header.css";
import "../App.css";

export default function Main () {  
  const [showQuote, setShowQuote] = useState(false);
  const handleQuoteOpen = () => {    
    console.log('quote open');
    setShowQuote(true);
  }
  const handleQuoteExit = () => {    
    console.log('quote close');    
    setShowQuote(false);
  }
    
  return (
    <div id="home-page">
      <QuoteView showQuote={showQuote} handler={handleQuoteExit}/>   

      <NavBar quoteHandler={handleQuoteOpen}/>

      <div className="cover">          
        {/* <h1 className='cover-header-text'>Optimal Exterior</h1>           */}
        <div className="cover-content-wrapper">
          <div className="cover-content-inner">
            <div className="cover-content">
              <h1 className="cover-title">
                The best exterior cleaning service in <span>Houston, TX</span>
              </h1>
              <Quote handler={handleQuoteOpen} />                
            </div>
          </div>

          <div>
            <img src={coverImage} alt="" />
          </div>

        </div>
      </div>

      <div className="services">
        <h1>Our Services</h1>
        <p>
          Superior services are the basis of our company. We've built a
          lasting relationship with our customers by delivering premium
          services since day one. With Optimal Exterior, you can rest assured
          that your home is in good hands.
        </p>

        <div className="services-flex">
          <a href="" className="service">
            <img src={windowIcon} alt="" />
            <h3>Reidential Window Cleaning</h3>
          </a>
          <a href="" className="service">
            <img src={roofIcon} alt="" />
            <h3>Roof Cleaning</h3>
          </a>
          <a href="" className="service">
            <img src={pressureWashIcon} alt="" />
            <h3>Pressure Washing</h3>
          </a>
          <a href="" className="service">
            <img src={guttersIcon} alt="" />
            <h3>Gutter Cleaning</h3>
          </a>
          <a href="" className="service">
            <img src={commercialIcon} alt="" />
            <h3>Holiday Lighting</h3>
          </a>
        </div>
      </div>

      <div className="perks">
        <div className="perks-content-wrapper">
          <div className='perks-arrow' />
          <div className="perks-content">
            <div className="perks-content-title">
              <h1>
                Why You Should Choose <span>#OptimalExterior</span>
              </h1>
            </div>
            <div className="perks-content-list-wrapper">
              <ul className="perks-content-list">
                <li className="perk">
                  <img src={starIcon} alt="" />
                  <div>
                    <h1>Personalized Services</h1>                      
                      We dont believe in one-size-fits-all solutions. Rather,
                      we consider that each job is different and we customize
                      our services to meet the unique requirements of each
                      property. We make sure that we understand what you need
                      and create a tailored maintenance plan before starting
                      any work.                      
                  </div>
                </li>
                <li className="perk">
                  <img src={clockIcon} alt="" />
                  <div>
                    <h1>{"Timely & Reliable"}</h1>                      
                      We dont believe in one-size-fits-all solutions. Rather,
                      we consider that each job is different and we customize
                      our services to meet the unique requirements of each
                      property. We make sure that we understand what you need
                      and create a tailored maintenance plan before starting
                      any work.                      
                  </div>
                </li>
                <li className="perk">
                  <img src={caseIcon} alt="" />
                  <div>
                    <h1>{"Fully Insured"}</h1>                      
                      We dont believe in one-size-fits-all solutions. Rather,
                      we consider that each job is different and we customize
                      our services to meet the unique requirements of each
                      property. We make sure that we understand what you need
                      and create a tailored maintenance plan before starting
                      any work.
                  </div>
                </li>
              </ul>
            </div>
          </div>            
        </div>
        <div className="perks-image">
          <div></div>
        </div>
      </div>

      <Reviews />
      <Footer quoteHandler={handleQuoteOpen} />
    </div>
  );

} 
