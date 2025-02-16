import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";

function LandingPage() {
    return (
        <div className='w-ful h-screen bg-zinc-900 pt-1 '>

            <div className='textstructure mt-52 px-20'>
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
                    <div className="masker">
                        <div className="w-fit flex items-center">
                            {index === 1 && (<div className='w-[7.7vw] h-[5.3vw] relative top-2 bg-blue-500 rounded-md'>

                            </div>)}
                            <h1 className="uppercase text-[7.5vw] leading-[6.4vw] tracking-[-0.5vw] font-medium font-['Founders Grotesk']">{item}</h1>
                        </div>
                    </div>
                ))}

            </div>

            <div className='border border-zinc-800 mt-32 flex justify-between items-center px-20 py-5'>
                {["For public and private companies", "From the first pitch to the IPO"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>
                ))}

                <div className="start flex items-center gap-2 group">
                    <div className='px-5 py-2 border border-zinc-600 rounded-full capitalize font-sm relative overflow-hidden group cursor-pointer'>
                        <span className='relative z-10 group-hover:text-black transition-colors duration-300'>start the project</span>
                        <div className='absolute bottom-0 left-0 w-0 h-0 bg-white group-hover:w-full group-hover:h-full transition-all duration-300 ease-out rounded-full'></div>
                    </div>

                    <div className="w-6 text-2xl group cursor-pointer relative overflow-hidden  ">
                        <BsArrowUpRightCircle className='relative z-10 group-hover:text-black transition-colors duration-300' />
                        <div className='absolute bottom-0 left-0 w-0 h-0 bg-white group-hover:w-full group-hover:h-full transition-all duration-300 ease-out rounded-full'></div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default LandingPage
