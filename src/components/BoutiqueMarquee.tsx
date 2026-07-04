"use client";

import { useEffect, useState } from "react";

const LOOKS = [
  { src: "/marquee/look-01.png", price: 56500 },
  { src: "/marquee/look-02.png", price: 49900 },
  { src: "/marquee/look-03.png", price: 63000 },
  { src: "/marquee/look-04.png", price: 71500 },
  { src: "/marquee/look-05.png", price: 58200 },
  { src: "/marquee/look-06.png", price: 45800 },
  { src: "/marquee/look-07.png", price: 52400 },
  { src: "/marquee/look-08.png", price: 67900 },
  { src: "/marquee/look-09.png", price: 60500 },
];

const FEATURES = ["Handcrafted", "Pure Silk", "Zardozi Work", "Made To Order"];

const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

export default function BoutiqueMarquee() {
  const duration = LOOKS.length * 4.5;
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="bg-espresso py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">
          Fresh Off The Runway
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-cream sm:text-4xl md:text-5xl">
          Looks From The Latest Edit
        </h2>
      </div>

      <div className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${duration}s` }}
        >
          {[...LOOKS, ...LOOKS].map((look, i) => (
            <div
              key={i}
              className="flex w-48 shrink-0 flex-col rounded-2xl bg-ivory shadow-lg transition hover:shadow-xl sm:w-60"
            >
              <button
                type="button"
                onClick={() => setSelected(look.src)}
                aria-label="View full look"
                className="flex h-64 w-full cursor-zoom-in items-center justify-center sm:h-80"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={look.src}
                  alt="Lehenga Luxe look"
                  className="h-full w-full object-contain p-3"
                />
              </button>
              <p className="text-center font-display text-lg text-ink">
                {formatINR(look.price)}
              </p>
              <button
                type="button"
                className="mx-3 mt-2 mb-3 rounded-full bg-ink py-2 text-[11px] tracking-[0.2em] text-cream uppercase transition hover:bg-gold hover:text-ink"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-3 px-6">
        {FEATURES.map((f) => (
          <span
            key={f}
            className="rounded-full border border-cream/25 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-cream/70"
          >
            {f}
          </span>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-xl px-6 text-center text-sm font-light text-cream/70">
        Every Lehenga Luxe piece is hand-finished in our atelier — a legacy of
        craftsmanship, one stitch at a time.
      </p>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-6"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream/10"
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selected}
            alt="Lehenga Luxe look — full view"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
