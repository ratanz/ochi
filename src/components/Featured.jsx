import React, { useState } from 'react'
import dot from '../assets/dot.png'
import { motion } from "framer-motion"

const featuredProjects = [
    {
        title: "SALIENCE",
        image: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
        tags: ["BRAND IDENTITY", "DESIGN SYSTEM", "WEBSITE"]
    },
    {
        title: "CREATIVE SUPPLY",
        image: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png",
        tags: ["BRAND STRATEGY", "VISUAL IDENTITY"]
    },
    {
        title: "VISE",
        image: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
        tags: ["COMPANY PRESENTATION", "PITCH DECK"]
    },
    {
        title: "TRAWA",
        image: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
        tags: ["BRANDED TEMPLATE", "SOCIAL MEDIA"]
    }
]

const Featured = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className='w-full py-20 bg-zinc-100 text-zinc-900'>
            <div className="w-full px-20 border-b border-zinc-800 pb-16">
                <h1 className='text-4xl font-["Neue_Montreal"] uppercase'>Featured Projects</h1>
            </div>

            <div className="card-wrapper">
                <div className="cards w-full p-10 mt-10 flex flex-wrap">
                    {featuredProjects.map((project, index) => (
                        <div 
                            key={index} 
                            className="cardcontainer w-1/2 h-[77vh] mb-44"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative card w-full h-full p-2">
                                <h1 className='title p-2 flex items-center uppercase font-["Neue_Montreal"] font-light'>
                                    <img className='w-10 h-10' src={dot} alt="dot" />
                                    {project.title}
                                </h1>

                                <div className="relative overflow-hidden rounded-xl ">
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 , x: 20 }}
                                        animate={{ 
                                            opacity: hoveredIndex === index ? 1 : 0,
                                            y: hoveredIndex === index ? 0 : 20,
                                            x: hoveredIndex === index ? 0 : 40,
                                            scale: 1.5,
                                            

                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className='absolute z-50 bg-black/50 w-full h-full flex items-center justify-center'
                                    >
                                        <h1 className='text-[3vw] text-white font-["Neue_Montreal"] font-medium whitespace-nowrap'>
                                            {project.title}
                                        </h1>
                                    </motion.div>

                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredIndex === index ? 0.4 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-black rounded-xl"
                                    />

                                    <img 
                                        className='w-full h-full object-cover rounded-xl transition-transform duration-500'
                                        style={{
                                            transform: hoveredIndex === index ? 'scale(1.03)' : 'scale(1)'
                                        }}
                                        src={project.image} 
                                        alt={project.title} 
                                    />
                                </div>

                                <div className="tags mt-5 flex gap-3">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className='group relative px-5 py-2 border-2 border-zinc-900/50 rounded-full text-sm uppercase font-["Neue_Montreal"] font-light cursor-pointer overflow-hidden'
                                        >
                                            <span className='relative z-10 group-hover:text-zinc-100 transition-colors duration-300'>{tag}</span>
                                            <div className="absolute bottom-0 left-0 w-0 h-0 bg-black group-hover:w-full group-hover:h-full duration-300 ease-out rounded-full"></div>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured
