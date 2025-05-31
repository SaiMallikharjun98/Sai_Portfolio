import User from "../../public/sai_image.jpg";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
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
