import ScrollHero from "@/components/ScrollHero";
import BoutiqueMarquee from "@/components/BoutiqueMarquee";
import Collections from "@/components/Collections";
import ProductShowcase from "@/components/ProductShowcase";
import OfferAndGifts from "@/components/OfferAndGifts";

export default function Home() {
  return (
    <main>
      <ScrollHero />
      <BoutiqueMarquee />
      <Collections />
      <div id="collection">
        <ProductShowcase />
      </div>
      <OfferAndGifts />
    </main>
  );
}
