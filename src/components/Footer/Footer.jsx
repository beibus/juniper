import React from 'react'
import { Link } from "react-router-dom"
import PathConstants from "../../routes/pathConstants";
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <div className="footer-div-top">
          <nav className="footer-div-navbar">
            <ul className="footer-div-navbar-list">
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.HOME}>Twitter</Link>
              </li>
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.INFO}>Facebook</Link>
              </li>
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.SHOP}>Instagram</Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-div-navbar">
            Pages
            <ul className="footer-div-navbar-list">
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.HOME}>Home</Link>
              </li>
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.INFO}>Info</Link>
              </li>
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.SHOP}>Shop</Link>
              </li>
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.TOS}>TOS</Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-div-navbar">
            Platform
            <ul className="footer-div-navbar-list">
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.ANDROID}>Android</Link>
              </li>
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.IOS}>IOS</Link>
              </li>
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.WINDOWS}>Windows</Link>
              </li>
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.MACOS}>Mac OS</Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-div-navbar">
            Support
            <ul className="footer-div-navbar-list">
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.REQUEST}>Support request</Link>
              </li>
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.CONTACT}>Contact Us</Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-div-navbar">
            Subscribe
            <ul className="footer-div-navbar-list">
              <li className="header-div-navbar-list-item">
                <Link to={PathConstants.HOME}>Enter your email</Link>
              </li>
              <li className="header-div-navbar-list-item">
                Join our newsletter to stay up to date on features and releases
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-div-bottom">
          <h1 className="footer-div-bottom-logo">
            <Link to={PathConstants.HOME}>Juniper</Link>
          </h1>
          <button>
            Get now
          </button>
        </div>
      </div>
    </footer >
  )
}

export default Footer