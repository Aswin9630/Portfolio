import React, { useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [ navIcon, setNavIcon ] = useState(false);

    const links = [
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"skills"
        },
        {
            id:3,
            link:"project"
        },
        {
            id:4,
            link:"about"
        },
        {
            id:5,
            link:"contact"
        },
    ]

  return (
    <div className='fixed z-50 bg-gradient-to-b from-gray-700 to-black h-20 text-white items-center w-full flex justify-between'>
        <div>
            <h1 className='font-bold text-4xl ml-4 hover:scale-95 hover:rotate-2 hover:duration:500 cursor-pointer animate-bounce'>Aswin Krishna</h1>
        </div>

        <ul className='hidden md:flex mr-10'> 
            {
                links.map((link, id)=><li key={id} className='text-gray-400 px-4 cursor-pointer hover:scale-125 duration-400 capitalize'><Link to={link.link} smooth duration={500}>{link.link}</Link></li> )
            }
                     
        </ul>

        <div onClick={()=>setNavIcon(!navIcon)} className='cursor-pointer md:hidden pr-4 z-10 text-gray-500'>
            {navIcon ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

       {navIcon && <ul className='flex flex-col justify-center items-center absolute h-screen top-0 left-0 w-full bg-gradient-to-b from-black to-gray-800'>
            {links.map((link)=><li className='cursor-pointer text-4xl px-4 text-gray-500 hover:text-white capitalize m-5'><Link onClick={()=>setNavIcon(!navIcon)} to={link.link}>{link.link}</Link></li>)}
        </ul>}
        
    </div>
  )
}

export default Navbar