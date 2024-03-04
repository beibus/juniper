import React from 'react'
import "./Features.css"

const Features = (icon, alticon, title, content, key) => {

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
    <div className="feature-card" key={key}>
      <div className="feature-card-title">
        <image className="feature-card-title-icon" src={icon} alt={alticon}   />
        <h3 className="feature-card-title-text">{title}</h3>
      </div>
      <div className="feature-card-content">
        <h4 className="feature-card-content-text">{content}</h4>
      </div>
    </div>
  )
}


export default Features