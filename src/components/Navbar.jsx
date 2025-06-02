import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex justify-between gap-3 font-bold text-xl w-[750px] mx-auto">
        <h3 className="text-2xl font-bold text-blue-500">SAI</h3>
        <Link to="/" className="hover:text-blue-700 cursor-pointer">
          Home
        </Link>
        <Link to="/About" className="hover:text-blue-700 cursor-pointer">
          About
        </Link>
        <Link to="/Experience" className="hover:text-blue-700 cursor-pointer">
          Experience
        </Link>
        <Link
          to="/Qualifications"
          className="hover:text-blue-700 cursor-pointer"
        >
          Qualifications
        </Link>
        <Link to="/Skills" className="hover:text-blue-700 cursor-pointer">
          Skills
        </Link>
        <Link to="/Projects" className="hover:text-blue-700 cursor-pointer">
          Projects
        </Link>
        <Link to="/Contact" className="hover:text-blue-700 cursor-pointer">
          Contact
        </Link>
      </div>
    </>
  );
}

export default Navbar;
