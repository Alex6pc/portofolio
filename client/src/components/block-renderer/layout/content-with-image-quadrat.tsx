"use client";

import React from "react";
import type { ContentWithImageQuadratProps } from "@/types";
import { StrapiImage } from "@/components/custom/strapi-image";
import { motion } from "framer-motion";
import { useIsMobile } from "@/utils/scrollUtils";

export default function ContentWithImageQuadrat(data: Readonly<ContentWithImageQuadratProps>) {
  if (!data) return null;
  const { reverse, image, heading, subHeading, text } = data;
  const reverseStyle = reverse ? "md:flex-row" : "md:flex-row-reverse";
  const isMobile = useIsMobile();

  // Animation configs - disabled on mobile
  const meshGradientAnimation = isMobile ? {} : {
    scale: [1, 1.1, 1],
    rotate: [0, 5, -5, 0],
    x: [-50, 50, -50],
    y: [-30, 30, -30]
  };

  const meshGradientTransition = isMobile ? {} : {
    duration: 30,
    repeat: Infinity,
    ease: "easeInOut"
  };

  const floatingShape1Animation = isMobile ? {} : {
    rotate: [0, 360],
    y: [0, -30, 0],
    x: [-20, 20, -20],
    scale: [1, 1.1, 1]
  };

  const floatingShape1Transition = isMobile ? {} : {
    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
  };

  const floatingShape2Animation = isMobile ? {} : {
    rotate: [0, -360],
    x: [-30, 30, -30],
    y: [-20, 20, -20],
    scale: [1, 0.9, 1]
  };

  const floatingShape2Transition = isMobile ? {} : {
    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
    x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    scale: { duration: 9, repeat: Infinity, ease: "easeInOut" }
  };

  const headingDotsAnimation = isMobile ? {} : {
    y: [0, -10, 0],
    x: [0, 10, 0],
    rotate: [0, 180, 0],
    opacity: [0.5, 1, 0.5]
  };

  const headingDotsTransition = isMobile ? {} : {
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut"
  };

  return (
    <section className="relative w-full max-w-[2000px] mx-auto bg-background py-16 md:py-24 overflow-hidden">
      {/* Animated mesh gradient background */}
      <motion.div
        animate={meshGradientAnimation}
        transition={meshGradientTransition}
        className="absolute inset-0 opacity-50 max-w-[2000px]"
      >
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-primary via-secondary to-primary blur-[100px] -top-1/2 -left-1/2" />
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-secondary via-primary to-secondary blur-[100px] -bottom-1/2 -right-1/2" />
      </motion.div>

      {/* Floating shapes */}
      <motion.div
        animate={floatingShape1Animation}
        transition={floatingShape1Transition}
        className="absolute left-[15%] top-[5%] w-24 h-24 border-2 border-primary/20 rounded-full"
      />
      <motion.div
        animate={floatingShape2Animation}
        transition={floatingShape2Transition}
        className="absolute right-[20%] bottom-[15%] w-32 h-32 border-2 border-secondary/20 rounded-lg -rotate-12"
      />

      <div className={`container relative flex flex-col gap-16 md:gap-20 ${reverseStyle}`}>
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : (reverse ? -50 : 50) }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center px-2 md:px-8 pb-8 md:pb-0"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0 : 0.1 }}
            className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-4 relative inline-flex items-center gap-4"
          >
            {heading}
            <motion.div
              animate={headingDotsAnimation}
              transition={headingDotsTransition}
              className="inline-flex"
            >
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-2 h-2 bg-primary/50 rounded-full blur-sm -translate-y-2" />
              <div className="w-2 h-2 bg-primary/25 rounded-full blur-md -translate-y-4" />
            </motion.div>
          </motion.h2>

          {/* Subheading */}
          {subHeading && (
            <motion.h3
              initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0 : 0.15 }}
              className="text-xl md:text-2xl font-medium text-text-secondary mb-6"
            >
              {subHeading}
            </motion.h3>
          )}

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0 : 0.2 }}
            className="text-base md:text-lg text-text-secondary leading-relaxed max-w-prose mb-10"
          >
            {text}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0 : 0.3 }}
            className="flex gap-8"
          >
            {/* Social icons */}
            {/* <a href="#" className="text-text-secondary hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a> */}
            <a href="https://www.linkedin.com/in/alexandros-notis-7b2647183/" className="text-text-secondary hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section with Background Frame */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : (reverse ? 50 : -50) }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.8, ease: "easeOut" }}
          className="relative"
        >

          {/* Image container */}
          <div className="relative rounded-[2rem] overflow-hidden z-50 shadow-custom">
            <StrapiImage
              src={image.url}
              alt={image.name}
              width={380}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
