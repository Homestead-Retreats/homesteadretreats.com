import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className="header-links">
      <div className="header-link-parent">
        <Link to="/" className="header-link-home">ABOUT US</Link>
      </div>
      <div className="header-link-parent">
        <Link to="/facilities-food" className="header-link-facilities">FACILITIES AND FOOD</Link>
      </div>
      <div className="header-link-parent">
        <Link to="/property" className="header-link-property">PROPERTY</Link>
      </div>
      <div className="header-link-parent">
        <Link to="/onsite-recreation" className="header-link-onsite">ONSITE RECREATION</Link>
      </div>
      <div className="header-link-parent">
        <Link to="/offsite-recreation" className="header-link-offsite">OFFSITE RECREATION</Link>
      </div>
      <div className="header-link-parent">
        <Link to="/rental" className="header-link-rental">RENTAL INFORMATION</Link>
      </div>
      <div className="header-link-parent">
        <Link to="/floor-plan" className="header-link-floor">FLOOR PLANS</Link>
      </div>
    </div>
  )
}
