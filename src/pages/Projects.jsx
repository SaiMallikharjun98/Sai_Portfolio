import React from "react";
import PCH from "../../public/PCH.png";
import MLP from "../../public/MLP.png";
import SIA from "../../public/SIA.png";
import SWO from "../../public/Sunwaso.jpg";
import GW from "../../public/GoWash.png";
function Projects() {
  return (
    <>
      <section id="Projects" className="w-[750px] mx-auto mt-24">
        <div>
          <h1 className="text-2xl font-bold">My Projects</h1>
          <p className="text-xl  text-neutral-600 mt-4">
            I've worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
        </div>
        <div className="flex my-6 gap-16">
          <img src={PCH} className="w-36 h-24 object-cover" alt="PCH" />
          <img src={MLP} className="w-36 h-24 object-cover" alt="MLP" />
          <img src={SIA} className="w-36 h-24 object-cover" alt="SIA" />
          <img src={SWO} className="w-40 h-24 object-cover" alt="Sunwaso" />
          <img src={GW} className="w-40 h-24 object-cover" alt="Gowash" />
        </div>
      </section>
    </>
  );
}

export default Projects;
