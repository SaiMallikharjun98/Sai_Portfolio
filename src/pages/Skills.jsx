import React from "react";

function Skills() {
  return (
    <>
      <section id="Skills" className="w-[750px] mx-auto mt-24">
        <h1 className="text-2xl font-bold">Skills</h1>
        <div className="mt-6">
          <div className="flex items-center gap-4 text-center">
            <p className="bg-black w-20 font-bold text-white text-sm rounded-sm p-2">
              HTML
            </p>
            <p className="bg-black w-20 font-bold text-white text-sm rounded-sm p-2">
              CSS
            </p>
            <p className="bg-black w-20 font-bold text-white text-sm rounded-sm p-2">
              Bootstrap
            </p>
            <p className="bg-black w-28 font-bold text-white text-sm rounded-sm p-2">
              Tailwind CSS
            </p>
            <p className="bg-black w-20 font-bold text-white text-sm rounded-sm p-2">
              JavaScript
            </p>
            <p className="bg-black w-20 font-bold text-white text-sm rounded-sm p-2">
              React JS
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
