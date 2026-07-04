"use client";

import { useEffect, useState } from "react";

const BANNER_IMAGES = [
  "/offer/bridal-1.jpg",
  "/offer/bridal-2.jpg",
  "/offer/bridal-3.jpg",
];

const GIFTS = [
  {
    image: "/gifts/gift-1.jpg",
    name: "Triple Row Diamond Necklace",
    price: 52500,
  },
  {
    image: "/gifts/gift-2.jpg",
    name: "Emerald Drop Bridal Set",
    price: 45900,
  },
  {
    image: "/gifts/gift-3.jpg",
    name: "Antique Gold Haar",
    price: 38500,
  },
];

const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

function GiftLidHalf({
  side,
  opened,
}: {
  side: "left" | "right";
  opened: boolean;
}) {
  return (
    <div
      className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
      style={{
        clipPath: side === "left" ? "inset(0 50% 0 0)" : "inset(0 0 0 50%)",
        transformOrigin: side === "left" ? "left center" : "right center",
        transform: opened
          ? `rotateY(${side === "left" ? -108 : 108}deg)`
          : "rotateY(0deg)",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="relative h-full w-full bg-ink">
        <div className="absolute top-0 left-1/2 h-full w-3 -translate-x-1/2 bg-gold" />
        <div className="absolute top-10 left-0 h-3 w-full bg-gold" />
        <div className="absolute top-5 left-1/2 flex -translate-x-1/2">
          <span className="-mr-2 h-7 w-9 rotate-[20deg] rounded-full bg-gold" />
          <span className="-ml-2 h-7 w-9 -rotate-[20deg] rounded-full bg-gold" />
        </div>
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[11px] whitespace-nowrap text-cream/80 uppercase tracking-[0.2em]">
          Tap to Reveal
        </span>
      </div>
    </div>
  );
}

export default function OfferAndGifts() {
  const [opened, setOpened] = useState<boolean[]>(GIFTS.map(() => false));
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBannerIndex((i) => (i + 1) % BANNER_IMAGES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const toggle = (index: number) => {
    setOpened((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <section className="bg-ivory">
      <div className="relative h-[320px] w-full overflow-hidden sm:h-[360px] md:h-[420px]">
        {BANNER_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Bridal Edit offer"
            className={`absolute inset-0 h-full w-full object-cover object-[center_25%] transition-opacity duration-1000 ${
              i === bannerIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-md px-8 text-cream sm:px-16 md:px-24 lg:px-32">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Limited Time
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium whitespace-nowrap sm:text-5xl">
              Bridal Edit
            </h2>
            <p className="mt-3 font-display text-3xl text-gold sm:text-4xl">
              20% OFF
            </p>
            <p className="mt-4 text-sm font-light text-cream/80">
              On handcrafted lehengas from our signature bridal collection —
              for a limited time only.
            </p>
            <a
              href="#collection"
              className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-xs whitespace-nowrap uppercase tracking-[0.3em] text-ink transition hover:bg-cream"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            Complete The Trousseau
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
            Gifts She'll Treasure
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {GIFTS.map((gift, i) => (
            <div key={gift.name} className="group text-center">
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-label={
                  opened[i] ? `Close ${gift.name}` : `Reveal ${gift.name}`
                }
                className="relative block h-72 w-full cursor-pointer overflow-hidden rounded-2xl bg-ink/5 [perspective:1200px] sm:h-80"
              >
                <img
                  src={gift.image}
                  alt={gift.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <GiftLidHalf side="left" opened={opened[i]} />
                <GiftLidHalf side="right" opened={opened[i]} />
              </button>
              <h3 className="mt-4 font-display text-lg text-ink">
                {gift.name}
              </h3>
              <p className="mt-1 text-sm text-gold">
                {formatINR(gift.price)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
