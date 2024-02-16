import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const paragraphStyle = {
    top: "200px",
    marginRight: "700px",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ml-5">
          Contact List App
        </Link>
        <h2 style={paragraphStyle}>Coding Ninja Project</h2>
      </div>
    </nav>
  );
};

export default Navbar;
