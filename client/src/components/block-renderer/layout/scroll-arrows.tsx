"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const ScrollArrows = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showScrollToBottom, setShowScrollToBottom] = useState(true);

  // Scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if at the top of the page
      if (scrollTop === 0) {
        setShowScrollToTop(false);
        setShowScrollToBottom(true);
      }
      // Check if at the bottom of the page
      else if (scrollTop + windowHeight >= documentHeight - 1) {
        setShowScrollToTop(true);
        setShowScrollToBottom(false);
      }
      // In between top and bottom
      else {
        setShowScrollToTop(true);
        setShowScrollToBottom(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 space-y-2 flex flex-col items-center z-50">
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-primary hover:bg-secondary text-white shadow-md"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
      {showScrollToBottom && (
        <button
          onClick={scrollToBottom}
          className="p-2 rounded-full bg-primary hover:bg-secondary text-white shadow-md"
          aria-label="Scroll to bottom"
        >
          <ChevronDown size={24} />
        </button>
      )}
    </div>
  );
};
