import React from 'react';
import heroimage from '../assets/heroimage.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">

    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
     <div className="flex flex-col justify-center h-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        Frontend Developer
      </h2>
      <p className="py-4 max-w-xl text-white">
      Hello visitors, I'm vikas Looking an opportunity as a frontend developer. I am dedicated to creating aesthetically pleasing and highly functional web applications. I am also enthusiastic about exploring new technologies and staying up-to-date with industry best practices.
      If you're interested in seeing some of my work, please visit my GitHub.Feel free to connect with me on LinkedIn and my blog, which is available on Hashnode. Thank you.
      </p>

      <div>
        <Link to="Projects" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-2xl md:rounded-2xl rounded-mg bg-sky-500 cursor-pointer">
          Portfolio
          <span className="group-hover:rotate-90 duration-300">
          <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>
     </div>

     <div>
      <img src={heroimage} alt="profile" className="rounded mx-auto w-1/2 md:w-1/2 " />
     </div>

    </div>

    </div>
  );
}

export default Home;