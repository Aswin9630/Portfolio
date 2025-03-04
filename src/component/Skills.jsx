import React, { useState } from 'react'

import { BACKENDSKILLS, FRONTENDSKILLS } from '../utils/constants'



const Skills = () => {

  const [frontEnd,setFrontEnd] = useState(true);
  const [backEnd,setBackEnd] = useState(false);

  const toggle = (type)=>{
    if(type=="frontend"){
      setFrontEnd(true);
      setBackEnd(false)
    }else{
      setFrontEnd(false);
      setBackEnd(true)
    }
  }

  return (
    <div name="skills" className='min-h-screen w-full bg-gradient-to-b from-gray-800 to-black font-bold font-sans overflow-hidden'>
      <div className='max-w-screen-lg flex flex-col p-4 mx-auto justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl text-gray-200 text-center py-5 '>Skills</p>
        </div>
        <div className='flex flex-row justify-around mx-auto w-full sm:w-md border-2 border-gray-500 rounded-full shadow-lg shadow-gray-500 p-2'>
            <button onClick={()=>toggle("frontend")} className='border-r-2 border-t-2 border-l-2 w-1/2 mx-2 border-gray-500 rounded-full px-3 py-3 hover:scale-110 duration-500  shadow-lg shadow-gray-700 hover:shadow-lg hover:shadow-gray-300 cursor-pointer'>Frontend</button>
            <button onClick={()=>toggle("backend")} className='border-l-2  border-r-2 border-t-2 w-1/2 mx-2 border-gray-500 rounded-full px-3 py-3 hover:scale-110 duration-500  shadow-lg shadow-gray-700 hover:shadow-lg hover:shadow-gray-300 cursor-pointer'>Backend</button>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-5 w-full'>
          {frontEnd && FRONTENDSKILLS.map(({id,src,name,color})=>(
             <div key={id} className={`flex flex-col my-5 px-2 py-2 rounded-xl mx-auto shadow-md ${color}`}>
               <img src={src} alt="skill_img" className={`${color} cursor-pointer  h-36 w-32 sm:w-32 sm:h-32 rounded-lg hover:scale-95 duration:500`}/>
               <p className='text-center uppercase text-gray-400 font-bold'>{name}</p>
           </div>
          ))}
         
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-5 w-full'>
          {backEnd && BACKENDSKILLS.map(({id,src,name,color})=>(
             <div key={id} className={`flex flex-col my-5 px-2 py-2 rounded-xl mx-auto shadow-md ${color}`}>
               <img src={src} alt="skill_img" className={`${color} cursor-pointer  h-36 w-32 sm:w-32 sm:h-32 rounded-lg hover:scale-95 duration:500`}/>
               <p className='text-center uppercase text-gray-400 font-bold'>{name}</p>
           </div>
          ))}
         
        </div>
      </div>
    </div>
  )
}

export default Skills