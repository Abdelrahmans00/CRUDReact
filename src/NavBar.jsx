import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} alt="logo" style={{ height: "30px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="buy">
                Buy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="sell">
                Sell
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="about">
                About
              </Link>
            </li>
          </ul>
          {/* Move Cart to the right */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="cart">
                🛒 Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
