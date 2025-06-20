import React from "react";
import heroimage from "../assets/heroimage.png";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-black text-white py-10">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl font-bold">Frontend Developer</h2>
          <p className="py-4 max-w-xl">
            Hello visitors, I'm Vikas looking for an opportunity as a frontend
            developer. I am dedicated to creating aesthetically pleasing and
            highly functional web applications. I am also enthusiastic about
            exploring new technologies and staying up-to-date with industry best
            practices. If you're interested in seeing some of my work, please
            visit my GitHub. Feel free to connect with me on LinkedIn and my
            blog, which is available on Hashnode. Thank you.
          </p>
        </div>

        <div>
          <img
            src={heroimage}
            alt="profile"
            className="rounded mx-auto w-full md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
