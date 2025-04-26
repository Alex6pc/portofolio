"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { ContactSectionProps } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { ContactForm } from "./contact-form";

export function ContactSection(data: Readonly<ContactSectionProps>) {
  if (!data) return null;
  const { title, subtitle, centered = true } = data;
  const [isVisible, setIsVisible] = useState(false);

  // Add this effect to trigger animations
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const headingStyle = centered ? "flex flex-col text-center" : "";

  return (
    <section className="w-full bg-background py-20">
      <div className={cn("container items-center justify-between gap-4", headingStyle)}>
        <AnimatePresence mode="wait">
          {isVisible && (
            <div className="flex flex-col gap-5">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bold uppercase text-primary tracking-wide"
              >
                {subtitle}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-heading text-3xl font-bold sm:text-4xl mb-2 text-text"
              >
                {title}
                {/* Animated underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
                />
              </motion.h2>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isVisible && (
            <ContactForm />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}