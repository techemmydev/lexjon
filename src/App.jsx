import React from "react";

import { Routes, Route } from "react-router";

import Layout from "./layouts/Layout";
import PagenotFound from "./pages/PagenotFound";
import Homepage from "./pages/Homepage";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        {/* Website Content */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<PagenotFound />} />
            <Route index element={<Homepage />} />
            {/* Add more routes here */}
          </Route>
        </Routes>
      </div>
      {/* Cookie Consent appears after loading */}
    </>
  );
};
export default App;
