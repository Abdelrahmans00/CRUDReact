import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";

function Parent({ onAddProduct }) {
  const [formData, setFormData] = useState({
    productName: "",
    image: null,
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please select an image.");
      return;
    }

    const productData = {
      ...formData,
      imagePreview: URL.createObjectURL(formData.image),
    };

    onAddProduct(productData);
    setFormData({
      productName: "",
      image: null,
      quantity: "",
      price: "",
    });

    document.getElementById("image").value = null;
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4 text-primary">Add a New Product</h2>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Product Image:
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="price" className="form-label">
                Price ($):
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Parent;
