"use client";

import { useEffect, useState } from "react";

const LOOKS = [
  "/marquee/look-01.png",
  "/marquee/look-02.png",
  "/marquee/look-03.png",
  "/marquee/look-04.png",
  "/marquee/look-05.png",
  "/marquee/look-06.png",
  "/marquee/look-07.png",
  "/marquee/look-08.png",
  "/marquee/look-09.png",
];

const FEATURES = ["Handcrafted", "Pure Silk", "Zardozi Work", "Made To Order"];

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
    <section className="bg-blush py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">
          Fresh Off The Runway
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl md:text-5xl">
          Looks From The Latest Edit
        </h2>
      </div>

      <div className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${duration}s` }}
        >
          {[...LOOKS, ...LOOKS].map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(src)}
              aria-label="View full look"
              className="flex h-64 w-48 shrink-0 cursor-zoom-in items-center justify-center rounded-2xl bg-ivory shadow-lg transition hover:shadow-xl sm:h-80 sm:w-60"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Lehenga Luxe look"
                className="h-full w-full object-contain p-3"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-3 px-6">
        {FEATURES.map((f) => (
          <span
            key={f}
            className="rounded-full border border-ink/20 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-ink/70"
          >
            {f}
          </span>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-xl px-6 text-center text-sm font-light text-ink/70">
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
