import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
import SingleProduct from "./Components/SingleProduct";
import Cart from "./Components/Cart";
import ErrorPage from "./Components/ErrorPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/singleproduct/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<ErrorPage />} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default App;
