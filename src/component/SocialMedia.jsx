import React from 'react';
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import {  GITHUB_URL, LINKEDIN_URL } from '../utils/constants';
import { PiReadCvLogoFill } from 'react-icons/pi';

const SocialMedia = () => {


  const links = [
    { 
      id:1,
      child:(
        <>
        LinkedIn <FaLinkedin size={30}/>
    </>
      ),
      href:LINKEDIN_URL,
      style:"rounded-tr-md"
    },
    {
      id:2,
      child:(
        <>
        GIthub <FaGithub size={30}/>
    </>
      ),
      href:GITHUB_URL
    },
    {
      id:3,
      child:(
        <>
        Resume <PiReadCvLogoFill size={30}/>
    </>
      ),
      href:"./cv.pdf",
      download:true,
      style:"rounded-br-md"
    },
  ]


  return (
    <div className='hidden sm:flex sm:flex-col left-0 bottom-5 sm:top-[35%] fixed'>
        <ul className=''>
          {
            links.map(({id,child,href,download,style})=>(
              <li key={id} className={'flex justify-between items-center font-bold text-white w-40 h-14 bg-gray-700 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-lg duration-300' +" "+style}>
              <a href={href} target='_blank' download={download} className='flex justify-between items-center w-full'>
                  <>
                      {child}
                  </>
              </a></li>
            ))
          }
           
        </ul>
    </div>
  )
}

export default SocialMedia