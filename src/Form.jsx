// import React, { useState } from 'react';


// function FormComponent({ onSubmit }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     brand: '',
//     price: '',
//     description: '',
//     onSale: false,
//     count: 0,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData); // Pass the data to the parent
//     setFormData({
//       name: '',
//       brand: '',
//       price: '',
//       description: '',
//       onSale: false,
//       count: 0,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Brand:</label>
//         <input
//           type="text"
//           name="brand"
//           value={formData.brand}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Price:</label>
//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Description:</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//         ></textarea>
//       </div>

//       <div>
//         <label>On Sale:</label>
//         <input
//           type="checkbox"
//           name="onSale"
//           checked={formData.onSale}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Count:</label>
//         <input
//           type="number"
//           name="count"
//           value={formData.count}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormComponent;
