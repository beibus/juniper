import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Reviews.css"



const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="reviews">
      <div className="reviews-container">
        <Slider {...settings}>
          <div className="reviews-container-slider">
            <div className="reviews-container-slider-card">
              <h5 className="reviews-container-slider-card-text">
              Juniper is a great app for checking the weather. It's easy to use and has a beautiful interface. I love how it shows me the cloud patterns and predicts the weather for the next few days. It's like having a personal meteorologist in my pocket.
              </h5>
              <div className="reviews-container-slider-card-person">
                <img src="" alt="" className="reviews-container-slider-card-person-avatar" />
                <h3 className="reviews-container-slider-card-person-name">Priyanka </h3>
              </div>
              <h6 className="reviews-container-slider-card-title">Happy customer</h6>
            </div>
          </div>
          <div className="reviews-container-slider">
            <div className="reviews-container-slider-card">222222</div>
          </div>
          <div className="reviews-container-slider">
            <div className="reviews-container-slider-card">333333</div>
          </div>
        </Slider>
      </div>
      <div className="reviews-container">
        <Slider {...settings}>
          <div className="reviews-container-slider">
            <div className="reviews-container-slider-card">4444444</div>
          </div>
          <div className="reviews-container-slider">
            <div className="reviews-container-slider-card">5555555</div>
          </div>
          <div className="reviews-container-slider">
            <div className="reviews-container-slider-card">6666666</div>
          </div>
        </Slider>
      </div>

    </div>
  )
}

export default Reviews