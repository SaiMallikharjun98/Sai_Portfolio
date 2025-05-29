import User from "../public/sai_image.jpg";
import OLGA from "../public/olga.jpeg";
import Fidel from "../public/Fidel.jpeg";
import IDC from "../public/IDC.png";
import Grepthor from "../public/Grepthor.jpeg";
function App() {
  return (
    <>
      <section className="mt-24">
        <div className="w-[600px] mx-auto flex items-center gap-15">
          <div className="">
            <h1 className="text-3xl font-bold">Hi, I'm Sai 👋</h1>
            <p className="text-xl text-neutral-600 mt-4">
              A Software Developer who loves building clean, functional, and
              user-focused applications. Passionate about code, learning.
            </p>
          </div>
          <img
            src={User}
            className="h-30 w-50 rounded-full object-cover"
            alt="SelfImage"
          />
        </div>
      </section>

      <section className="w-[600px] mx-auto mt-6">
        <h1 className="text-2xl font-bold">About Me</h1>
        <p className="text-xl text-neutral-600">
          I’m Sai Manikya Mallikharjun Khandavilli, a passionate React.js
          Developer with over 4 years of experience in building responsive,
          high-performance web applications. I specialize in React, JavaScript,
          Tailwind CSS, and modern front-end tools like Vite and CSS Modules.
          I’ve worked remotely with companies such as Fidel Technology Solutions
          and IDC Technologies, delivering scalable solutions across various
          domains. In addition to professional projects.
        </p>
      </section>

      <section className="w-[600px] mx-auto my-6">
        <h1 className="text-2xl font-bold">Work Experience</h1>
        <div className="mt-6">
          <div className="flex">
            <div className="flex items-center gap-15">
              <img src={OLGA} className="w-40 h-40" alt="OLGA" />
              <div className="mt-6">
                <h2 className="text-xl text-neutral-600">
                  OLGA Technologies Pvt Ltd
                </h2>
                <p className="text-xl text-neutral-600">Software Engineer</p>
              </div>
            </div>
            <p className="text-xl text-neutral-600 mt-6">Mar 2024 - Sept 2024</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex">
            <div className="flex">
              <img src={Fidel} className="" alt="OLGA" />
              <div className="">
                <h2 className="">Fidel Technology Solutions Pvt Ltd</h2>
                <p className="">Software Developer</p>
              </div>
            </div>
            <p className="">Nov 2022 - Mar 2024</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex">
            <div className="flex">
              <img src={IDC} className="" alt="IDC" />
              <div className="">
                <h2 className="">IDC Technologies Solutions Pvt Ltd</h2>
                <p className="">Software Developer</p>
              </div>
            </div>
            <p className="">Mar 2022 - Sept 2022</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex">
            <div className="flex">
              <img src={Grepthor} className="" alt="Grepthor" />
              <div className="">
                <h2 className="">Grepthor Software Solutions Pvt Ltd</h2>
                <p className="">Software Developer</p>
              </div>
            </div>
            <p className="">Jan 2020 - Mar 2022</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
