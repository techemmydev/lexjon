import React from "react";

import { Routes, Route } from "react-router";

import Layout from "./layouts/Layout";
import PagenotFound from "./pages/PagenotFound";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import "./App.css";
import ServicePage from "./pages/ServicePage";
import CareerPage from "./pages/CareerPage";
import Contactpage from "./pages/ContactPage";

const App = () => {
  return (
    <>
      <div>
        {/* Website Content */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<PagenotFound />} />
            <Route index element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contactpage />} />
            {/* Add more routes here */}
            <Route path="/services" element={<ServicePage />} />
            <Route path="/career" element={<CareerPage />} />
            {/* Add more routes here */}
          </Route>
        </Routes>
      </div>
      {/* Cookie Consent appears after loading */}
    </>
  );
};
export default App;
