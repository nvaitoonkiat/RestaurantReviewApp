import React from "react";
import Swiper from "react-id-swiper";
import "../css/swiper.css";

class Example extends React.Component {
  render() {
    const params = {
      spaceBetween: 30,
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3300,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {}
    };

    return (
      <Swiper {...params} styleName="slider">
        <div className="slide1">Fishcheeks</div>
        <div className="slide2">Azabu</div>
        <div className="slide3">LadyBird</div>
        <div className="slide4">Hangawi</div>
      </Swiper>
    );
  }
}

export default Example;
