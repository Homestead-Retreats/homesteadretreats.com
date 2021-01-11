import React from 'react'
import './FloorPlan.css'

export default function FloorPlan() {
  return (
    <div className="floor-plan">
      <div className="floor-one">
      <div className="floor-head">
        <h3 className="head-text">
          Main Floor
        </h3>
        {/* <div className="floor-line-break">
          <img src="http://www.homesteadretreats.com/About_Us_files/backgroundimage_1.png" alt="line-break" />
        </div> */}
      </div>
      <div className="floor-layout">
        <img src="http://www.homesteadretreats.com/Floor_Plans_files/main%20hall%20layout.png" alt="main hall floor plan" className="floor-main"/>
      </div>
      </div>
      <div className="floor-two">
      <div className="floor-head">
        <h3 className="head-text">
          Fellowship Hall
        </h3>
        {/* <div className="floor-line-break">
          <img src="http://www.homesteadretreats.com/About_Us_files/backgroundimage_1.png" alt="line-break" />
        </div> */}
      </div>
      <div className="floor-layout">
        <img src="http://www.homesteadretreats.com/Floor_Plans_files/fellowship%20hall%20layout%202%20.png" alt="fellowship hall floor plan" className="floor-hall"/>
      </div>
      </div>
      <did className="floor-three">
      <div className="floor-head-apartment">
        <h3 className="head-text">
          Apartments
        </h3>
        {/* <div className="floor-line-break">
          <img src="http://www.homesteadretreats.com/About_Us_files/backgroundimage_1.png" alt="line-break" />
        </div> */}
      </div>
      <div className="floor-layout-apartment">
        <img src="http://www.homesteadretreats.com/Floor_Plans_files/apartments%20layout.png" alt="apartment floor plan" className="floor-apartment"/>
      </div>
      </did>
    </div>
  )
}
