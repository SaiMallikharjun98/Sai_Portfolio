import User from "../../public/sai_image.jpg";
import OLGA from "../../public/olga.jpeg";
import Fidel from "../../public/Fidel.jpeg";
import Idc from "../../public/Idc.jpeg";
import Grepthor from "../../public/Grepthor.jpeg";
import Kiet from "../../public/Kiet.webp";
import sri from "../../public/sri chaitanya.jpeg";
import Aditya from "../../public/Aditys.jpeg";
import PCH from "../../public/PCH.png";
import MLP from "../../public/MLP.png";
import SIA from "../../public/SIA.png";
import SWO from "../../public/Sunwaso.jpg";
function Home() {
  return (
    <>
      <section className="mt-24">
        <div className="w-[750px] mx-auto flex items-center gap-15">
          <div>
            <h1 className="text-3xl font-bold">Hi, I'm Sai 👋</h1>
            <p className="text-xl text-neutral-600 mt-4">
              A Software Developer who loves building clean, functional, and
              user-focused applications. Passionate about code, learning.
            </p>
          </div>
          <div>
            <img
              src={User}
              className="h-[120px] w-[220px] rounded-full object-cover"
              alt="SelfImage"
            />
          </div>
        </div>
      </section>

      <section className="w-[750px] mx-auto mt-6">
        <h1 className="text-2xl font-bold">About Me</h1>
        <p className="text-xl text-neutral-600 mt-4">
          I’m Sai Manikya Mallikharjun Khandavilli, a passionate React.js
          Developer with over 4 years of experience in building responsive,
          high-performance web applications. I specialize in React, JavaScript,
          Tailwind CSS, and modern front-end tools like Vite and CSS Modules.
          I’ve worked remotely with companies such as Fidel Technology Solutions
          and IDC Technologies, delivering scalable solutions across various
          domains. In addition to professional projects.
        </p>
      </section>

      <section className="w-[750px] mx-auto my-6">
        <h1 className="text-2xl font-bold">Work Experience</h1>
        <div className="mt-6">
          <div className="flex items-center gap-28">
            <div className="flex items-center gap-16">
              <img
                src={OLGA}
                className="w-20 h-20 object-cover rounded-fullr"
                alt="OLGA"
              />
              <div className="mt-6">
                <h2 className="text-xl text-neutral-600">
                  OLGA Technologies Pvt Ltd
                </h2>
                <p className="text-xl text-neutral-600 mt-2">
                  Software Engineer
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mt-6">
              Mar 2024 - Sept 2024
            </p>
          </div>
        </div>

        <div className="mt-6">
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
        </div>

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

      <section className="w-[750px] mx-auto my-6">
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

      <section className="w-[750px] mx-auto my-6">
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

      <section className="w-[750px] mx-auto mt-6">
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
        </div>
      </section>
    </>
  );
}

export default Home;
