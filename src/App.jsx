import User from "../public/sai_image.jpg";
function App() {
  return (
    <>
      <section className="mt-24">
        <div className="w-[600px] mx-auto flex items-center gap-10">
          <div className="">
            <h1 className="text-2xl font-bold">Hi, I'm Sai 👋</h1>
            <p className="text-xl text-neutral-600">
              A Software Developer who loves building clean, functional, and
              user-focused applications. Passionate about code, learning.
            </p>
          </div>
          <img src={User} className="h-10 w-10 rounded-full object-cover" alt="SelfImage" />
        </div>
      </section>
    </>
  );
}

export default App;
