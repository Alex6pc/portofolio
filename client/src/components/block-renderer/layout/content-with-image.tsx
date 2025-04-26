"use client";

import React from "react";
import type { ContentWithImageProps } from "@/types";
import { StrapiImage } from "@/components/custom/strapi-image";
import { motion } from "framer-motion"; 

export default function ContentWithImage(data: Readonly<ContentWithImageProps>) {
  if (!data) return null;
  const { reverse, image, heading, subHeading, text } = data;
  const revereStyle = reverse ? "md:flex-row-reverse" : "md:flex-row";

  const getListItems = (subHeading: string) => {
    switch (subHeading) {
      case "01":
        return [
          "Responsive Webdesigns umsetzen.",
          "Website-Leistung für schnellere Ladezeiten optimieren.",
          "Moderne Frameworks verwenden, um dynamische Nutzererlebnisse zu schaffen."
        ];
      case "02":
        return [
          "Sichere und effiziente serverseitige Anwendungen erstellen.",
          "Nahtlose Integration mit APIs gewährleisten.",
          "Fokus auf skalierbare und optimierte Backend-Architektur."
        ];
      case "03":
        return [
          "Optisch ansprechende und funktionale Benutzeroberflächen entwickeln.",
          "Nahtlose Kommunikation zwischen Front-End und Back-End gewährleisten.",
          "Optimierung für Leistung, Skalierbarkeit und Sicherheit."
        ];
      default:
        return [];
    }
  };

  const listItems = getListItems(subHeading);

  return (
    <section className="relative w-full bg-background py-16 md:py-24">
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-decorative to-transparent" />

      {subHeading === "01" && (
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-6xl font-bold text-text mb-20"
        >
          Services
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-primary mx-auto mt-4"
          />
        </motion.h1>
      )}

      <div className={`container relative flex flex-col gap-16 md:gap-10 ${revereStyle}`}>
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 pt-8 md:pt-0"
        >
          <StrapiImage
            src={image.url}
            alt={image.name}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center px-4 md:px-0 pb-8 md:pb-0"
        >
          {/* Number/Index with Animated Line */}
          <div className="relative">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-border-decorative text-4xl font-bold mb-4 relative z-10"
            >
              {subHeading}
            </motion.span>

            {/* Animated Line */}
            <motion.div
              className="absolute top-1/2 left-0 h-[2px] bg-border-decorative"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.2
              }}
            />
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold text-text mb-6"
          >
            {heading}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg leading-relaxed"
          >
            {text}
          </motion.p>

          {/* List Items */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 space-y-3"
          >
            {listItems.map((item, index) => (
              <li key={index} className="flex items-center text-text-secondary">
                <span className="mr-2 text-primary">▸</span>
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Bottom Border Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-decorative to-transparent" />
    </section>
  );
}
