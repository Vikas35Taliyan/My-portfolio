import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import git from "../assets/git.png";

const TechToolBox = () => {
  const tech = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: bootstrap, title: "Bootstrap", style: "shadow-yellow-500" },
    { id: 4, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 5, src: javascript, title: "Javascript", style: "shadow-yellow-500" },
    { id: 6, src: react, title: "React", style: "shadow-sky-500" },
    { id: 7, src: express, title: "Express", style: "shadow-white" },
    { id: 8, src: mongo, title: "Mongodb", style: "shadow-green-500" },
    { id: 9, src: git, title: "Git", style: "shadow-orange-500" },
  ];

  return (
    <div
      id="skills"
      className="w-full min-h-screen bg-gray-900 text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechToolBox;
