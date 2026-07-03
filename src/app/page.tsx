import ScrollHero from "@/components/ScrollHero";
import BoutiqueMarquee from "@/components/BoutiqueMarquee";
import ProductShowcase from "@/components/ProductShowcase";
import ForeverMoments from "@/components/ForeverMoments";

export default function Home() {
  return (
    <main>
      <ScrollHero />
      <BoutiqueMarquee />
      <div id="collection">
        <ProductShowcase />
      </div>
      <ForeverMoments />
    </main>
  );
}
