"use client";

import { ContactCTAProps } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useIsMobile } from "@/utils/scrollUtils";

export function ContactCTA(data: Readonly<ContactCTAProps>) {
  if (!data) return null;

  const { title, subtitle, buttonText, buttonLink } = data;
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

  const titleDotsAnimation = isMobile ? {} : {
    y: [0, -10, 0],
    x: [0, 10, 0],
    rotate: [0, 180, 0],
    opacity: [0.5, 1, 0.5]
  };

  const titleDotsTransition = isMobile ? {} : {
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut"
  };

  const buttonGradientAnimation = isMobile ? {} : {
    x: ["0%", "100%"]
  };

  const buttonGradientTransition = isMobile ? {} : {
    duration: 3,
    repeat: Infinity,
    ease: "linear"
  };

  return (
    <section className="relative w-full max-w-[2000px] mx-auto overflow-hidden">
      {/* Animated mesh gradient background */}
      <motion.div
        animate={meshGradientAnimation}
        transition={meshGradientTransition}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-primary via-secondary to-primary blur-[100px] -top-1/2 -left-1/2" />
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-secondary via-primary to-secondary blur-[100px] -bottom-1/2 -right-1/2" />
      </motion.div>

      {/* Floating shapes */}
      <motion.div
        animate={floatingShape1Animation}
        transition={floatingShape1Transition}
        className="absolute left-[15%] top-[15%] w-32 h-32 border-2 border-primary/20 rounded-full"
      />
      <motion.div
        animate={floatingShape2Animation}
        transition={floatingShape2Transition}
        className="absolute right-[20%] bottom-[15%] w-40 h-40 border-2 border-secondary/20 rounded-lg -rotate-12"
      />

      <div className="container relative py-32">
        {/* Content Container */}
        <div className="relative flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.8 }}
            className="max-w-3xl space-y-8"
          >
            {/* Title with Animated Dot */}
            <h2 className="relative text-4xl font-bold text-text sm:text-5xl inline-flex items-center gap-4">
              {title}
              <motion.div
                animate={titleDotsAnimation}
                transition={titleDotsTransition}
                className="inline-flex"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary/50 rounded-full blur-sm -translate-y-2" />
                <div className="w-2 h-2 bg-primary/25 rounded-full blur-md -translate-y-4" />
              </motion.div>
            </h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0 : 0.2 }}
              className="text-lg leading-relaxed text-text-secondary mx-auto max-w-2xl"
            >
              {subtitle}
            </motion.p>

            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0 : 0.4 }}
              className="pt-8"
            >
              <Link
                href={buttonLink}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-medium text-white transition-all hover:shadow-xl hover:shadow-primary/20"
              >
                <span className="relative z-10">{buttonText}</span>
                <ArrowRight className="relative z-10 size-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                <motion.div
                  className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-secondary to-primary"
                  animate={buttonGradientAnimation}
                  transition={buttonGradientTransition}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: isMobile ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0 : 1, delay: isMobile ? 0 : 0.6 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <div className="mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
} 