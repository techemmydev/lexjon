import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet /> {/* Page content renders here after loading */}
      </main>
    </div>
  );
};

export default Layout;
