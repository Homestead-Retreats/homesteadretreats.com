import React from 'react'
import './OnsiteRec.css'

export default function OnsiteRec() {
  return (
    <div>
      <div className="rec-images">
        <div className="image-block-one">
          <img src="http://www.homesteadretreats.com/Onsite_Recreation_files/shapeimage_3.jpg" alt="nature path" className="path"/>
          <img src="http://www.homesteadretreats.com/Onsite_Recreation_files/shapeimage_2.jpg" alt="campfire" className="campfire"/>
        </div>
      <div className="image-block-three">
          <img src="http://www.homesteadretreats.com/Onsite_Recreation_files/shapeimage_4.jpg" alt="group in field" className="field"/>
        </div>
        <div className="image-block-four">
          <img src="http://www.homesteadretreats.com/Onsite_Recreation_files/5%20Fish.jpg" alt="man fishing" className="fishing"/>
        </div>
      </div>
      <div className="background-orange">
        <div className="head">
          <h3 className="head-text">Recreational Opportunities Onsite</h3>
        </div>
        <div>
          <img src="http://www.homesteadretreats.com/About_Us_files/backgroundimage_1.png" alt=""/>
        </div>
      <div>
        <p className="paragraph">We have a variety of indoor and outdoor activities for our guests to enjoy during </p>
        <p className="paragraph">any free time they might have. These activities include:</p>
        </div>
        <div className="list-container">
          <div className="container-one">
            <p className="list-item">Soccer</p>
            <p className="list-item">Frisbee Golf</p>
            <p className="list-item">Basketball</p>
            <p className="list-item">Bird Watching</p>
            <p className="list-item">Tug o War</p>
          </div>
            <div className="container-two">
              <p className="list-item">Campfires</p>
              <p className="list-items">Ping-Pong</p>
              <p className="list-item">Horseshoes</p>
              <p className="list-item">Volleyball</p>
              <p className="list-item">Kayaking</p>
            </div>
              <div className="container-three">
                <p className="list-item">Badminton</p>
                <p className="list-item">Capture the Flag</p>
                <p className="list-item">Foosball</p>
                <p className="list-item">Rope Swings</p>
                <p className="list-item">Bocce Ball</p>
              </div>
                <div className="container-four">
                  <p className="list-item">Blongo Ball</p>
                  <p className="list-item">Trails</p>
                  <p className="list-item">Fishing</p>
                  <p className="list-item">Billards</p>
                </div>
        </div>
      </div>
    </div>
  )
}
