import React from "react";
import { motion } from "framer-motion";
import { useEyeMovement } from "./EyeMovement";

const Eyes = () => {
  const {
    leftEyeRef,
    rightEyeRef,
    leftEyePosition,
    rightEyePosition,
    leftIrisPosition,
    rightIrisPosition,
  } = useEyeMovement();

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-0.7"
        className="flex items-center justify-center w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="flex gap-10">
          {/* Left Eye */}
          <div
            ref={leftEyeRef}
            className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-white"
          >
            <motion.div
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center"
              animate={{ x: leftIrisPosition.x, y: leftIrisPosition.y }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.8,
              }}
            > 
              <motion.div
                className="absolute w-10 h-10 rounded-full bg-zinc-100"
                animate={{
                  x: leftEyePosition.x - leftIrisPosition.x,
                  y: leftEyePosition.y - leftIrisPosition.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  mass: 0.5,
                }}
              />
            </motion.div>
          </div>

          {/* Right Eye */}
          <div
            ref={rightEyeRef}
            className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-white"
          >
            <motion.div
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center"
              animate={{ x: rightIrisPosition.x, y: rightIrisPosition.y }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.8,
              }}
            >
              <motion.div
                className="absolute w-10 h-10 rounded-full bg-zinc-100"
                animate={{
                  x: rightEyePosition.x - rightIrisPosition.x,
                  y: rightEyePosition.y - rightIrisPosition.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  mass: 0.5,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
