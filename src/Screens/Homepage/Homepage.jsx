import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

export default function Homepage() {
  return (
    <div className="home-background">
      <div>
        <p className="home-title">The Homestead</p>
        <h3 className="home-tagline">... that we might present every man complete in Christ!</h3>
      </div>
      <div>
        <img src="http://www.homesteadretreats.com/About_Us_files/The%20Hall%20-%20original.jpg" alt="homestead-drawn" className="homestead"/>
      </div>
      <div className="homepage-link">
        <button className="main-link"><Link to="">Enter Site</Link></button>
      </div>
    </div>
  )
}
