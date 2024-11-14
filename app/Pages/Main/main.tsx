/* eslint-disable react/no-children-prop */
import React from 'react'
import Image from 'next/image'
import Road from '../../../image/1698315813135.jpeg'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { CardDemo } from '@/components/ui/carddemo';

const main = () => {
  return (
    <> 
    <div className='w-auto  bg-white dark:bg-black py-20 md:py-22'>
      <h1 className='ml-40 mt-7 w-2/5 text-6xl  '>OUR JOURNEY </h1>
      <div className='flex'>
      <div>
        <p className=' ml-40 mt-8 text-lg '>I am a paragraph. Click here to add your own text <br />
        and edit me. It’s easy. Just click “Edit Text” or double click <br />
         me to add your own content and make changes to the <br />
          font. I’m a great place for you to tell a story and let <br />
           your users know a little more about you.</p> <br />
         
        
         <HoverBorderGradient className="w-40 h-10">FeedBack</HoverBorderGradient>
              
      </div>
      <div>
     <CardDemo/>
      
      </div>
      </div> <br /> <br />
     <div className='w-auto h-200px mt-5 border-t-2 flex  border-gray-500 bg-black text-white '>
      <div className=" w-2/4  mt-9 h-auto">
      <p className=' mt-8 ml-10 uppercase text-5xl '>Our Mission</p>
      <h2 className='mt-4 ml-10 text-3xl'>Redefining the Way <br />
      We Move</h2>
      <p className='mt-4 ml-10 text-lg font-thin'>
      I am a paragraph. Click here to add your
      own text and edit me. It’s easy. Just click “Edit Text” or double click me to 
      add your own content and make changes to the font. I’m a great place for you to  
      tell a story and let your users know a little more about you. This is a great space 
       to write a long text about your company and your services. You can use this space to go 
       into a little more detail about your company. Talk about your team and 
      what services you provide.
      </p>
      </div>
      <div>

      <Image src={Road} alt='Photo' width={620}  className=' ml-12 object-cover h-100px mt-12 rounded-lg'/>
      </div>

     
     </div>
      
      
    </div>
      
    </>
  )
}

export default main
