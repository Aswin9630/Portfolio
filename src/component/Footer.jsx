import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='h-auto bg-gradient-to-b from-gray-800 py-10 to-gray-700 w-full'>

      <div className=' text-gray-300 gap-3 w-sm md:w-md shadow-lg shadow-gray-500 mx-5 px-3 border-l-4 border-r-4 border-gray-300 py-2 sm:mx-auto rounded-2xl'>
        <i className=''>The only way to do great work is to love what you do <span className='font-semibold underline'>- Steve Jobs</span></i>
      </div>
        <div>
            <Link to='home' smooth duration={500}><p className='flex items-center gap-3 mx-5 md:mx-9 pt-16 font-bold animate-bounce text-2xl text-gray-500 hover:text-white cursor-pointer'>Back to Home{<FaArrowAltCircleUp size={30}/>}</p></Link>
        </div>
    </div>
  )
}

export default Footer