import React from 'react'
import { Link } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="header-div">
        <h1 className="header-div-logo">
          <Link to={PathConstants.HOME}></Link>
        </h1>
        <nav className="header-div-navbar">
          <ul className="header-div-navbar-list">
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
            <li className="header-div-navbar-list-item">
              <Link to={PathConstants.INFO}>Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header