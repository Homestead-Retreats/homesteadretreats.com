import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-div-top">
        <p className="contact-title">Director:</p>
        <p className="contact-info">Greg Miller</p>
      </div>
      <div className="contact-div">
        <p className="contact-title">Registrar:</p>
        <p className="contact-info">Teresa Miller</p>
      </div>
      <div className="contact-div">
        <p className="contact-title">Food Service:</p>
        <p className="contact-info">Teresa Miller</p>
      </div>
      <div className="contact-div">
        <p className="contact-title">Phone:</p>
        <p className="contact-info">360-568-6512</p>
      </div>
      <div className="contact-div">
        <p className="contact-title">Fax:</p>
        <p className="contact-info">360-568-6512</p>
      </div>
      <div className="contact-div">
        <p className="contact-title">Email:</p>
        <p className="contact-info-email">Office@HomesteadRetreats.com</p>
      </div>
      <div className="contact-div">
        <p className="contact-title">Location:</p>
        <p className="contact-info">19028 Meadow Lake Rd Snohomish, WA 98290</p>
      </div>
      <div className="contact-div-bottom">
        <p className="contact-title">Tour:</p>
        <p className="contact-info">By appointment only</p>
      </div>
      <div className="image-parent">
        <img src="http://www.homesteadretreats.com/About_Us_files/The%20Hall%20-%20original.jpg" alt="hand-drawn-cabin" className="contact-image"/>
      </div>
    </div>
  )
}
