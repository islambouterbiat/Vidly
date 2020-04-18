import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-secondary ml-2">{totalCounters}</span>
      </span>
    </nav>
  );
};
export default Navbar;
