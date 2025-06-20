import React from "react";
import todo from "../assets/portfolio/todo react.PNG";
import wpune from "../assets/portfolio/wpune.PNG";
import capture from "../assets/portfolio/capture02.PNG";
import shopify from "../assets/portfolio/shopify.PNG";
import paytm from "../assets/portfolio/paytm.PNG";
import rode from "../assets/portfolio/rode.PNG";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: todo,
    },
    {
      id: 2,
      src: wpune,
    },
    {
      id: 3,
      src: capture,
    },
    {
      id: 4,
      src: shopify,
    },
    {
      id: 5,
      src: paytm,
    },
    {
      id: 6,
      src: rode,
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-md p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out my some projects here(Goto GitHub)</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <button className="w-1/2  px-6 py-3 m-4 duration-200 hover:scale-105">
                  Netlify
                </button>
                <button className="w-1/2  px-6 py-3 m-4 duration-200 hover:scale-105">
                  Github
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
