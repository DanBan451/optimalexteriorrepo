import React, { Component } from "react";
import $ from "jquery";
import reviews from "../reviews.json";
import uniqid from "uniqid";
import "../App.css";

import { default as perksImage } from "../images/window washing 2.jpg";
import { default as perksArrow } from "../images/unnamed.png";
import { default as circle } from "../images/circle.png";
import { default as activeCircle } from "../images/active-circle.png";

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReviewSections: 0,
      paginationClicksPosition: 1, // logically should be 0
      paginationPosition: 0,
      windowWidth: 0
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
    this.onWindowResize();
  }
  onWindowResize = () => {
    // console.log(window.innerWidth);
    this.setState({ windowWidth: window.innerWidth })
  }
  calcScrollDistance(containerWidth, direction) {
    if (direction) {
      var distance = containerWidth * this.state.paginationClicksPosition;
    } else {
      var distance =
        containerWidth * (this.state.paginationClicksPosition - 1) -
        containerWidth;
    }

    console.log(distance);

    return distance;    
  }
  animateScrollRight = () => {
    // console.log('right');
    $(".arrow-right").removeClass("active");

    var left = document.querySelector(".reviews-section .scroll .grid");
    var containerWidth = left.offsetWidth;
    // var scrollDistance = containerWidth * this.state.paginationClicksPosition;
    var scrollDistance = this.calcScrollDistance(containerWidth, 1);

    $(".reviews-section .scroll .grid").animate(
      {
        scrollLeft: scrollDistance,
      },
      1000,
      () => {
        $(".arrow-right").addClass("active");
        const paginationClicksPosition =
          this.state.paginationClicksPosition < 4
            ? this.state.paginationClicksPosition + 1
            : this.state.paginationClicksPosition;
        this.setState({ paginationClicksPosition });
      }
    );
  };
  animateScrollLeft = () => {
    // console.log('left');

    $(".arrow-left").removeClass("active");

    var left = document.querySelector(".reviews-section .scroll .grid");
    var containerWidth = left.offsetWidth;
    // var scrollDistance = containerWidth * this.state.paginationClicksPosition;
    var scrollDistance = this.calcScrollDistance(containerWidth, 0);

    $(".reviews-section .scroll .grid").animate(
      {
        scrollLeft: scrollDistance,
      },
      1000,
      () => {
        $(".arrow-left").addClass("active");
        const paginationClicksPosition =
          this.state.paginationClicksPosition > 1
            ? this.state.paginationClicksPosition - 1
            : this.state.paginationClicksPosition;
        this.setState({
          paginationClicksPosition,
        });
      }
    );
    // console.log(this.state.paginationClicksPosition);
  };

  animateScroll = (target) => {
    const direction = target.id;
    if (direction == "arrow-right") {
      this.animateScrollRight();
    } else {
      this.animateScrollLeft();
    }
  };
  onArrowClick = ({ target }) => {
    if (target.classList.contains("active")) {
      this.animateScroll(target);
    }
  };
  renderCardInformation = (index) => {
    return (
      <div className='card'>
        <img src={require('../images/5-stars.png')} alt=""/>
        {/* <span>{reviews.at(index).description}</span>   
        <span>{reviews.at(index).customer}</span>      */}
      </div>
    );
  }
  renderCards = () => {
    let containerAmount = reviews.length / 3;
    let containers = [...Array(containerAmount).keys()];
  
    let count = -1;

    return (
      <div className="grid">
        {containers.map((element) => (
          <div className="grid-item">
            {this.renderCardInformation(count++)}
            {this.renderCardInformation(count++)}
            {this.renderCardInformation(count++)}            
          </div>          
        ))}
      </div>
    );
  };

  render() {
    const reviewSections = [1, 2, 3, 4];

    return (
      <div className="reviews-section-wrapper">
        <div className="reviews-text">
          <h1>―Testimonials―</h1>
          <h1>Don't take our word for it. Read our reviews!</h1>
        </div>

        <div className="reviews-section">
          <div className="scroll">
            <Arrow
              icon="<"
              direction={"left"}
              onArrowClick={(e) => this.onArrowClick(e)}
            />

            {this.renderCards()}

            <Arrow
              icon=">"
              direction={"right"}
              onArrowClick={(e) => this.onArrowClick(e)}
            />
          </div>

          { 
            (this.state.windowWidth > 900 &&             
              <ul className="paginator">
                {reviewSections.map((reviewSection, index) => {
                  return (
                    <img
                      src={
                        reviewSection == this.state.paginationClicksPosition
                          ? activeCircle
                          : circle
                      }
                      key={uniqid()}
                    />
                  );
                })}
              </ul>
            )
          }
          
        </div>
      </div>
    );
  }
}

// function Card({ description, customer }) {
//   return (
//     <div className="scroll-item">
//       <div>
//         <img src={require("../images/5-stars.png")} />
//         <span>description</span>
//         <span>
//           <strong>customer name</strong>
//         </span>
//       </div>
//     </div>
//   );
// }

function Arrow({ icon, direction, onArrowClick }) {
  return (
    <button
      onClick={onArrowClick}
      id={"arrow-" + direction}
      className={`arrow arrow-${direction} active`}
    >
      {icon}
    </button>
  );
}
