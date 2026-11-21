import React from "react";
import { Link } from "react-router-dom";

const Narbar1 = () => {
  return (
    <div>
      <h1>Piyush</h1>

      <Link to="/">Home</Link>
      <Link to="/Product">Product</Link>
      <Link to="/About">About</Link>
      <Link to="/Courses">Courses</Link>
    </div>
  );
};

export default Narbar1;
