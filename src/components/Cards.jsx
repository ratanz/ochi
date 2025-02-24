import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen flex items-center px-12 gap-5 bg-zinc-100'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className="card relative w-full h-full rounded-xl flex items-center justify-center bg-[#004D43]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute py-1 px-3 rounded-full text-[#CDEA68] left-8 bottom-7 border border-[#CDEA68]'> ©2019-2024</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
                <div className="card relative w-1/2 flex items-center justify-center rounded-xl h-full bg-[#212121]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    
                    <button className='group absolute py-1 px-3 rounded-full text-[#eaeaea] tracking-tight left-8 bottom-7 border border-[#eaeaea] uppercase overflow-hidden'>
                    <span className='relative z-10 group-hover:text-zinc-900 transition-colors duration-300'>rating 5.0 on clutch</span>
                    <div className='absolute bottom-0 left-0 w-full h-0 bg-[#eaeaea] group-hover:h-full transition-all duration-300 ease-out '></div>
                    </button>
                </div>

                <div className="card relative w-1/2 flex justify-center items-center rounded-xl h-full bg-[#212121]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    
                    <button className='group absolute py-1 px-3 rounded-full text-[#eaeaea] tracking-tight left-8 bottom-7 border border-[#eaeaea] uppercase overflow-hidden'>
                  
                        <span className='relative z-10 group-hover:text-zinc-900 transition-colors duration-300'>business bootcamp alumini</span>
                        <div className="absolute bottom-0 left-0 w-full h-0 bg-[#eaeaea] group-hover:h-full transition-all 
                        duration-300 ease-out"></div>

                    </button>
                </div>

            </div>
        </div>
    )
}

export default Cards
