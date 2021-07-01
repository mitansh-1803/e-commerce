import React from 'react';

//carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//css
import "./banner.css";

//images
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";

const Banner = () => {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img style={{width:"100%"}} src={img1} alt="carousel-image" />
          </div>
          <div>
            <img style={{width:"100%"}} src={img2} alt="carousel-image" />
          </div>
          <div>
            <img style={{width:"100%"}} src={img3} alt="carousel-image" />
          </div>
          <div>
            <img style={{width:"100%"}} src={img4} alt="carousel-image" />
          </div>
        </Slider>
      </div>
    )
}
 
export default Banner;