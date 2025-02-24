import React from "react";
import { Link } from "react-router-dom";
import "./Buy.css";

export default function Buy({ products, onAddToCart }) {
  return (
    <div className="buy-section container mt-4">
      <h2 className="text-center mb-4">Available Products</h2>
      <div className="row justify-content-center">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" key={index}>
              <div className="card product-card shadow-sm">
                {product.imagePreview ? (
                  <img
                    src={product.imagePreview}
                    className="card-img-top product-image"
                    alt={product.productName}
                  />
                ) : (
                  <div className="no-image">No image available</div>
                )}
                <div className="card-body text-center">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">Quantity: {product.quantity}</p>
                  <p className="card-text">Price: ${product.price}</p>
                  <div className="button-group">
                    <button className="btn btn-success me-2" onClick={() => onAddToCart(product)}>
                      Add to Cart
                    </button>
                    <Link to="/cart" className="btn btn-primary">
                      View Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100">No products available.</p>
        )}
      </div>
    </div>
  );
}
