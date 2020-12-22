import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className="header-links">
      <div>
        <Link to="/" className="header-link">ABOUT US</Link>
      </div>
      <div>
        <Link to="/facilities-food" className="header-link">FACILITIES AND FOOD</Link>
      </div>
      <div>
        <Link to="/property" className="header-link">PROPERTY</Link>
      </div>
      <div>
        <Link to="/onsite-recreation" className="header-link">ONSITE RECREATION</Link>
      </div>
      <div>
        <Link to="/offsite-recreation" className="header-link">OFFSITE RECREATION</Link>
      </div>
      <div>
        <Link to="/rental" className="header-link">RENTAL INFORMATION</Link>
      </div>
      <div>
        <Link to="/floor-plan" className="header-link">FLOOR PLANS</Link>
      </div>
    </div>
  )
}
