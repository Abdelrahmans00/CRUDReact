import React from 'react'
import image from './images/Screenshot 2024-12-26 180221.png';
import image2 from './images/andres-jasso-PqbL_mxmaUE-unsplash.jpg';
import image3 from './images/mohammad-metri-E-0ON3VGrBc-unsplash.jpg';
import { useNavigate } from "react-router-dom";
import './About.css'


export default function About() {
  const navigate = useNavigate();
    
      const handleRedirectBuy = () => {
        navigate("/Buy"); 
      };
  return (
    <div>
      <div className="firstSection">
        <div className="first">
          <h6>FALL INTO FASHION</h6>
          <h1>Upgrade Your Wardrobe for </h1>
          <h1>the Season</h1>
          <button onClick={handleRedirectBuy} className='btn btn-success'>SHOP NOW</button>
        </div>
        <div className="end">
          <img src={image} alt="image" />
        </div>
      </div>
      <div className="secondSection">
        <div className="first">
          <img src={image2} alt="image" />
        </div>
        <div className="end">
          <img src={image3} alt="image" />
          <div className="text">
            <h6>Luxe Comfort, Everyday Glam</h6>
            <h1>Style that Speaks Comfort and</h1>
            <h1>Glamour</h1>
            <p>Experience the luxury of comfort without compromising on glamour. Our fashion pieces seamlessly blend style and ease, ensuring you feel confident every day. Enjoy special discounts on chic and comfy looks.</p>
            <button onClick={handleRedirectBuy} className='btn btn-success'>DISCOVER NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}
