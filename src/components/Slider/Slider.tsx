import React from "react";
import Slider from "react-slick";
import solaGirl from "../../assets/solaGirl.png";
import "./styles.css";
const SolaSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div>
          <img src={solaGirl} />
        </div>
        <div>
          <img src={solaGirl} />
        </div>
        <div>
          <img src={solaGirl} />
        </div>
        <div>
          <img src={solaGirl} />
        </div>
      </Slider>
    </div>
  );
};

export default SolaSlider;
