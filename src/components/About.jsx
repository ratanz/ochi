import React from 'react'

const About = () => {
  return (
    <div className='w-full py-4 bg-[#CDEA68] text-black rounded-tl-3xl rounded-r-3xl'>

      <div className='text-one p-16'>
        <h1 className='font-["Neue_Montreal"] text-[3.7vw] leading-[3.4vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses
          that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
      </div>

      <p className='border-t'></p>

      <div className="text-two  px-20 py-6 flex justify-between ">
        <h2 className=''>What you can expect :</h2>

        <div className='flex justify-around w-[45vw]'>
          <p className='w-[15vw] tracking-tight'>
            We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
            <br /> 
            <br />

            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
          </p>
          
          <div className="flex  justify-end mb-6 flex-col">
            <h4 className='mb-4'>S:</h4>
          {['Instagram', 'Behance', 'Facebook', 'X'].map((item, index) => (
            <h1 key={index} className='border-b border-black/70 cursor-pointer'>
              {item}
            </h1>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
