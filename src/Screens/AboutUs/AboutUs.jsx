import React from 'react'
import Contact from '../Contact/Contact'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <div className="main-container">
      <div className="aside-left">
        <Contact />
      </div>
      <div className="aside-right">
      <div className="images">
        <img src="http://www.homesteadretreats.com/About_Us_files/shapeimage_5.jpg" alt="homestead-gathering"  className="gathering"/>
        <img src="http://www.homesteadretreats.com/About_Us_files/shapeimage_6.jpg" alt="homestead-lake" className="lake"/>
        <img src="http://www.homesteadretreats.com/About_Us_files/shapeimage_4.jpg" alt="homestead-director" className="director"/>
      </div>
      <div className="director-head">
        <h3>
          From The Director
        </h3>
        <div className="line-break">
          <img src="http://www.homesteadretreats.com/About_Us_files/backgroundimage_1.png" alt="line-break" />
        </div>
      </div>
      <div className="paragraphs">
        <p className="first-p">
          The Homestead is a Christian Camp, Retreat and Conference Center located north of Monroe in East Snohomish, Washington. Our private retreat facilities are situated on 45 beautiful acres on Meadow Lake in Western Washington just 45 minutes north of Seattle.
        </p>
        <p className="second-p">
          Our camp is committed to serving Christian churches and ministries. The purpose of The Homestead and its related ministries is to proclaim the gospel of Jesus Christ to all people in accordance with the Holy Scriptures (Bible); to lead them to a personal relationship with Jesus Christ as their Savior, Lord, and Life; and to assist other Christian ministries that are like-minded in purpose.
        </p>
        <p className="third-p">
          If you’re planning a men's, women’s, or youth retreat, a camp, or church leadership conference, The Homestead may be the ideal place for your group. For further information on our facilities, property, meals, and available activities, please visit the rest of our site or give us a call.
        </p>
        <p className="fourth-p">
        We would love to have the opportunity to serve you.
        </p>
      </div>
      </div>
    </div>
  )
}