import React, { useState } from "react";
import './Form.css'

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
      image: file, // Set file
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
      imagePreview: URL.createObjectURL(formData.image), // Generate preview
    };

    onAddProduct(productData); // Pass data to parent
    setFormData({
      productName: "",
      image: null,
      quantity: "",
      price: "",
    });

    document.getElementById("image").value = null; // Reset file input
  };

  return (
    <div className="Seller">
      <h2>Seller - Add Product</h2>
      <form onSubmit={handleSubmit} className="form">
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Parent;
