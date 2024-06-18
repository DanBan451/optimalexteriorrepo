import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Quote from "../components/quote-component";
import QuoteView from "../components/QuoteView";
import { useState } from "react";

import windowImage from "../images/service-window.jpg";
import windowIcon from "../images/ResidentialIcon.svg";

import roofImage from "../images/service-roof.jpg";
import roofIcon from "../images/RoofIcon-1.svg";

import gutterImage from "../images/service-gutter.png";
import gutterIcon from "../images/GuttersIcon.svg";

import pressureImage from "../images/service-pressure.jpg";
import pressureIcon from "../images/PressureWashIcon.svg";
import lightingImage from "../images/service-lighting.jpg";
import lightingIcon from "../images/CommercialIcon.svg";

import "../styles/services.css";

export default function Services() {
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
      <div id='services-page' className="services-page">
        <div className="cover-header-text">
          <h1>Our Services</h1>
        </div>
        <div className="cover-header-side">
          <div>
            <div>
              <h1>What we do</h1>
                <div>
                Optimal Exterior provides many different cleaning services
                including window cleaning, gutter cleaning, roof cleaning, and
                pressure washing services for homeowners. We offer holiday
                lighting as well!
                </div>
            </div>
          </div>
        </div>
        <ul className="service-list">
          <div className="service-wrapper">
            <div className="service-content-wrapper">
              <div className="service-content">
                <div className="content-title">
                  <img src={windowIcon} alt="" />
                  <div>
                    <h1>Residential Window Cleaning</h1>
                  </div>
                </div>
                <div className="content-content">
                  <img src={windowImage} alt="" />                  
                  <br />
                  <h5>Relax and let us do the work.</h5>
                  <p>
                    Forget about DIY solutions you read about online most of
                    them are ineffective, expensive and possibly damaging to the
                    structural integrity of the glass' panes. Let the
                    professionals at Optimal Exterior take care of this task for
                    you while you focus on what really matters to you and your
                    family. We provide residential windovw cleaning in Cypress,
                    Katy, The Woodlands, Houston, and surrounding cities so that
                    you can forget about this stress altogethe. We use
                    sophisticated tools and advanced techniques to ensure that
                    your windows will remain clean for a long time. Moreover, we
                    are fully insured so you can rest assured that your house is
                    in good hands with our experts.
                  </p>
                  <h5>Pure water cleaning system.</h5>
                  <p>
                    At Optimal Exterior, we use only the safest and most
                    efficient cleaning techniques to get the best results.
                    Unlike traditional window cleaning systems, pure water will
                    remove dirt and grime without leaving any residue. Moreover,
                    your windows will remain spotless for a long period.
                  </p>
                  <h5>Comprehensive window cleaning services.</h5>
                  <p>
                    We know that there's more to a window than the glass panes.
                    Therefore, we'll not only ensure that your windows are
                    bright like a diamond, but we'll also clean the grids,
                    sills, and screens. We'll also help you get rid of moss and
                    mildew for good. Oh, and you can stopp worrying about those
                    tricky areas that you never manage to clean properly-we'll
                    make sure those are spotless too.
                  </p>
                </div>
              </div>
            </div>
            <div className="service-image">
              <img src={windowImage} alt="" />
            </div>
          </div>
          <div className="service-wrapper">
            <div className="service-content-wrapper">
              <div className="service-content">
                <div className="content-title">
                  <img src={roofIcon} alt="" />
                  <div>
                    <h1>Roof Cleaning</h1>
                  </div>
                </div>
                <div className="content-content">
                  <img src={roofImage} alt="" />
                  <br />
                  <h5>Soft wash method</h5>
                  <p>
                    Clean your roof today with a safe, soft wash method that
                    will leave your shingles uniformed and cleansed of dirt and
                    mold. Don't neglect the black streaks on your roof. Protect
                    the integrity and longevity of your roof with our soft wash
                    method.
                  </p>
                  <p>
                    We clean roofs all over Cypress, Houston, The Woodlands,
                    Katy, and all surrounding areas.
                  </p>
                  <p>
                    Give our team a call today and we'll have your roof looking
                    as good as the photo reveals right here!
                  </p>
                </div>
              </div>
            </div>
            <div className="service-image">
              <img src={roofImage} alt="" />
            </div>
          </div>
          <div className="service-wrapper">
            <div className="service-content-wrapper">
              <div className="service-content">
                <div className="content-title">
                  <img src={gutterIcon} alt="" />
                  <div>
                    <h1>Gutter Cleaning</h1>
                  </div>
                </div>
                <div className="content-content">
                  <img src={gutterImage} alt="" />
                  <br />
                  <h5>Prevent clogged downspouts from damaging your homne.</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    donec consectetur semper nunc in molestie.
                  </p>
                  <p>
                    Sed velit lectus, porttitor eu convallis sit amet, semper
                    eget mauris. Integer in pulvinar mauris. Donec facilisis
                    placerat magna sed cursus. Mauris vel tristique arcu. Duis
                    congue orci id libero dictum sollicitudin. Curabitur dapibus
                    arcu leo, condimentum tempus augue condimentum sed. Aliquam
                    sed auctor ex. Nunc quis neque non eros dictum scelerisque
                    ut ac urna. Etiam vel felis molestie, malesuada neque
                    tempus, bibendum mauris. Nullam sit amet rhoncus nisl.
                    Quisque non vehicula dui. Vestibulum neque tortor,
                  </p>
                </div>
              </div>
            </div>
            <div className="service-image">
              <img src={gutterImage} alt="" />
            </div>
          </div>
          <div className="service-wrapper">
            <div className="service-content-wrapper">
              <div className="service-content">
                <div className="content-title">
                  <img src={pressureIcon} alt="" />
                  <div>
                    <h1>Pressure Washing</h1>
                  </div>
                </div>
                <div className="content-content">
                  <img src={pressureImage} alt="" />
                  <br />
                  <h5>Pressure wash services.</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    donec consectetur semper nunc in molestie.
                  </p>
                  <p>
                    Sed velit lectus, porttitor eu convallis sit amet, semper
                    eget mauris. Integer in pulvinar mauris. Donec facilisis
                    placerat magna sed cursus. Mauris vel tristique arcu. Duis
                    congue orci id libero dictum sollicitudin. Curabitur dapibus
                    arcu leo, condimentum tempus augue condimentum sed. Aliquam
                    sed auctor ex. Nunc quis neque non eros dictum scelerisque
                    ut ac urna. Etiam vel felis molestie, malesuada neque
                    tempus, bibendum mauris. Nullam sit amet rhoncus nisl.
                    Quisque non vehicula dui. Vestibulum neque tortor,
                  </p>
                </div>
              </div>
            </div>
            <div className="service-image">
              <img src={pressureImage} alt="" />
            </div>
          </div>
          <div className="service-wrapper">
            <div className="service-content-wrapper">
              <div className="service-content">
                <div className="content-title">
                  <img src={lightingIcon} alt="" />
                  <div>
                    <h1>Holiday Lighting</h1>
                  </div>
                </div>
                <div className="content-content">
                  <img src={lightingImage} alt="" />
                  <br />
                  <h5>Get untangled from the mess of holiday lights.</h5>
                  <p>
                    We will make your holiday light installation simply amazing
                    and amazingly simple. No more weeks of planning. No more
                    'one light goes out and they all go out. No more afternoons
                    spent on a ladder. We decorate rooflines, fascia, trees,
                    shrubs, ground lights, columns, and more!
                  </p>
                  <h5>How does it work?</h5>
                  <p>
                    First, we meet with you to discuss your goals, budget, and
                    design ideas. Whether you like classic and simple or want
                    cars lining up down the street, we can do it (as long as the
                    job size is a minimum of $350.00 in value). You then lease
                    our premium, efficient lights that perfectly match your
                    vision. We will provide the timers and extension cords, too!
                    Our expert team will then install your display. We use
                    plastic clips that are gentle on your home (no staples,
                    unless you request them). Havea question or technical
                    difficulty? We offer maintenance and support ALL season
                    long. When you're done with the lights, we will take them
                    down and store them for you until next year.
                  </p>
                  <p>
                    Ready to reinstall? We'll come back and do it all again!
                    There are also no contracts to sign or commit to - we can
                    take it year by year, even changing the display if you'd
                    like.
                  </p>
                </div>
              </div>
            </div>
            <div className="service-image">
              <img src={lightingImage} alt="" />
            </div>
          </div>
        </ul>        
        <Quote handler={handleQuoteOpen}/>                  
      </div>
      <Footer quoteHandler={handleQuoteOpen}/>
    </React.Fragment>
  );
}
