import { getLandingPage } from "@/data/loaders";
import { BlockRenderer } from "@/components/block-renderer";

export default async function Home() {
  const data = await getLandingPage();
  const blocks = data?.data?.blocks;
  if (!blocks) return null;
  return <div className="w-full relative overflow-hidden">
    {blocks ? <BlockRenderer blocks={blocks} /> : null}</div>;
}
