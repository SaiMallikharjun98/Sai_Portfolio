import User from "../../public/sai_image.jpg";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
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
              className="h-[150px] w-[280px] rounded-full object-cover"
              alt="SelfImage"
            />
          </div>
        </div>
        <div className="flex ml-52  mt-5 gap-10">
          <a
            href="https://github.com/SaiMallikharjun98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-5xl text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/smmallikharjunkhandavilli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-5xl text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mallikharjun7965@gmail.com"
            className="text-5xl text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <IoMail />
          </a>
          <a
            href="tel:+918919842383"
            className="text-5xl text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <FaMobile />
          </a>
        </div>
      </section>

      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
