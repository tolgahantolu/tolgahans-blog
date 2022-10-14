import React from "react";
import Aside from "../components/Aside";

const Layout = ({ children }) => {
  return (
    <>
      <Aside />
      <main className="py-20 w-4/5 h-full mx-auto lg:w-3/5">{children}</main>
    </>
  );
};

export default Layout;
