import React from "react";
import my_img from "../assets/profile.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="py-36 md:py-24 bg-gradient-to-b from-black to-gray-800 min-h-screen w-full "
    >
      <div className="max-w-screen-lg flex flex-col justify-center  px-4 h-full mx-auto items-center md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-gray-400 font-bold text-center md:text-start text-5xl md:text-7xl animate-pulse">
            <span className="text-gray-600">I'm a </span>Full Stack Developer
          </h2>
          <p className="text-gray-400 text-lg py-4 max-w-md text-center md:text-start">
            A self-taught{" "}
            <span className="text-gray-300 font-bold">
              Full Stack Developer{" "}
            </span>
            with expertise in{" "}
            <span className="text-gray-100 font-bold">MERN Stack, </span>
            Committed to lifelong learning and embracing new challenges, seeking
            continuous growth and improvement.
          </p>
        </div>
        <div className="pt-5 shadow-2xl rounded-b-full shadow-neutral-400 ">
          <img
            className="rounded-b-full hover:opacity-70 hover:scale-125 duration-1000 cursor-grabbing opacity-70 md:opacity-50 p-15 mx-auto w-sm md:w-lg"
            src={my_img}
            alt="my profile_pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
