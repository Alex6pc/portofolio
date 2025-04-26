"use client";

import type { HeroProps } from "@/types";

import Link from "next/link";
import { scrollToComponent } from "@/utils/scrollUtils";

import { Button } from "@/components/ui/button";
import { StrapiImage } from "@/components/custom/strapi-image";

export function Hero(data: Readonly<HeroProps>) {
  if (!data) return null;
  const { heading, text, topLink, buttonLink, image } = data;
  return (
    <section className="relative h-[500px] md:h-[800px] bg-background pt-6 md:pt-20">
      {/* Background Color Layer */}
      <div className="absolute inset-0 bg-background-primary" />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "Hero image"}
          width={1920}
          height={500}
          priority
          className="object-cover w-full h-full opacity-10"
        />
      </div>

      {/* Gradient overlay with more opacity */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 mt-8 md:mt-1 flex flex-col justify-center h-full">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-3 md:mb-6 font-heading text-3xl md:text-5xl lg:text-7xl font-bold text-foreground-primary">
            {heading}
          </h1>
          <p className="mb-4 md:mb-12 text-base md:text-xl lg:text-2xl text-foreground-secondary">
            {text}
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
            {buttonLink &&
              buttonLink.map((link) => (
                <Button
                  key={link.text}
                  size="lg"
                  variant={link.isPrimary ? "default" : "outline"}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href={link.href}
                    onClick={() => scrollToComponent(link.href)}
                    className="w-full px-4 py-2 md:px-8 md:py-4 cursor-pointer text-sm md:text-base"
                  >
                    {link.text}
                  </Link>
                </Button>
              ))}
          </div>
        </div>

        {/* Brands Section */}
        {/* <div className="mt-8 md:mt-16 text-center"> */}
        {/* <p className="mb-4 md:mb-8 text-xs md:text-sm font-medium tracking-wider text-foreground-secondary">
          PROUDLY COLLABORATED WITH SOME OF THE BIGGEST BRANDS
        </p> */}
        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12"> */}
        {/* Brand logos using theme colors */}
        {/* <div className="h-5 w-5 md:h-8 md:w-8 bg-foreground-secondary/20 rounded-full cursor-pointer hover:bg-foreground-secondary/30 transition-colors" />
            <div className="h-5 w-12 md:h-8 md:w-20 bg-foreground-secondary/20 rounded cursor-pointer hover:bg-foreground-secondary/30 transition-colors" />
            <div className="h-5 w-10 md:h-8 md:w-16 bg-foreground-secondary/20 rounded cursor-pointer hover:bg-foreground-secondary/30 transition-colors" />
            <div className="h-5 w-14 md:h-8 md:w-24 bg-foreground-secondary/20 rounded cursor-pointer hover:bg-foreground-secondary/30 transition-colors" />
            <div className="h-5 w-12 md:h-8 md:w-20 bg-foreground-secondary/20 rounded cursor-pointer hover:bg-foreground-secondary/30 transition-colors" /> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}
