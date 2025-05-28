// src/utils/scrollUtils.js
import { useEffect, useState } from "react";

// Hook to detect mobile devices
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

export const scrollToComponent = (id, duration = 800) => {
  const element = document.querySelector(id)
  if (!element) { 
    console.warn(`Element with ID ${id} not found.`)
    return
  }

  const headerOffset = 100 // Replace with your header height in pixels
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset
  const startPosition = window.pageYOffset
  const distance = elementPosition - startPosition
  let startTime = null

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1) // Ensure progress doesn't exceed 1
    const easing = easeInOutQuad(progress) // Easing function for a smoother effect

    window.scrollTo(0, startPosition + distance * easing)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

// Easing function for smoother scrolling
const easeInOutQuad = (t) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
} 