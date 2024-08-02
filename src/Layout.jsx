import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
