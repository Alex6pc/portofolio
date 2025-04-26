"use client"

import { StrapiImage } from "@/components/custom/strapi-image";
import { TechnologyProps, TechStackProps } from "@/types";
import { motion } from "framer-motion";

export default function TechStack(data: Readonly<TechStackProps>) {
  if (!data) return null;
  const { title, subtitle, description, technologies, showCategories } = data;

  // Ensure technologies array exists
  const techList = technologies || [];

  // Group technologies by category if showCategories is true
  const groupedTechnologies = showCategories
    ? techList.reduce((acc, tech) => {
        const category = tech.category || "Other";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(tech);
        return acc;
      }, {} as Record<string, TechnologyProps[]>)
    : { "All Technologies": techList };

  // Get opacity based on experience level
  // const getOpacity = (level: string) => {
  //   switch (level) {
  //     case "expert":
  //       return "opacity-100";
  //     case "proficient":
  //       return "opacity-90";
  //     case "intermediate":
  //       return "opacity-80";
  //     case "beginner":
  //       return "opacity-70";
  //     case "learning":
  //       return "opacity-40";
  //     default:
  //       return "hover:bg-secondary opacity-100";
  //   }
  // };

  // Function to check if technology is valid (has name and logo)
  const isValidTech = (tech: TechnologyProps): boolean => {
    return Boolean(tech && tech.name && tech.logo && tech.logo.url);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <h3 className="text-xl text-muted-foreground mb-4">{subtitle}</h3>}
          {description && <p className="max-w-2xl mx-auto text-muted-foreground">{description}</p>}
        </motion.div>

        {Object.entries(groupedTechnologies).map(([category, techs]) => (
          <div key={category} className="mb-12">
            {showCategories && (
              <h3 className="text-2xl font-semibold mb-6 text-center">{category}</h3>
            )}
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
              {techs.map((tech, index) => (
                // Skip rendering if tech or logo is invalid
                isValidTech(tech) ? (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center group"
                  >
                    <div 
                      className={`relative cursor-pointer w-20 h-20 mb-3 rounded-xl p-4 bg-background shadow-md flex items-center justify-center hover:bg-secondary`}
                    >
                      {tech.url ? (
                        <a 
                          href={tech.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full h-full flex items-center justify-center"
                        >
                          <StrapiImage
                            src={tech.logo.url} 
                            alt={tech.logo.alternativeText || tech.name}
                            width={60}
                            height={60} 
                            className="object-contain max-h-12"
                          />
                        </a>
                      ) : (
                        <StrapiImage
                          src={tech.logo.url} 
                          alt={tech.logo.alternativeText || tech.name}
                          width={60}
                          height={60}
                          className="object-contain max-h-12"
                        />
                      )}
                      
                      {tech.experienceLevel === "learning" && (
                        <div className="absolute -top-2 -right-2 bg-yellow-500 text-xs text-white px-2 py-1 rounded-full">
                          Learning
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-center">{tech.name}</span>
                  </motion.div>
                ) : null
              ))}
            </div>
          </div>
        ))}

        {/* <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full opacity-100 bg-primary mr-2"></div>
              <span className="text-sm">Expert</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full opacity-90 bg-primary mr-2"></div>
              <span className="text-sm">Proficient</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full opacity-80 bg-primary mr-2"></div>
              <span className="text-sm">Intermediate</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full opacity-70 bg-primary mr-2"></div>
              <span className="text-sm">Beginner</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full opacity-40 bg-primary mr-2"></div>
              <span className="text-sm">Learning</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
} 