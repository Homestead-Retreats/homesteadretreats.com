import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="test">
        <h6 className="contact-title">Director:</h6>
        <p className="contact-info">Greg Miller</p>
      </div>
      <div className="test">
        <h6 className="contact-title">Registrar:</h6>
        <p className="contact-info">Teresa Miller</p>
      </div>
      <div className="test">
        <h6 className="contact-title">Food Service:</h6>
        <p className="contact-info">Teresa Miller</p>
      </div>
      <div className="test">
        <h6 className="contact-title">Phone:</h6>
        <p className="contact-info">360-568-6512</p>
      </div>
      <div className="test">
        <h6 className="contact-title">Fax:</h6>
        <p className="contact-info">360-568-6512</p>
      </div>
      <div className="test">
        <h6 className="contact-title">Email:</h6>
        <p className="contact-info">Office@HomesteadRetreats.com</p>
      </div>
      <div className="test">
        <h6 className="contact-title">Location:</h6>
        <p className="contact-info">19028 Meadow Lake Rd Snohomish, WA 98290</p>
      </div>
      <div className="test">
        <h6 className="contact-title">Tour:</h6>
        <p className="contact-info">By appointment only</p>
      </div>
      <div className="image-parent">
        <img src="http://www.homesteadretreats.com/About_Us_files/The%20Hall%20-%20original.jpg" alt="hand-drawn-cabin" className="contact-image"/>
      </div>
    </div>
  )
}
