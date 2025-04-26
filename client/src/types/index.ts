type Image = {
  id: string;
  documentId: string;
  url: string;
  alternativeText: string | null;
  name: string;
}   

type ComponentType =
  | "layout.hero"
  | "layout.card-grid"
  | "layout.section-heading"
  | "layout.content-with-image"   
  | "layout.price-grid"
  | "blocks.video"
  | "blocks.text"
  | "layout.content-with-image-quadrat"
  | "layout.contact-cta"
  | "layout.contact-section"
  | "layout.featured-work"
  | "layout.tech-stack";

interface Base<T extends ComponentType, D extends {} = {}> {
  __component: T;
  id: string;
  createdAt: string;
  updatedAt: string;
  data: D;
}

export interface NavLink {
  href: string;
  text: string;
  isExternal: boolean;
  isPrimary: boolean;
}

export interface TechnologyProps {
  name: string;
  logo: {
    url: string;
    alternativeText: string;
  };
  category?: string;
  experienceLevel: "expert" | "proficient" | "intermediate" | "beginner" | "learning";
  url?: string;
}


export type Block = 
  | HeroProps 
  | ContactSectionProps 
  | CardGridProps 
  | FeaturedWorkProps 
  | SectionHeadingProps 
  | ContentWithImageProps 
  | PriceGridProps 
  | VideoProps 
  | ContactCTAProps 
  | TextProps 
  | ContentWithImageQuadratProps
  | TechStackProps;

  
export interface TechStackProps extends Base<"layout.tech-stack"> {
  title: string;
  subtitle?: string;
  description?: string;
  technologies: TechnologyProps[];
  showCategories?: boolean;
}

export interface HeroProps extends Base<"layout.hero"> {
  heading: string;
  text: string;
  topLink?: NavLink;
  buttonLink?: NavLink[];
  image: {
    url: string;
    alternativeText: string | null;
    name: string;
  };
}

export interface CardGridProps extends Base<"layout.card-grid"> {
  cardItems: {
    id: string;
    heading: string;
    text: string;
    icon: string;
  }[];
}

export interface SectionHeadingProps extends Base<"layout.section-heading"> {
  heading: string;
  subHeading: string;
  text: string;
  centered?: boolean;
}

export interface ContentWithImageProps extends Base<"layout.content-with-image"> {
  reverse: boolean;
  image: {
    url: string;
    name: string;
  };
  heading: string;
  subHeading: string;
  text: string;
}
export interface ContentWithImageQuadratProps extends Base<"layout.content-with-image-quadrat"> {
  reverse: boolean;
  image: {
    url: string;
    name: string;
  };
  heading: string;
  subHeading: string;
  text: string;
}

export interface PriceGridProps extends Base<"layout.price-grid"> {
  priceCard: {
    id: string;
    heading: string;
    description: string;
    price: string;
    selected: boolean;
    feature: {
      id: string;
      description: string;
    }[];
    link: NavLink;
  }[];
}

export interface ContactCTAProps extends Base<"layout.contact-cta"> {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface VideoProps extends Base<"blocks.video"> {
  title: string;
  description: string;
  videoUrl: string;
  video: {
    videoId: string;
    start: string;
    end: string;
  },
  image: Image;
}

export interface ContactSectionProps extends Base<"layout.contact-section"> {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export interface TextProps extends Base<"blocks.text"> {
  content: string;
}

export interface FeaturedWorkProps extends Base<"layout.featured-work"> {
  title: string;
  features: FeatureItem[];
  isGrid: boolean;
}

export interface FeatureItem {
  id: number;
  title: string;
  category: string;
  description: string;
  projectLink: string;
  image: {
    url: string;
    name: string;
  };
}
