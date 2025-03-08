import React from 'react'
import { useState, useEffect } from 'react'

const Project = () => {

  
  const [rotate, setRotate] = useState(0)
  const [rotateX, setRotateX] = useState(0)

  
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180)
    })
  })




  return (
    <div className=' eyes bg-[#CDEA68] w-full h-screen overflow-hidden font-["Neue_Montreal"] '>
    <div className=" relative bg-blue-500 flex items-center justify-center w-full h-full ">

        <div className="absolute ">
          <h1 className='text-[12vw] text-center w-full leading-38 uppercase'>Ready <br /> to
          start <br /> the project?</h1>
          </div>  

      <div className=" flex gap-10  ">

        <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
          <div className="relative  w-2/3 h-2/3 rounded-full bg-zinc-900">


            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
              <div className="w-10 h-10 rounded-full bg-zinc-100">
              </div>
            </div>

          </div>
        </div>
        <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
          <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900">

            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
              <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
  )
}

export default Project
