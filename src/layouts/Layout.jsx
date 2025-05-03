import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet /> {/* Page content renders here after loading */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
