import React from 'react'
import "./Features.css"

const Features = (icon, alticon, title, content, key) => {
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