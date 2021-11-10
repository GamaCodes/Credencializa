import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home.js";

import Modules from "./pages/modules";
import Product from "./pages/product";
import Company from "./pages/company";

import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Request from "./pages/request";

import "./index.css";

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modulos" element={<Modules />} />
      <Route path="/producto" element={<Product />} />
      <Route path="/empresa" element={<Company />} />
      <Route path="/terminos" element={<Terms />} />
      <Route path="/privacidad" element={<Privacy />} />
      <Route path="/solicitud" element={<Request />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
