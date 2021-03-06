import React, { useState } from 'react';
import './App.css';
import Home from './home';
import Shop from './shop';
import Nav from './nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayCart from './displaycart';

const App = () => {


  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
