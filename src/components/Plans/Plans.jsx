import React, {useState} from 'react'
import Switch from 'react-js-switch';
import "./Plans.css"

const Plans = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <div className="plans">
      <div className="plan-text">
        <h2 className="plan-text-offer">
        We offer <span className="black">three plans</span> to suit your needs and budget
        </h2>
        <h3 className="plan-text-switch">
        You can switch or cancel your plan at any time
        </h3>
      </div>
      <div className="plans-toggle">
        <h4 className="plans-toggle-text">YEARLY BILLING</h4>
      <Switch value={isSwitchOn} onChange={switch_onChange_handle} backgroundColor="#FFFFFF"/>
      <h4 className="plans-toggle-text">MONTHLY BILLING</h4>
      </div>
      <div className="plans-cards">
        <div className="plan-cards-side">
          <h3 className="plan-cards-name">FREE</h3>
          <h3 className="plan-cards-side-price"><span className="price">$</span> 0.00</h3>
          <div className="plan-cards-options">
          <h6 className="plan-cards-benefits">Basic weather info for your location</h6>
          <h6 className="plan-cards-benefits">Share with one partner</h6>
          <h6 className="plan-cards-benefits">Daily and hourly forecasts</h6>
          <h6 className="plan-cards-benefits">Beautiful and intuitive interface</h6>
          </div>
          <button className="plan-cards-side-button">SUBSCRIBE</button>
        </div>
        <div className="plan-cards-center">
        <h3 className="plan-cards-name">COUPLE</h3>
          <h3 className="plan-cards-center-price"><span className="price">$</span> 2.49</h3>
          <div className="plan-cards-options">
          <h6 className="plan-cards-benefits">Advanced weather info for any location</h6>
          <h6 className="plan-cards-benefits">Share with up to five partners</h6>
          <h6 className="plan-cards-benefits">Weekly and monthly forecasts</h6>
          <h6 className="plan-cards-benefits">Customizable themes and widgets</h6>
          <h6 className="plan-cards-benefits">Weather groups, stickers, emojis, and gifs</h6>
          <h6 className="plan-cards-benefits">Exclusive blog and podcast</h6>
          </div>
          <button className="plan-cards-center-button">SUBSCRIBE</button>
        </div>
        <div className="plan-cards-side">
        <h3 className="plan-cards-name">PRO</h3>
          <h3 className="plan-cards-side-price"><span className="price">$</span> 4.99</h3>
          <div className="plan-cards-options">
          <h6 className="plan-cards-benefits">Exclusive weather info from our cloud technology</h6>
          <h6 className="plan-cards-benefits">Share with unlimited partners</h6>
          <h6 className="plan-cards-benefits">Personalized forecasts based on your preferences and activities</h6>
          <h6 className="plan-cards-benefits">Weather trends, alerts, and recommendations</h6>
          <h6 className="plan-cards-benefits">Special features and rewards</h6>
          </div>
          <button className="plan-cards-side-button">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default Plans