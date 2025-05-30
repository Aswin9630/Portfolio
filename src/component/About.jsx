import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { EMAIL_ID, GITHUB_URL, LINKEDIN_URL } from "../utils/constants";
import { PiReadCvLogoFill } from "react-icons/pi";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen text-slate-300 bg-gradient-to-b from-gray-800 to-black pb-24 font-sans p-2"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-35">
          <h2 className="text-4xl mt-15 font-bold text-center">About</h2>
        </div>
        <p className="text-lg mt-5">
          Hello! I’m{" "}
          <span className="text-white font-bold ">Aswin Krishna, </span>a
          self-taught Full Stack Developer.
        </p>
        <br />
        <p>
          My journey into web development began with one of the biggest and most
          challenging decisions of my life. I was already working in another
          field —a comfortable and secure space, but my strong passion for
          technology pushed me to step out of my comfort zone and pursue what
          truly excited me. Transitioning into the IT industry was not easy, but
          my determination to learn, build, and grow kept me going.
        </p>
        <br />
        <p>
          I dedicated myself to mastering{" "}
          <span className="text-white font-semibold italic">JavaScript, </span>{" "}
          and the <span className="text-white font-semibold italic">MERN </span>
          stack (MongoDB, Express.js, React.js, Node.js) through{" "}
          <span className="text-white font-semibold italic">
            self-learning,{" "}
          </span>
          hands-on projects, and continuous problem-solving.
        </p>
        <br />
        <p>
          Over time, I have individually built and deployed full-stack
          applications, including:
        </p>
        <ul className="flex flex-col gap-3">
          <li>
            🔹
            <span className="text-gray-100 font-extrabold underline italic">
              TECHTRIBE
            </span>{" "}
            A project born from my own struggles at the beginning of my IT
            career. Like many beginners, I had endless doubts—
            <span className="text-white font-semibold italic">
              Where do I start? What should I choose in IT?{" "}
            </span>
            To solve this problem, I created TECHTRIBE, an online mentorship and
            communication platform to help aspiring developers navigate their
            journey with clarity.
          </li>
          <li>
            🔹
            <span className="text-gray-100 font-extrabold underline italic">
              AKTRENDZ
            </span>{" "}
            A fully functional e-commerce platform, handling user
            authentication, cart management, and secure transactions.
          </li>
        </ul>

        <div className="mt-5">
          <h2 className="font-extrabold underline text-xl">Goal:</h2>
          <p className="pl-9">
            I aim to be a{" "}
            <span className="text-white font-semibold">
              valuable team member
            </span>{" "}
            in an
            <span className="text-white font-semibold">
              {" "}
              innovative and forward-thinking organization
            </span>{" "}
            that is dedicated to building
            <span className="text-white font-semibold">
              {" "}
              cutting-edge solutions for the next generation.
            </span>
            <br />
            <br />I am committed to{" "}
            <span className="text-white font-semibold">
              continuous learning, problem-solving,
            </span>
            and staying ahead of industry trends to create
            <span className="text-white font-semibold">
              {" "}
              user-centric, high-performance applications.
            </span>
            My passion lies in leveraging modern technologies to develop
            solutions that
            <span className="text-white font-semibold">
              {" "}
              enhance user experiences, optimize workflows,
            </span>{" "}
            and
            <span className="text-white font-semibold">
              {" "}
              shape the future of web development.
            </span>
          </p>
        </div>

        <div className="mt-15 flex flex-col gap-3">
          <p className="font-semibold flex flex-row gap-3 underline">
            Feel free to connect with me on:
            <a
              target="_blank"
              href={LINKEDIN_URL}
              className="hover:rotate-12 duration-300"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              target="_blank"
              href={`mailto:${EMAIL_ID}`}
              className="hover:rotate-12 duration-300"
            >
              <MdEmail size={25} />
            </a>
            <a
              target="_blank"
              href={GITHUB_URL}
              className="hover:rotate-12 duration-300"
            >
              <FaGithub size={25} />
            </a>
          </p>
          <p className="font-semibold flex flex-row gap-3 underline">
            {" "}
            Download my resume:
            <a
              target="_blank"
              download={true}
              href="../cv.pdf"
              className="hover:rotate-y-180"
            >
              <PiReadCvLogoFill size={25} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
