import React from 'react'
import "./Products.css"
import iphone from "../../assets/Iphone1.png"
import ipad from "../../assets/Ipad.png"
import iphone2 from "../../assets/Iphone2.png"
import mac from "../../assets/Mac.png"

const Products = () => {
  return (
    <div className="products">
      <div className="products-images">
        <img src={iphone} alt="iphone" className="products-image" />
        <img src={ipad} alt="ipad" className="products-image" />
        <img src={iphone2} alt="iphone2" className="products-image" />
        <img src={mac} alt="mac" className="products-image" />
      </div>
      <button className="products-button">show all products</button>
    </div>
  )
}

export default Products