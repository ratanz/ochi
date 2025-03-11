import { useState, useEffect, useRef } from "react";

export const useEyeMovement = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  const [leftEyePosition, setLeftEyePosition] = useState({ x: 0, y: 0 });
  const [rightEyePosition, setRightEyePosition] = useState({ x: 0, y: 0 });
  const [leftIrisPosition, setLeftIrisPosition] = useState({ x: 0, y: 0 });
  const [rightIrisPosition, setRightIrisPosition] = useState({ x: 0, y: 0 });

  // Track mouse position globally
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Function to calculate the eye's movement based on mouse position
  const calculateEyePosition = (eyeRef, mousePosition) => {
    if (!eyeRef.current) return { x: 0, y: 0 };

    const eye = eyeRef.current.getBoundingClientRect();
    const eyeCenterX = eye.left + eye.width / 2;
    const eyeCenterY = eye.top + eye.height / 2;
    const deltaX = mousePosition.x - eyeCenterX;
    const deltaY = mousePosition.y - eyeCenterY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const radius = eye.width * 0.15; // Limit movement to 15% of the eye width

    const normalizedX =
      distance !== 0 ? (deltaX / distance) * Math.min(distance, radius) : 0;
    const normalizedY =
      distance !== 0 ? (deltaY / distance) * Math.min(distance, radius) : 0;

    return { x: normalizedX, y: normalizedY };
  };

  // Update eye positions whenever the mouse moves
  useEffect(() => {
    const updateEyePositions = () => {
      if (leftEyeRef.current && rightEyeRef.current) {
        const leftPos = calculateEyePosition(leftEyeRef, mousePosition);
        const rightPos = calculateEyePosition(rightEyeRef, mousePosition);

        setLeftEyePosition(leftPos);
        setRightEyePosition(rightPos);

        // Iris moves only 40% as much as the pupil
        setLeftIrisPosition({ x: leftPos.x * 0.4, y: leftPos.y * 0.4 });
        setRightIrisPosition({ x: rightPos.x * 0.4, y: rightPos.y * 0.4 });
      }
    };

    const animationFrame = requestAnimationFrame(updateEyePositions);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  return {
    leftEyeRef,
    rightEyeRef,
    leftEyePosition,
    rightEyePosition,
    leftIrisPosition,
    rightIrisPosition,
  };
};
