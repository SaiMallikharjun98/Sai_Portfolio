import React from "react";
import Kiet from "../../public/Kiet.webp";
import sri from "../../public/sri chaitanya.jpeg";
import Aditya from "../../public/Aditys.jpeg";

function Education() {
  return (
    <>
      <section id="Qualifications" className="w-[750px] mx-auto mt-24">
        <h1 className="text-2xl font-bold">Education</h1>
        <div className="mt-6">
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-16">
              <img
                src={Kiet}
                className="w-20 h-20 object-cover rounded-full"
                alt="Kiet"
              />
              <div className="mt-6">
                <h2 className="text-xl text-neutral-600">KIET</h2>
                <p className="text-xl text-neutral-600 mt-2">
                  B.Tech of Electrical & Electronics
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mt-6">Jul 2015 - May 2019</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-24">
            <div className="flex items-center gap-16">
              <img
                src={sri}
                className="w-20 h-20 object-cover rounded-full"
                alt="OLGA"
              />
              <div className="mt-6">
                <h2 className="text-xl text-neutral-600">
                  Sri Chaitanya Junior Kalasala
                </h2>
                <p className="text-xl text-neutral-600 mt-2">
                  Intermediate of M.P.C
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mt-6">Jun 2013 - Apr 2015</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-40">
            <div className="flex items-center gap-16">
              <img
                src={Aditya}
                className="w-20 h-20 object-cover rounded-full"
                alt="IDC"
              />
              <div className="mt-6">
                <h2 className="text-xl text-neutral-600">
                  Aditya Public School
                </h2>
                <p className="text-xl text-neutral-600 mt-2">SSC</p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mt-6">Jun 2012 - May 2013</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
