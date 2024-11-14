import React from 'react'
import Image from 'next/image'
import Flogo from '../../../image/acme-logo-dark.webp'
import Blogo from '../../../image/bottom_san_fransisco_skyline.webp'


const footer = () => {
  return (
    <main className = 'w-auto h-auto mt-5 border-t-2 border-gray-500 bg-black'>
      <div>

      <Image src = {Flogo} alt = "Footer Logo"
      width={160}           
      height={160} 
      className='ml-12  mt-7'
      />
       <h2 className='ml-12 mt-3 font-bold text-3xl text-white'> Everything Talent</h2>
      </div>
      <div className=' mx-12 mt-3 uppercase text-sm flex flex-nowrap space-x-80  space-y-5 text-white'>
          <ul>Resources</ul>
          <ul>Get Started</ul>
          <ul>legal</ul>
      </div>
      <div className=' ml-12 list-none text-sm flex flex-nowrap space-x-80 text-slate-400 cursor-pointer space-y-3 '>
      <section className=' space-y-5' >
          
          <li>Blogs</li>
          <li>Success Stories</li>
          <li>Case Studies</li>
          <li>Whitepapers</li>
          <li>FAQs</li>
          <li>Hiring Guides</li>
          <li>Support</li>
      </section>
      <section className=' space-y-5' >
          
          <li>Pricing</li>
          <li>Hiring Solution</li>
          <li>Funded Startups</li>
          <li>Free Trial</li>
          <li>Contact Support</li>
          <li>Request Demo</li>
          <li>Trust</li>
      </section>
      <section className=' space-y-5' >
          
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Case Studies</li>
          <li>Cookie Policy</li>
          <li>CCPA Compliance</li>
          
      </section>
      </div>
      <Image src={Blogo} alt='Bottom Image'
      />
      <span className='text-slate-400 ml-12  mt-5 text-xs cursor-pointer'>© 2024 Everything Talent Labs, LLC. All Rights Reserved.</span>
    </main>
   
  )
}

export default footer
