import React from "react";
import './Buy.css'

function Buy({ products }) {
  return (
    <div className="buySection container mt-4">
      <h2 className="text-center mb-4">Available Products</h2>
      <div className="row g-4">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="card h-100">
                {product.imagePreview ? (
                  <img
                    src={product.imagePreview}
                    className="card-img-top"
                    alt={product.productName}
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
                ) : (
                  <div className="text-center p-4">No image available</div>
                )}
                <div className="card-body">
                  <h5 className="card-title">{product.productName || "No Product Name"}</h5>
                  <p className="card-text">Quantity: {product.quantity || "N/A"}</p>
                  <p className="card-text">Price: ${product.price || "N/A"}</p>
                  <button className="btn btn-success">Add to cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products available.</p>
        )}
      </div>
    </div>
  );
}

export default Buy;
