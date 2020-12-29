import React from 'react'
import Prices from '../Prices/Prices'
import './Rental.css'

export default function RentalInfo() {
  return (
    <div className="main-container">
      <div className="aside-left">
        <Prices />
      </div>
      <div className="aside-right">
      <div className="rental-images">
        <img src="http://www.homesteadretreats.com/Rental_Information_files/shapeimage_5.jpg" alt="homestead-gathering"  className="one"/>
        <img src="http://www.homesteadretreats.com/Rental_Information_files/shapeimage_4.jpg" alt="homestead-lake" className="two"/>
        </div>
        <div className="rental-images">
        <img src="http://www.homesteadretreats.com/Rental_Information_files/IMG_0432_3.jpg" alt="homestead-director" className="three" />
        <img src="http://www.homesteadretreats.com/Rental_Information_files/IMG_0275_2.jpg" alt="homestead-director" className="four"/>
        </div>
      <div className="rental-head">
        <h3>
          Rental Groups
        </h3>
        <div className="rental-line-break">
          <img src="http://www.homesteadretreats.com/About_Us_files/backgroundimage_1.png" alt="line-break" />
        </div>
      </div>
      <div className="paragraphs">
        <p className="first-p">
          All retreats and conferences include exclusive use of the property. We require a $100.00 non-refundable deposit to reserve the facilities.  Canceling a reserved retreat will require payment of a substantial charge unless we are able to rent the facilities out to another group for that date. Discounts are given for retreats longer than 2 nights.  We accept reservations one year in advance, when Main Hall is needed, with repeat groups having first option.
        </p>
        <p className="second-p">
          Because we are a non-profit organization created specifically for the purpose of the propagation of the gospel of Jesus Christ, our facilities are only available for rent by groups who are like-minded.  Planned Christian ministry is required of all groups who rent our facilities. Though we have a lot of recreational activities available, we are most interested in supporting and encouraging individuals in their personal relationship with Jesus Christ through the teaching of the scriptures, prayer, genuine fellowship, worship, and quiet reflection.
        </p>
        <p className="third-p">
        Please call if you need more information or if you would like to take a tour of the property. We would love to have the opportunity to serve you and your church or ministry.
        </p>
      </div>
      </div>
    </div>
  )
}
