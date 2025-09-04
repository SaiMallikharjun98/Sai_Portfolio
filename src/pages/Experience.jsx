import React from "react";
import Ventrek from "../../public/ventrek.jpeg";
import Idc from "../../public/Idc.jpeg";
import Grepthor from "../../public/Grepthor.jpeg";
function Experience() {
  return (
    <>
      <section className="w-[750px] mx-auto mt-24" id="Experience">
        <h1 className="text-2xl font-bold">Work Experience</h1>
        <div className="mt-6">
          <div className="flex items-center gap-28">
            <div className="flex items-center gap-16">
              <img
                src={Ventrek}
                className="w-20 h-20 object-cover rounded-fullr"
                alt="Ventrek"
              />
              <div className="mt-6">
                <h2 className="text-xl text-neutral-600">
                  Ventrek Solutions Pvt Ltd
                </h2>
                <p className="text-xl text-neutral-600 mt-2">
                  Senior Software Engineer
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mt-6">
              Nov 2022 - Till Working
            </p>
          </div>
        </div>

        {/* <div className="mt-6">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-16">
              <img
                src={Fidel}
                className="w-20 h-20 object-cover rounded-full"
                alt="Fidel"
              />
              <div className="mt-6">
                <h2 className="text-xl text-neutral-600">
                  Fidel Technology Solutions Pvt Ltd
                </h2>
                <p className="text-xl text-neutral-600 mt-2">
                  Software Developer
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mt-6">Nov 2022 - Mar 2024</p>
          </div>
        </div> */}

        <div className="mt-6">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-16">
              <img
                src={Idc}
                className="w-20 h-20 object-cover rounded-full"
                alt="IDC"
              />
              <div className="mt-6">
                <h2 className="text-xl text-neutral-600">
                  IDC Technologies Solutions Pvt Ltd
                </h2>
                <p className="text-xl text-neutral-600 mt-2">
                  Software Developer
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mt-6">
              Mar 2022 - Sept 2022
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-16">
              <img
                src={Grepthor}
                className="w-20 h-20 object-cover rounded-full"
                alt="Grepthor"
              />
              <div className="mt-6">
                <h2 className="text-xl text-neutral-600">
                  Grepthor Software Solutions Pvt Ltd
                </h2>
                <p className="text-xl text-neutral-600 mt-2">
                  Software Developer
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mt-4">Jan 2020 - Mar 2022</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
