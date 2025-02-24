import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div className="row g-4">
          {cartItems.map((item, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="card h-100">
                {item.imagePreview ? (
                  <img
                    src={item.imagePreview}
                    className="card-img-top"
                    alt={item.productName}
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
                ) : (
                  <div className="text-center p-4">No image available</div>
                )}
                <div className="card-body">
                  <h5 className="card-title">{item.productName}</h5>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <p className="card-text">Price: ${item.price}</p>
                  <button className="btn btn-danger" onClick={() => onRemoveFromCart(index)}>
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    </div>
  );
}
