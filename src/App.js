// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Parent from './Parent';
import './Footer.css'
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Buy from './Buy' ;
import Footer from './Footer';
import React, { useState } from "react";




function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };
  return (

    <div className="App">
      <NavBar/>
      <div>
        <Routes>
          <Route path="*" element = {<NotFound/>}/>
          <Route path="/" element = {<Home/>}/>
          <Route path="home" element = {<Home/>}/>
          <Route path="sell" element = {<Parent onAddProduct={handleAddProduct}/>}/>
          <Route path="buy" element = {<Buy products={products}/>}/>
          <Route path="about" element = {<About/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
