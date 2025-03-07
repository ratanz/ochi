import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1"  className='w-full bg-[#CDEA68] text-black rounded-tl-3xl rounded-r-3xl'>

      <div className='text-one p-16'>
        <h1 className='font-["Neue_Montreal"] text-[3.7vw] leading-[3.4vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses
          that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
      </div>

      <p className='border-t'></p>

      <div className="text-two px-20 py-6 flex justify-between">
        <h2 className=''>What you can expect :</h2>

        <div className='flex justify-around w-[45vw]'>
          <p className='w-[15vw] tracking-tight'>
            We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
            <br />
            <br />

            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
          </p>

          <div className="flex justify-end mb-14 flex-col">
            <h4 className='mb-4'>S:</h4>
            {['Instagram', 'Behance', 'Facebook', 'X'].map((item, index) => (
              <h1 key={index} className='border-b border-black/70 cursor-pointer'>
                {item}
              </h1>
            ))}
          </div>
        </div>
      </div>

      <div className="info flex gap-5 mt-4 p-20 border-t w-full ">
        
        <div className='btn w-1/2'>
          <h1 className='text-7xl'>Our approach:</h1>
          
          <a 
          href="https://twitter.com/ratanz_codes" 
          target="_blank"
          className='group flex items-center gap-4 px-8 py-4 mt-6 w-48 bg-[#1c1c1c] rounded-full text-white'>
            <span className='uppercase text-sm font-semibold mr-5'>Read More</span>
        
           <div className='relative flex items-center justify-center w-2 h-2'>
              <div className='w-2 h-2 bg-white rounded-full absolute  group-hover:w-10 group-hover:h-10 transition-all duration-300'></div>
              <MdArrowOutward className='absolute  border-none opacity-0 group-hover:opacity-100 transition-all duration-300 text-black text-2xl' />  
            </div>
          </a>
        </div>

        <div className="w-1/2">
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt=""
                className='rounded-xl  '
            />
        </div>

      </div>

    </div>
  )
}

export default About
