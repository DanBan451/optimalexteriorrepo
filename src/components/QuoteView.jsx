import React from "react";
import "../styles/quoteview.css";
import { default as facebook_icon } from "../images/face-icon-white.svg";
import { default as instagram_icon } from "../images/insta-icon-white.svg";
import { useState } from "react";
import emailjs from 'emailjs-com';

export default function QuoteView({ showQuote, handler }) {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_e7yf5qk', 'template_ep45elr', e.target, '9l16KYABsgoVopG9i').then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));    
    document.getElementById("contact-page-form").reset();
    handler();
  }
  return (
    <div
      className={`quote-view ${
        showQuote ? "quote-view-visible" : "quote-view-hidden"
      }`}
    >
      <div className="quote-view-inner">
        <button className="exit-btn" onClick={() => handler()}>
          X
        </button>
        <div className="content">
          <div className="content-inner">
            <div>
              <h3>Get A Quote</h3>
              <div>
                Fill out the form and our team will get back to you shortly.
              </div>
            </div>
            <div>
              <h3>
                Call or Text us Now For a <span>Fast Quote</span>!
              </h3>
              <h5>(832) 903-4195</h5>
            </div>
            <div className="social-links">
              <a href="">
                <img src={facebook_icon} alt="" />
              </a>
              <a href="">
                <img src={instagram_icon} alt="" />
              </a>
            </div>
          </div>
        </div>
        <form id='contact-page-form' className="form" onSubmit={sendEmail}>
          <div className="form-inner">
            <div className="grid">
              <label htmlFor="">Name</label>
              <input type="text" name="name" />
              <label htmlFor="">Email</label>
              <input type="text" name="email" />
              <label htmlFor="">Message</label>
              <textarea name="message" id="" cols="30" rows="10" />
            </div>
            <div className="submit">
              <a href="">
                <button>Submit</button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
