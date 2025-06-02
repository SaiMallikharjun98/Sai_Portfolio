import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex justify-between gap-4 font-bold text-xl ">
        <h3 className="text-2xl font-bold">SAI</h3>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Experience">Experience</Link>
        <Link to="/Qualifications">Qualifications</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </>
  );
}

export default Navbar;
