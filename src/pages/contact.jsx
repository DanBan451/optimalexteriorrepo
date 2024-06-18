import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Quote from "../components/quote-component";
import { useState } from "react";
import QuoteView from "../components/QuoteView";
import emailjs from 'emailjs-com';

import "../styles/contact.css";

export default function Contact() {
  const [showQuote, setShowQuote] = useState(false);
  const handleQuoteOpen = () => {    
    console.log('quote open');
    setShowQuote(true);
  }
  const handleQuoteExit = () => {    
    console.log('quote close');    
    setShowQuote(false);
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_e7yf5qk', 'template_ep45elr', e.target, '9l16KYABsgoVopG9i').then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
  }

  return (
    <React.Fragment>
      <QuoteView showQuote={showQuote} handler={handleQuoteExit}/>  
      <NavBar quoteHandler={handleQuoteOpen} />
      <div id="contact-page" className="contact-page">
        <div className="contact-container">
          <div className="cover-header-text">
            <h1>Contact Us</h1>
          </div>
          <h1>Contact Optimal Exterior Today!</h1>
          <span>
            Our dedicated team is here for you - always ready when you need us.
          </span>

          <div className="contact-content">
            
            
            <form className="contact-form" onSubmit={sendEmail}>
              <span>Please fill out the form below to get a quote:</span>
              <div>
                <input className='contact-name' type="text" placeholder="Name" name="name" />                
                <input type="text" placeholder="Email" name="email" />
                <h5 style={{margin: 'auto', fontWeight: 300}}>or</h5>
                <input type="text" placeholder="Phone Number" />
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Please tell us a brief description of the work you need done." 
                />
                <div className="submit-button">
                  <a href="">
                    <button>Submit</button>
                  </a>
                </div>
              </div>
            </form>
            
            <Quote isContactPage={true} />

          </div>
        </div>
      </div>
      <Footer quoteHandler={handleQuoteOpen}/>
    </React.Fragment>
  );
}
