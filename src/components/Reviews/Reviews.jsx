import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Reviews.css"
import girl from "../../assets/female-user.png"
import boy from "../../assets/male-user.png"


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
                <h3 className="reviews-container-slider-card-person-name"><img classname="reviews-container-slider-card-person-name-icon" src={girl} alt="female-user" /> Priyanka </h3>
              </div>
              <h6 className="reviews-container-slider-card-title">Happy customer</h6>
            </div>
          </div>
          <div className="reviews-container-slider">
            <div className="reviews-container-slider-card">
              <h5 className="reviews-container-slider-card-text">
                Juniper is a great app for checking the weather. It's easy to use and has a beautiful interface. I love how it shows me the cloud patterns and predicts the weather for the next few days. It's like having a personal meteorologist in my pocket.
              </h5>
              <div className="reviews-container-slider-card-person">
                <img src="" alt="" className="reviews-container-slider-card-person-avatar" />
                <h3 className="reviews-container-slider-card-person-name"><img classname="reviews-container-slider-card-person-name-icon" src={girl} alt="female-user" /> Anna </h3>
              </div>
              <h6 className="reviews-container-slider-card-title">Happy customer</h6>
            </div>
          </div>
          <div className="reviews-container-slider">
            <div className="reviews-container-slider-card">
              <h5 className="reviews-container-slider-card-text">
                Juniper is a great app for checking the weather. It's easy to use and has a beautiful interface. I love how it shows me the cloud patterns and predicts the weather for the next few days. It's like having a personal meteorologist in my pocket.
              </h5>
              <div className="reviews-container-slider-card-person">
                <img src="" alt="" className="reviews-container-slider-card-person-avatar" />
                <h3 className="reviews-container-slider-card-person-name"><img classname="reviews-container-slider-card-person-name-icon" src={girl} alt="female-user" /> Sabina </h3>
              </div>
              <h6 className="reviews-container-slider-card-title">Happy customer</h6>
            </div>
          </div>
        </Slider>
      </div>
      <div className="reviews-container">
        <Slider {...settings}>
          <div className="reviews-container-slider">
            <div className="reviews-container-slider-card">
              <h5 className="reviews-container-slider-card-text">
                I was sceptical about Juniper at first, but I'm glad I gave it a try. it's a whole new way of looking at the sky. It uses cloud technology to give me accurate and reliable forecasts, and it also has some fun features like cloud art and trivia. It's a must-have app for anyone who loves nature.
              </h5>
              <div className="reviews-container-slider-card-person">
                <img src="" alt="" className="reviews-container-slider-card-person-avatar" />
                <h3 className="reviews-container-slider-card-person-name"><img classname="reviews-container-slider-card-person-name-icon" src={boy} alt="female-user" /> Jack </h3>
              </div>
              <h6 className="reviews-container-slider-card-title">Happy customer</h6>
            </div>
          </div>
          <div className="reviews-container-slider">
            <div className="reviews-container-slider-card">
              <h5 className="reviews-container-slider-card-text">
                Juniper is a great app for checking the weather. It's easy to use and has a beautiful interface. I love how it shows me the cloud patterns and predicts the weather for the next few days. It's like having a personal meteorologist in my pocket.
              </h5>
              <div className="reviews-container-slider-card-person">
                <img src="" alt="" className="reviews-container-slider-card-person-avatar" />
                <h3 className="reviews-container-slider-card-person-name"><img classname="reviews-container-slider-card-person-name-icon" src={boy} alt="female-user" /> John </h3>
              </div>
              <h6 className="reviews-container-slider-card-title">Happy customer</h6>
            </div>
          </div>
          <div className="reviews-container-slider">
            <div className="reviews-container-slider-card">
              <h5 className="reviews-container-slider-card-text">
                Juniper is a great app for checking the weather. It's easy to use and has a beautiful interface. I love how it shows me the cloud patterns and predicts the weather for the next few days. It's like having a personal meteorologist in my pocket.
              </h5>
              <div className="reviews-container-slider-card-person">
                <img src="" alt="" className="reviews-container-slider-card-person-avatar" />
                <h3 className="reviews-container-slider-card-person-name"><img classname="reviews-container-slider-card-person-name-icon" src={boy} alt="female-user" /> Carlos </h3>
              </div>
              <h6 className="reviews-container-slider-card-title">Happy customer</h6>
            </div>
          </div>
        </Slider>
      </div>

    </div>
  )
}

export default Reviews