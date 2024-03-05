import React from 'react'
import { Link } from "react-router-dom"
import PathConstants from "../../routes/pathConstants";
import "./Footer.css"
import twitter from "../../assets/Twitter.png"
import facebook from "../../assets/Facebook.png"
import instagram from "../../assets/Instagram.png"
import telegram from "../../assets/Telegram.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <div className="footer-div-top">
          <nav className="footer-div-navbar">
            <ul className="footer-div-navbar-list-social">
              <li className="footer-div-navbar-list-item">
                <Link to={PathConstants.HOME}><img src={twitter} alt="twitter" /></Link>
              </li>
              <li className="footer-div-navbar-list-item">
                <Link to={PathConstants.INFO}><img src={facebook} alt="facebook" /></Link>
              </li>
              <li className="footer-div-navbar-list-item">
                <Link to={PathConstants.SHOP}><img src={instagram} alt="instagram" /></Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-div-navbar">
            <h4 className="footer-div-navbar-title">Pages</h4>
            <ul className="footer-div-navbar-list">
              <li className="footer-div-navbar-list-item">
                < Link className="footer-div-navbar-list-item-text" to={PathConstants.HOME}>Home</Link>
              </li>
              <li className="footer-div-navbar-list-item">
                <Link className="footer-div-navbar-list-item-text" to={PathConstants.INFO}>Info</Link>
              </li>
              <li className="footer-div-navbar-list-item">
                <Link className="footer-div-navbar-list-item-text" to={PathConstants.SHOP}>Shop</Link>
              </li>
              <li className="footer-div-navbar-list-item">
                <Link className="footer-div-navbar-list-item-text" to={PathConstants.TOS}>TOS</Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-div-navbar">
          <h4 className="footer-div-navbar-title">Platform</h4>
            
            <ul className="footer-div-navbar-list">
              <li className="footer-div-navbar-list-item">
                <Link className="footer-div-navbar-list-item-text" to={PathConstants.ANDROID}>Android</Link>
              </li>
              <li className="footer-div-navbar-list-item">
                <Link className="footer-div-navbar-list-item-text" to={PathConstants.IOS}>IOS</Link>
              </li>
              <li className="footer-div-navbar-list-item">
                <Link className="footer-div-navbar-list-item-text" to={PathConstants.WINDOWS}>Windows</Link>
              </li>
              <li className="footer-div-navbar-list-item">
                <Link className="footer-div-navbar-list-item-text" to={PathConstants.MACOS}>Mac OS</Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-div-navbar">
          <h4 className="footer-div-navbar-title">Support</h4>
            
            <ul className="footer-div-navbar-list">
              <li className="footer-div-navbar-list-item">
                <Link className="footer-div-navbar-list-item-text" to={PathConstants.REQUEST}>Support request</Link>
              </li>
              <li className="footer-div-navbar-list-item">
                <Link className="footer-div-navbar-list-item-text" to={PathConstants.CONTACT}>Contact Us</Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-div-navbar">
          <h4 className="footer-div-navbar-title">Subscribe</h4>
            
            <ul className="footer-div-navbar-list">
              <li className="footer-div-navbar-list-item">
                <Link className="footer-div-navbar-list-item-email" to={PathConstants.HOME}>Enter your email <img src={telegram} alt="telegram" /></Link>
              </li>
              <li className="footer-div-navbar-list-join">
                Join our newsletter to stay up to date on features and releases
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-div-bottom">
          <h1 className="footer-div-bottom-logo">
            <Link className="footer-div-navbar-list-item-text" to={PathConstants.HOME}></Link>
          </h1>
          <button className="footer-button">
            GET NOW
          </button>
        </div>
      </div>
    </footer >
  )
}

export default Footer