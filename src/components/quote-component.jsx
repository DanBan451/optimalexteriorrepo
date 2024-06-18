import React from "react";
import "../styles/quote.css";

export default function QuoteComponent({ isContactPage=false, handler }) {
  return (
    <div className="quote">      
      {!isContactPage ? (
        <h1>        
          Call or Text us Now For{" "}
          <a href="/contact">
            <span>Fast Quotes</span>
          </a>
          !
        </h1> 
      ) : (
        <h1>        
          Call or Text us Now For a{" "}
          {/* <a href="/contact"> */}
            <span>Fast Quote</span>
          {/* </a> */}
          !
        </h1> 
      )} 


      <div className="quote-links">        
        <button className='link-btn'>(832) 903-4195</button>
        {!isContactPage ? (
          // <a href="/">
            <button className="quote-btn" onClick={handler}>GET A QUOTE!</button>
          // </a>
        ) : null}
      </div>

    </div>
  );
}
