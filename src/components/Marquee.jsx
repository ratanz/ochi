import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {
    return (
        <div className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-r-3xl'>
            <div className='text border-t-2 border-b-2 border-zinc-300/50 flex gap-10 whitespace-nowrap overflow-hidden '>
                <motion.h1 
                className='text-[17vw] leading-none font-["Founders Grotesk"] font-semibold uppercase mb-4 '>we are ochi</motion.h1>
                <motion.h1 
                className='text-[17vw] leading-none font-["Founders Grotesk"] font-semibold uppercase mb-4 '>we are ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee
