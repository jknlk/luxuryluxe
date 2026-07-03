"use client";

import { useEffect, useState } from "react";

const CATEGORIES = [
  { image: "/marquee/look-01.png", name: "Royal Blue Edit" },
  { image: "/marquee/look-02.png", name: "Golden Zardozi" },
  { image: "/marquee/look-06.png", name: "Rustic Fusion" },
];

const NEW_ARRIVALS = [
  "/marquee/look-03.png",
  "/marquee/look-04.png",
  "/marquee/look-05.png",
  "/marquee/look-07.png",
];

export default function Collections() {
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
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="group text-center">
              <button
                type="button"
                onClick={() => setSelected(cat.image)}
                aria-label={`View ${cat.name} full image`}
                className="relative block w-full cursor-zoom-in overflow-hidden rounded-t-[9999px] rounded-b-2xl bg-ink/5"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-72 w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-80"
                />
                <span className="absolute right-4 bottom-4 left-4 rounded-md bg-espresso/85 py-2 text-sm text-cream">
                  {cat.name}
                </span>
              </button>
              <a
                href="#collection"
                className="mt-3 inline-block text-sm text-ink/70 transition hover:text-gold"
              >
                {cat.name} →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            Just In
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
            New Arrivals
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {NEW_ARRIVALS.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelected(src)}
              aria-label="View full image"
              className="cursor-zoom-in overflow-hidden rounded-xl bg-ink/5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="New arrival"
                className="h-56 w-full object-cover object-top transition duration-500 hover:scale-105 sm:h-64"
              />
            </button>
          ))}
        </div>
      </div>

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
            alt="Full view"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
