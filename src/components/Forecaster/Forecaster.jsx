import React from 'react'
import "./Forecaster.css"
import phones from "../../assets/mockups.png"

const Forecaster = () => {
  return (
    <div className="forecaster">
      <div className="forecaster-text">
        <h1>Your Live Forecaster</h1>
        <h4><p>Together We Forecast: Building Dreams,</p> One Day at a Time!</h4>
        <h5>1 million People like you have purchased this product!</h5>
        <div className="forecaster-text-buttons">
          <button className="forecaster-text-buttons-try">TRY NOW</button>
          <button className="forecaster-text-buttons-free">FREE TILL 15JUN2023</button>
        </div>
      </div>
      <div className="forecaster-image">
        <img className="forecaster-image-wrapper" src={phones} alt={[phones]}/>
      </div>
    
    </div>
  )
}

export default Forecaster