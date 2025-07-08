import React from "react";
import Navbar from "./Navbar.jsx";
import ProductList from "./ProductList.jsx";
import Footer from "./Footer.jsx";
import ProductDetail from "./ProductDetail.jsx";
import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
