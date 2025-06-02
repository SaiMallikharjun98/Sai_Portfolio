import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex justify-center gap-14 font-bold text-xl w-full  fixed top-0 p-4 shadow-2xl bg-neutral-400">
        <h3 className="text-2xl font-bold text-white ml-5">SAI MANIKYA MALLIKHARJUN</h3>
        <Link to="/" className="hover:text-blue-700  underline text-white cursor-pointer">
          Home
        </Link>
        <Link
          to="/About"
          className="hover:text-blue-700 text-white cursor-pointer"
        >
          About
        </Link>
        <Link
          to="/Experience"
          className="hover:text-blue-700 border-b-blue-700  text-white cursor-pointer"
        >
          Experience
        </Link>
        <Link
          to="/Qualifications"
          className="hover:text-blue-700 cursor-pointer text-white"
        >
          Qualifications
        </Link>
        <Link
          to="/Skills"
          className="hover:text-blue-700 cursor-pointer text-white"
        >
          Skills
        </Link>
        <Link
          to="/Projects"
          className="hover:text-blue-700 cursor-pointer text-white"
        >
          Projects
        </Link>
        <Link
          to="/Contact"
          className="hover:text-blue-700 cursor-pointer text-white"
        >
          Contact
        </Link>
      </div>
    </>
  );
}

export default Navbar;
