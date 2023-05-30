import React, { Component } from "react";
import Slider from "react-slick";
import "./MySlider.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
    return (
            <div className="myslider">

            <div className="head">
            <div className="topmid">FEATURED PROPERTIES</div>
           <div className="topbottom">See our best offers</div>
            </div>
      <div className="slider2">
        <Slider {...settings}>
          <div className="forslider">
            <img src="https://preview.colorlib.com/theme/theestate/images/city_4.jpg" alt="" />
            <button className="sliderbtn">Marbella</button>
          </div>
          <div className="forslider">
            <img src="https://preview.colorlib.com/theme/theestate/images/city_4.jpg" alt="" />
            <button className="sliderbtn">Marbella</button>
          </div>
          <div className="forslider">
            <img src="https://preview.colorlib.com/theme/theestate/images/city_4.jpg" alt="" />
            <button className="sliderbtn">Marbella</button>
          </div>
          <div className="forslider">
            <img src="https://preview.colorlib.com/theme/theestate/images/city_4.jpg" alt="" />
            <button className="sliderbtn">Marbella</button>
          </div>
          <div className="forslider">
            <img src="https://preview.colorlib.com/theme/theestate/images/city_4.jpg" alt="" />
            <button className="sliderbtn">Marbella</button>
          </div>
          <div className="forslider">
            <img src="https://preview.colorlib.com/theme/theestate/images/city_4.jpg" alt="" />
            <button className="sliderbtn">Marbella</button>
          </div>
          <div className="forslider">
            <img src="https://preview.colorlib.com/theme/theestate/images/city_4.jpg" alt="" />
            <button className="sliderbtn">Marbella</button>
          </div>
        </Slider>
      </div>
            </div>
    );
  }
}