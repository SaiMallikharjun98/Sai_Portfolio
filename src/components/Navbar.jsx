import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex justify-between gap-5 font-bold text-xl w-full  fixed top-0 p-4 shadow-2xl bg-neutral-400">
        <h3 className="text-2xl font-bold text-blue-500 ml-10">SAI</h3>
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
