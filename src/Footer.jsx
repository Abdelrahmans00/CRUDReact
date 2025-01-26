import React from 'react'
import './Footer.css'
import logo from './images/logo.png';

export default function () {
  return (
    <div className='Foot'>
        <div className="sectionOne">
            <img src={logo} alt="logo"/>
            <h4>T: + (08) 9055 0269</h4>
            <h4>E: example@example.com</h4>
            <h4>50 Porana Place, West Casuarinas,</h4>
            <h4>Western Australia, Australia.</h4>
        </div>
        <div className="sectionTwo">
            <h2>Support</h2>
            <h4>Contact Us</h4>
            <h4>NewsLetter</h4>
            <h4>Gift Cards</h4>
        </div>
        <div className="sectionThree ">
            <h2>INFORMATION</h2>
            <h4>About Us</h4>
            <h4>Privacy Policy</h4>
            <h4>Returns Policy</h4>
        </div>
    </div>
  )
}
