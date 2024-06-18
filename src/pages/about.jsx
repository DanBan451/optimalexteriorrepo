import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Quote from "../components/quote-component";
import QuoteView from "../components/QuoteView";
import { useState } from "react";

import brushImage from "../images/brushImage.jpg";
import mansionImage from "../images/mansionImage.jpg";

import "../styles/about.css";
import "../styles/header.css";

export default function About() {
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
    <React.Fragment>
      <QuoteView showQuote={showQuote} handler={handleQuoteExit}/>  
      <NavBar quoteHandler={handleQuoteOpen} />

      <div id='about-page' className="about-page">
        <div className="cover-header-text">
          <h1>About Us</h1>
        </div>
        <div className="cover-header-side">
          <div className='cover-side-content-wrapper'>

            <div className='cover-side-content'>                     
                <h1>Who we are</h1>
                <p>
                  Trace and Jessica Frankum are a husband and wife teamed up in
                  Cypress, TX. Under their leadership, Optimal Exterior has grown
                  beyond the boundaries of The Greater Houston Area. They started
                  this company at the beginning of 2020 (cduring the Covid-19
                  pandemic). Despite the tough task at hand, Optimal Exterior has
                  quickly established itself as a premium based service company.
                </p>
                <p>
                  Their mission is to establish trust and quality services
                  throughout The Greater Houston area and their goal is to be the
                  number one exterior cleaning service for your home. Proudly
                  serving Cypress, Katy, The Woodlands, Houston and surrounding
                  cities.
                </p>    
                <br />                                      
              <div>

              </div>
              <Quote handler={handleQuoteOpen}/>

            </div>
            <div className='cover-side-image'>
              <img src={mansionImage} alt="" />
            </div>

          </div>  
          <Quote handler={handleQuoteOpen}/>
           
        </div>
                      
      </div>
      <Footer quoteHandler={handleQuoteOpen} />
    </React.Fragment>
  );
}
