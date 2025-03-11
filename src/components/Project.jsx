import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useEyeMovement } from './EyeMovement';

const Project = () => {
  
    const {
      leftEyeRef,
      rightEyeRef,
      leftEyePosition,
      rightEyePosition,
      leftIrisPosition,
      rightIrisPosition,
    } = useEyeMovement();
  
  return (
    <div className="eyes w-full h-screen overflow-hidden font-['Neue_Montreal']">
      <div className="relative bg-[#CDEA68] flex items-center justify-center w-full h-full">
        
        <div className="absolute">
          <h1 className="text-[12vw] text-center w-full leading-none tracking-tight uppercase">Ready <br /> to
            start <br /> the project?</h1>
        </div>
        
        <div className="flex gap-10">
          {/* Left eye */}
          <div 
            ref={leftEyeRef}
            className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-white"
          >
            <motion.div 
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center"
              animate={{
                x: leftIrisPosition.x,
                y: leftIrisPosition.y
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.8
              }}
            >
              <motion.div
                className="absolute w-10 h-10 rounded-full bg-zinc-100"
                animate={{
                  x: leftEyePosition.x - leftIrisPosition.x, // Adjust for iris movement
                  y: leftEyePosition.y - leftIrisPosition.y
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  mass: 0.5
                }}
              />
            </motion.div>
          </div>
          
          {/* Right eye */}
          <div
            ref={rightEyeRef}
            className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-white"
          >
            <motion.div 
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center"
              animate={{
                x: rightIrisPosition.x,
                y: rightIrisPosition.y
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.8
              }}
            >
              <motion.div
                className="absolute w-10 h-10 rounded-full bg-zinc-100"
                animate={{
                  x: rightEyePosition.x - rightIrisPosition.x, // Adjust for iris movement
                  y: rightEyePosition.y - rightIrisPosition.y
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  mass: 0.5
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;