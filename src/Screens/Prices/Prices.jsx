import React from 'react'
import './Prices.css'

export default function Prices() {
  return (
    <div className="price-background">
      <div>
        <p className="price-year">2019 Prices</p>
      </div>
      <div>
        <p className="price-title">Two nights Lodging including 6 meals *</p>
        <p className="price">$141.00</p>
      </div>
      <div>
        <p className="price-title">One night Lodging including 3 meals *</p>
        <p className="price">$76.00</p>
      </div>
      <div>
        <p className="price-title">Rent the 3 apartments only and do your own cooking</p>
        <p className="price">$300.00/night</p>
      </div>
      <div>
        <p className="price-title">All day Conferences & U-Cook Retreats - Call for Prices</p>
        <p className="price">$300.00/night</p>
      </div>
      <div>
        <p className="price-title">* Additional Charge For Bedding and Towels if needed</p>
      </div>
      <div>
        <p className="price-red">10% Discount On Retreats from</p>
      </div>
      <div>
        <p className="price-red">November-February</p>
      </div>
      <div>
        <p className="price-title">CALL FOR DETAILS MINIMUMS DO APPLY</p>
      </div>
      <div>
        <p className="price-title">(Prices are subject to change without notice)</p>
      </div>
      <div>
        <img src="http://www.homesteadretreats.com/Rental_Information_files/shapeimage_3.jpg" alt="girl in white shirt" className="price-image"/>
      </div>
      <div className="books">
      <div>
        <p className="price-books">Excellent Books:</p>
      </div>
      <div>
        <a href="http://torchbearers.gospelcom.net/html/major/books/books_navigation.swf" target="_blank" rel="noopener noreferrer" className="price-links">The Saving Life of Christ</a>
        <p className="price-links">&</p>
        <a href="http://torchbearers.gospelcom.net/html/major/books/books_navigation.swf" target="_blank" rel="noopener noreferrer" className="price-links">The Indwelling Life of Christ</a>
        <p className="price-title">by Major Ian Thomas</p>
        </div>
        </div>
      <div>
        <p className="price-title">Great Bible School:</p>
        <a href="http://www.capernwray.ca/" target="_blank" rel="noopener noreferrer" className="price-links-long">Capernwray Harbour Bible CenterThetis Island, BC Canada V0R2Y0</a>
      </div>
      </div>
  )
}
