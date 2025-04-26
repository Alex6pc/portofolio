"use client";

import React from "react";
import { motion } from "framer-motion";
import { StrapiImage } from "@/components/custom/strapi-image";
import type { FeaturedWorkProps } from "@/types";

export default function FeaturedWork(data: Readonly<FeaturedWorkProps>) {
  if (!data) return null;
  const { title, features, isGrid } = data;

  if (!isGrid && features?.length >= 1) {
    return (
      <section className="relative w-full bg-background py-16 tracking-wider md:py-24">
        <div className="container max-w-[1200px]">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-6xl font-bold text-text mb-20"
          >
            {title}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-primary mx-auto mt-4"
            />
          </motion.h1>
          
          {features.map((feature, index) => {
            // Add null checks
            if (!feature?.image?.url) {
              console.error('Missing image data:', feature);
              return null;
            }
            
            return (
              <div id='projects' key={feature.id || index} className="mb-16">
                <div className="flex flex-col md:flex-row md:max-h-[400px] gap-8 items-stretch rounded-[rem] border-4 border-decorative">
                  {/* Image section - Adjusted size */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-[1.5] md:max-h-[400px]"
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      <StrapiImage
                        src={feature.image.url}
                        alt={feature.image.name}
                        width={700}
                        height={500}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </motion.div>

                  {/* Content section */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-4 p-6 self-center"
                  >
                    <span className="uppercase tracking-wider text-lg">
                      {feature.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {feature.title}
                    </h2>
                    <p className="text-base leading-relaxed">
                      {feature.description}
                    </p>
                    <a
                      href={feature.projectLink}
                      className="inline-flex items-center hover:text-primary transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Projekt ansehen
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">➜</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  // Grid layout
  return (
    <section className="relative w-full bg-background py-8 md:pb-24">
      <div className="container max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer rounded-[rem] border-4 border-decorative overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <StrapiImage
                  src={feature.image.url}
                  alt={feature.image.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="uppercase tracking-wider text-lg text-primary">
                  {feature.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold">{feature.title}</h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 