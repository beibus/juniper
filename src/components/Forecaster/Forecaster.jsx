import React from 'react'
import "./Forecaster.css"
import phones from "../../assets/mockups.png"

const Forecaster = () => {
  return (
    <div className="forecaster">
      <div className="forecaster-text">
        <h1>Your Live Forecaster</h1>
        <h3>Together We Forecast: Building Dreams, One Day at a Time!</h3>
        <h4>1million People like you have purchased this product!</h4>
        <div className="forecaster-text-buttons">
          <button>Try now</button>
          <div>FREE TILL 15JUN2023</div>
        </div>
      </div>
      <div className="forecaster-image">
        <img src={phones} alt={[phones]}/>
      </div>
    
    </div>
  )
}

export default Forecaster