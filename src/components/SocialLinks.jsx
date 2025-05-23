import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {


  const links = [
    {
      id: 1,
      child: (
        <>
        <>Linkedin <FaLinkedin size={20} /></>
        </>
      ),
      href: 'https://www.linkedin.com/in/vikas-kumar-1b5719219/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
        <>Github <FaGithub size={20} /></>
        </>
      ),
      href: 'https://github.com/Vikas35Taliyan'
    },
    // {
    //   id: 3,
    //   child: (
    //     <>
    //     <>Youtube <FaYoutube size={20} /></>
    //     </>
    //   ),
    //   href: 'https://www.youtube.com/channel/UCgZp6YF9RHE9bFzoHBqKV2Q'
    // },
    {
      id: 4,
      child: (
        <>
        <>Hashnode <SiHashnode size={20} /></>
        </>
      ),
      href: 'https://vikas360.hashnode.dev/'
    },
    {
      id: 5,
      child: (
        <>
        <>Mail <HiOutlineMail size={20} /></>
        </>
      ),
      href: 'mailto:vikaskumarr365@gmail.com',
    },
    {
      id: 6,
      child: (
        <>
        <>Resume <BsFillPersonLinesFill size={20} /></>
        </>
      ),
      href: '/resume.docx',
      style: 'rounded-br-md',
      download: true,
    },

  ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id, child, href, style, download}) => 
        <li 
        key={id}
         className={
          'flex justify-between items-center w-40 h-14 px-10 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' +
           " " + style}>
          <a 
          href={href} 
          className='flex justify-between items-center w-full text-white' 
          download={download}
          rel="noreferrer"
          target="_blank">
          {/* rel="noreferrer" */}

        {child}
        </a>
        </li>
        )}
      </ul>
    </div>
  );
}; 

export default SocialLinks;