import React from 'react'
import "./Atmos.css"
import laptop from "../../assets/atmos.png"

const Atmos = () => {
  return (
    <div className="atmos">
      <div className="atmos-image">
        <img src={laptop} alt="laptop" />

      </div>
      <div className="atmos-content">
        <h1 className="atmos-content-heading">Atmos</h1>
        <h3 className="atmos-content-text">
        A weather app that lets you explore the atmosphere and learn more about the weather phenomena
        </h3>
        <div className="atmos-content-buttons">
          <button className="atmos-content-button-buy">BUY NOW</button>
          <button className="atmos-content-button-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Atmos