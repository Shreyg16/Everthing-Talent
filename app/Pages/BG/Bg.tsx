import React from 'react'
import Image from 'next/image'
import AI from '../../../image/webdevelopment-ai.jpg'
const Bg = () => {
  return (
    <div className=" w-auto h-auto  bg-white dark:bg-black py-20 md:py-22 border-t-2  border-gray-500   " >
      <div className='flex'>

      <h1 className='text-6xl mt-10 ml-40'>
      Your ideas go in <br />
      Your site comes out.</h1>
      <p className='mt-16 ml-48'>Chat with our AI website creator and watch as <br />
         your business story turns into a custom site <br />
          right before your eyes.</p>
      </div>
          <button className="w-40 h-10 ml-[885px] mt-2 rounded-full border-2 border-gray-400">Create with AI</button>
          <div className='w-[1000px] h-[400px] ml-[250px] mt-16' >
            <Image  src={AI} alt='AI photo' className='w-[1000px] h-[400px]'/>
          </div>
    </div>
  )
}

export default Bg
