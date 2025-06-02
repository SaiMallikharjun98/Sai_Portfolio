import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const Contact = () => {
  const firebaseUrl = import.meta.env.VITE_API_KEY;
  const { register, handleSubmit, reset } = useForm();
  const submitHandler = (data) => {
    axios.post(`${firebaseUrl}.contact.json`, { data });
    reset();
  };

  return (
    <>
      <section id="contact" className="bg-[#333] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-10">
            Contact Me
          </h1>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white font-medium">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder="Enter Your Name"
                required
                autoComplete="name"
                className="p-3 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <label htmlFor="mail" className="text-white font-medium">
                Email
              </label>
              <input
                type="email"
                id="mail"
                {...register("mail")}
                placeholder="Enter Your Email"
                required
                autoComplete="email"
                className="p-3 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <label htmlFor="subject" className="text-white font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject")}
                placeholder="Enter Subject"
                required
                autoComplete="off"
                className="p-3 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <label htmlFor="message" className="text-white font-medium">
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                placeholder="Enter Your Message"
                required
                autoComplete="off"
                rows="5"
                className="p-3 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
