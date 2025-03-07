import React from 'react'
import { motion } from "motion/react"


const Marquee = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-r-3xl'>
            <div className='text border-t-2 border-b-2 border-zinc-300/50 flex  whitespace-nowrap overflow-hidden '>
                <motion.h1
                    initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ ease: 'linear', duration : 10,  repeat: Infinity }}
                    className='text-[17vw] leading-none font-["Neue_Montreal"] font-semibold uppercase mb-4 pr-10 '>we are ochi</motion.h1>
                <motion.h1
                    initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
                    className='text-[17vw] leading-none font-["Neue_Montreal"] font-semibold uppercase mb-4 pr-10 '>we are ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee
