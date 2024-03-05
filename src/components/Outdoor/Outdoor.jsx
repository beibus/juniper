import React from 'react'
import rainy from "../../assets/rainy.png"
import "./Outdoor.css"
import compass from "../../assets/explore.png"
import gallery from "../../assets/gallery.png"
import heart from "../../assets/heart.png"
import checkmark from "../../assets/checkmark.png"


const Outdoor = () => {

  

  return (
    <div className="outdoor">
      <div className="outdoor-features">
        <div className="feature-card">
          <div className="feature-card-title">
            <img className="feature-card-title-icon" src={compass} />
            <h3 className="feature-card-title-text">Personalized</h3>
          </div>
          <div className="feature-card-content">
            <h5 className="feature-card-content-text">A personalized weather report that shows the best time and place for couples to enjoy outdoor activities based on their preferences and location.</h5>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-card-title">
            <img className="feature-card-title-icon" src={gallery} />
            <h3 className="feature-card-title-text">Gallery</h3>
          </div>
          <div className="feature-card-content">
            <h5 className="feature-card-content-text">A cloud gallery that allows users to upload and share their photos and videos of the sky and the weather with other users and get feedback and tips.</h5>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-card-title">
            <img className="feature-card-title-icon" src={heart} />
            <h3 className="feature-card-title-text">Mood Tracker</h3>
          </div>
          <div className="feature-card-content">
            <h5 className="feature-card-content-text">A mood tracker that analyzes the user’s mood based on the weather and suggests activities, music, or quotes to cheer them up or calm them down.</h5>
          </div>
        </div>
      </div>
      <div className="outdoor-activities">
        <div className="outdoor-activities-image">
          <img src={rainy} alt="" />
        </div>
        <div className="outdoor-activities-text">
          <h2>Plan Your Outdoor Activities with Ease</h2>
          <h3 className="outdoor-activities-text-secondary">Get notified before rain stops. Plan your outdoor activities</h3>
          <h4 className="outdoor-activities-text-points"><img className="outdoor-activities-text-points-icon" src={checkmark} alt="" /> Share your weather stories and photos.</h4>
          <h4 className="outdoor-activities-text-points"><img className="outdoor-activities-text-points-icon" src={checkmark} alt="" /> Custom weather alerts and notifications.</h4>
          <h4 className="outdoor-activities-text-points"><img className="outdoor-activities-text-points-icon" src={checkmark} alt="" /> Smart weather integrations for your home.</h4>
        </div>
      </div>
    </div>
  )
}

export default Outdoor