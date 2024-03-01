import React from 'react'
import Features from "../Features/Features"
import rainy from "../../assets/rainy.png"
import "./Outdoor.css"


const Outdoor = () => {

  const features_data = [
    {
      id: 1,
      icon: "../../assets/images/explore.png",
      alticon: "../../assets/images/explore.png",
      title: "Personalized",
      content: "A personalized weather report that shows the best time and place for couples to enjoy outdoor activities based on their preferences and location."
    },
    {
      id: 2,
      icon: "../../assets/images/gallery.png",
      alticon: "../../assets/images/gallery.png",
      title: "Gallery",
      content: "A cloud gallery that allows users to upload and share their photos and videos of the sky and the weather with other users and get feedback and tips."
    },
    {
      id: 3,
      icon: "../../assets/images/heart.png",
      alticon: "../../assets/images/heart.png",
      title: "Mood Tracker",
      content: "A mood tracker that analyzes the user’s mood based on the weather and suggests activities, music, or quotes to cheer them up or calm them down."
    }
  ]
  console.log(features_data)

  return (
    <div className="outdoor">
      <div className="outdoor-features">
        {features_data.map(function (icon, alticon, title, content, id) {
          return (
            <Features icon={icon} alticon={alticon} title={title} content={content} key={id} />
          )
        })}
      </div>
      <div className="outdoor-activities">
        <div className="outdoor-activities-image">
<img src={rainy} alt="" />
        </div>
        <div className="outdoor-activities-text">
          <h2>Plan Your Outdoor Activities with Ease</h2>
          <h3>Get notified before rain stops. Plan your outdoor activities</h3>
          <h4>Share your weather stories and photos.</h4>
          <h4>Custom weather alerts and notifications.</h4>
          <h4>Smart weather integrations for your home.</h4>
        </div>
      </div>
    </div>
  )
}

export default Outdoor