/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from "next/image";
import myLogo from '../../../image/nextbase-dark-logo.jpg';
import { ModeToggle } from '../ModeToggle/ModeToggle';
import { Button } from "@/components/ui/button"


const Navbar = () => {
  return (
    <main>
     <nav className='border-b-2 border-gray-500 flex flex-nowrap  h-full bg-black '>
      
      <Image src={myLogo}  alt="Description of the image"
        // width={25}           
        // height={20} 
        className='ml-20 cursor-pointer'/>
       <h1 className='ml-1 mt-3 font-bold text-xl text-white cursor-pointer'>Everything Talent</h1>
        <ul className='flex  flex-nowrap ml-40 space-x-8 mt-4 text-sm text-slate-400 cursor-pointer'>
            <li >Home</li>
            <li>About</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Blog</li>
            <li>Support</li>
        </ul>
        <ModeToggle/>
        <Button variant="outline" className='bg-sky-700 justify-center w-35 h-15 mt-2 ml-20'>Login</Button>

     </nav>
    </main>
  )
}

export default Navbar
