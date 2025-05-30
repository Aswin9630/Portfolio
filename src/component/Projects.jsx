import techtribe_img from "../assets/projects/techtribe.png";
import aktrendz_img from "../assets/projects/aktrendz.png";
import static_img from "../assets/projects/static.png";
import nextstay_img from "../assets/projects/nextstay.png";
import {
  ECOMMERCE_CODE,
  ECOMMERCE_LIVE,
  ECOMMERCE_STATIC,
  ECOMMERCE_STATIC_CODE,
  GITHUB_URL,
  NEXTSTAY,
  NEXTSTAY_CODE,
  TECHTRIBE,
} from "../utils/constants";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: techtribe_img,
      name: "TECHTRIBE - Online mentorship & communication platform",
      liveLink: TECHTRIBE,
      codeLink: GITHUB_URL,
    },
    {
      id: 2,
      src: nextstay_img,
      name: "NEXTSTAY - Hotel Booking platform",
      liveLink: NEXTSTAY,
      codeLink: NEXTSTAY_CODE,
    },
    {
      id: 3,
      src: static_img,
      name: "Ecommerce - (Static)",
      liveLink: ECOMMERCE_STATIC,
      codeLink: ECOMMERCE_STATIC_CODE,
    },
    {
      id: 4,
      src: aktrendz_img,
      name: "AKTRENDZ Store - An Ecommerce platform",
      liveLink: ECOMMERCE_LIVE,
      codeLink: ECOMMERCE_CODE,
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen md:h-screen"
    >
      <div className="max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <h2 className="text-center text-white font-bold font-sans text-4xl py-5">
            Projects
          </h2>
        </div>

        <div className="mt-15 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-12">
          {projects.map(({ id, src, name, liveLink, codeLink }) => (
            <div key={id} className="shadow-lg shadow-gray-600 rounded-xl">
              <p className="text-gray-400 capitalize font-normal p-2 m-2 text-center sm:h-14">
                {name}
              </p>
              <img
                src={src}
                alt="projects_img"
                className="mx-auto sm:w-2/3 h-56 rounded-lg cursor-grab"
              />

              <div className="text-white flex justify-around m-2">
                <a href={liveLink} target="_blank">
                  <button className="border border-gray-500 px-3 py-1 rounded-lg cursor-pointer shadow-lg hover:duration-300 hover:scale-110">
                    Live
                  </button>
                </a>
                <a href={codeLink} target="_blank">
                  <button className="border border-gray-500 px-3 py-1 rounded-lg cursor-pointer shadow-lg hover:duration-300 hover:scale-110">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
