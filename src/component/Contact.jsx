import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
      <div className='flex flex-col justify-center p-4 mx-auto h-full max-w-screen '>
        <div className='pb-8'>
          <p className='font-bold text-4xl text-center mb-2 text-gray-200'>Contact Me</p>
          <p className='text-center font-sans text-xl text-gray-300'><span className='text-gray-500 font-bold capitalize'>Have questions? </span>Drop me a message through the form.</p>
        </div>

        <div className='flex justify-center items-center '>
          <form action={import.meta.env.VITE_GETFORM_URL} method='POST' className='w-full text-gray-400 flex flex-col mx-auto md:w-1/2'>
            <input name="name" type="text" className='outline-none p-2 bg-transparent rounded-md border-2' placeholder='Enter your name' required/>
            <input name="email" type="email" className='outline-none p-2 bg-transparent rounded-md border-2 my-4' placeholder='Enter your email' required/>
            <textarea name="message" rows="10" className='p-2 bg-transparent border-2 border-dotted outline-none rounded-md' placeholder='Enter your message' required/>
            <button className='px-6 py-3 mt-3 rounded-md border bg-gradient-to-r from-gray-900 to-gray-600 cursor-pointer mx-auto flex items-center hover:scale-110 duration-300'>Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact