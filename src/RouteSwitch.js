import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Shop from "./shop";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;