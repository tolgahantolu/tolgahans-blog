import React from "react";
import Aside from "../components/Aside";

const Layout = ({ children }) => {
  return (
    <>
      <Aside />
      <main className="pt-20">{children}</main>
    </>
  );
};

export default Layout;
