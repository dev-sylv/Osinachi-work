import React from "react";
import Section from "./Section";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Section />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
