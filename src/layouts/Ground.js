import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Home from '../views/Home';
import About from '../views/About';
import Products from '../views/Products';
import Delivery from '../views/Delivery';
import Login from '../admin/Login';
import AddProducts from '../admin/AddProducts';

const Ground = () => {
  return (
    <div>
      <BrowserRouter>        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/addProducts" element={<AddProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Ground