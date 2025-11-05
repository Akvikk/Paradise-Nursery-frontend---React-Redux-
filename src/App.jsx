import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import ProductListing from './ProductListing';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
