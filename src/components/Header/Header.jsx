import React from 'react'
import { Link } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import "./Header.css"
import search from "../../assets/search.png"

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
              <Link className="header-div-navbar-list-item-link" to={PathConstants.HOME}>Home</Link>
            </li>
            <li className="header-div-navbar-list-item">
              <Link className="header-div-navbar-list-item-link"to={PathConstants.INFO}>Info</Link>
            </li>
            <li className="header-div-navbar-list-item">
              <Link className="header-div-navbar-list-item-link" to={PathConstants.SHOP}>Shop</Link>
            </li>
            <li className="header-div-navbar-list-item">
              <Link className="header-div-navbar-list-item-link" to={PathConstants.TOS}>TOS</Link>
            </li>
            <li className="header-div-navbar-list-item">
              <Link className="header-div-navbar-list-item-link" to={PathConstants.INFO}><img src={search} alt={search} /></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header