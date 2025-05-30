import type { Block } from "@/types";

import { Hero } from "@/components/block-renderer/layout/hero";
import { SectionHeading } from "@/components/block-renderer/layout/section-heading";
import ContentWithImage from "@/components/block-renderer/layout/content-with-image";
import { Pricing } from "@/components/block-renderer/layout/pricing";
import { CardCarousel } from "@/components/block-renderer/layout/card-carousel";
import ContentWithImageQuadrat from "@/components/block-renderer/layout/content-with-image-quadrat";
import { Video } from "@/components/block-renderer/blocks/video";
import { Text } from "@/components/block-renderer/blocks/text";
import { ContactCTA } from "@/components/block-renderer/layout/contact-cta";
import { ContactSection } from "@/components/block-renderer/layout/contact-section";
import FeaturedWork from "@/components/block-renderer/layout/featured-work";
import TechStack from "@/components/block-renderer/layout/tech-stack";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "layout.hero":
      return <Hero key={index} {...block} />;
    case "layout.card-grid":
      return <CardCarousel key={index} {...block} />;
    case "layout.section-heading":
      return <SectionHeading key={index} {...block} />;
    case "layout.content-with-image":
      return <ContentWithImage key={index} {...block} />;
    case "layout.price-grid":
      return <Pricing key={index} {...block} />;
    case "blocks.video":
      return <Video key={index} {...block} />;
    case "blocks.text":
      return <Text key={index} {...block} />;
    case "layout.content-with-image-quadrat":
      return <ContentWithImageQuadrat key={index} {...block} />;
    case "layout.contact-cta":
      return <ContactCTA key={index} {...block} />;
    case "layout.contact-section":
      return <ContactSection key={index} {...block} />;
    case "layout.featured-work":
      return <FeaturedWork key={index} {...block} />;
    case "layout.tech-stack":
      return <TechStack key={index} {...block} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
