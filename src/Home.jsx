import React from 'react'
import banner1 from './images/banner-1.png';
import banner2 from './images/banner-2.png';
import banner3 from './images/banner-3.png';
import './Home.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
  
    const handleRedirectBuy = () => {
      navigate("/buy"); // Redirect to the About component
    };

    return (
      <div className="home">
        {/* Bootstrap Carousel */}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
  
          {/* Carousel Items */}
          <div className="carousel-inner">
            <div className="slide1Control carousel-item active">
              <img src={banner1} className="d-block w-100" alt="Slide 1" />
              <div className="slide1 carousel-caption d-none d-md-block">
                <h5>Step into style</h5>
                <br/>
                <h2>Discover The Latest Trends In Footwear</h2>
                <p>From classic sneakers to trendy boots, our collection has something for everyone</p>
              </div>
            </div>
            <div className="slide2Control carousel-item">
              <img src={banner2} className="d-block w-100" alt="Slide 2" />
              <div className="slide2 carousel-caption d-none d-md-block">
                <h5>ELEVATE YOUR LOOK</h5>
                <h2>Find the perfect Pair Of Shoes To Complete</h2>
                <p>Explore Our Wide Range Of Styles, Colors And Materials To Find The Perfect Shoes For Any Occasion</p>
              </div>
            </div>
            <div className="slide3Control carousel-item">
              <img src={banner3} className="d-block w-100" alt="Slide 3" />
              <div className="slide3 carousel-caption d-none d-md-block">
                <h5>COMFORT MEETS FASHION</h5>
                <h2> designed to keep your feet happy all day long.</h2>
                <p>Our collection features comfortable and stylish footwear</p>
              </div>
            </div>
          </div>
        </div>
        <div className="collection">
          <div className="firstCollection ">
            <h5>TRENDING</h5>
            <h3>Men Collection</h3>
            <button onClick={handleRedirectBuy} className='btn btn-success'>SHOP NOW</button>
          </div>
          <div className="secondCollection ">
            <h5>LATEST</h5>
            <h3>Women Collection</h3>
            <button onClick={handleRedirectBuy} className='btn btn-success'>SHOP NOW</button>
          </div>
          <div className="thirdCollection ">
            <h5>COMFORT</h5>
            <h3>Kid Collection</h3>
            <button onClick={handleRedirectBuy} className='btn btn-success'>SHOP NOW</button>
          </div>
        </div>
      </div>
    );
  }
  export default Home;