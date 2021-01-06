import React from 'react'
import './FloorPlan.css'

export default function FloorPlan() {
  return (
    <div>
      <div className="head">
        <h3 className="head-text">
          Main Floor
        </h3>
        <div className="floor-line-break">
          <img src="http://www.homesteadretreats.com/About_Us_files/backgroundimage_1.png" alt="line-break" />
        </div>
      </div>
      <div>
        <img src="http://www.homesteadretreats.com/Floor_Plans_files/main%20hall%20layout.png" alt="main hall floor plan" />
      </div>
      <div className="head">
        <h3 className="head-text">
          Fellowship Hall
        </h3>
        <div className="floor-line-break">
          <img src="http://www.homesteadretreats.com/About_Us_files/backgroundimage_1.png" alt="line-break" />
        </div>
      </div>
      <div>
        <img src="http://www.homesteadretreats.com/Floor_Plans_files/fellowship%20hall%20layout%202%20.png" alt="fellowship hall floor plan" />
      </div>
      <div className="head">
        <h3 className="head-text">
          Apartments
        </h3>
        <div className="floor-line-break">
          <img src="http://www.homesteadretreats.com/About_Us_files/backgroundimage_1.png" alt="line-break" />
        </div>
      </div>
      <div>
        <img src="http://www.homesteadretreats.com/Floor_Plans_files/apartments%20layout.png" alt="apartment floor plan" />
      </div>
    </div>
  )
}
