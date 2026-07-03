"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Product = {
  image: string;
  name: string;
  price: number;
  description: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
};

const PRODUCTS: Product[] = [
  {
    image: "/products/lehenga-1.png",
    name: "Rust Zardozi Lehenga",
    price: 48500,
    description:
      "Hand-embroidered zardozi work on flowing organza, finished with a scalloped dupatta border.",
    colors: [
      { name: "Rust", hex: "#b5551f" },
      { name: "Gold", hex: "#c9a24b" },
      { name: "Olive", hex: "#5c5b3f" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    image: "/products/lehenga-2.png",
    name: "Blush Rose Bridal Lehenga",
    price: 68000,
    description:
      "Rose-embellished bridal lehenga in blush organza with a contrast fuchsia dupatta and trailing train.",
    colors: [
      { name: "Blush", hex: "#eec3c6" },
      { name: "Fuchsia", hex: "#c2185b" },
      { name: "Champagne", hex: "#d8c9a3" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    image: "/products/lehenga-3.png",
    name: "Hot Pink Rose Lehenga",
    price: 54500,
    description:
      "Off-shoulder silhouette with 3D rose appliqué and hand-beaded florals for the modern bride.",
    colors: [
      { name: "Fuchsia", hex: "#d6127a" },
      { name: "Rose", hex: "#e75480" },
      { name: "Gold", hex: "#c9a24b" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    image: "/products/lehenga-4.png",
    name: "Ivory Lotus Bridal Lehenga",
    price: 72000,
    description:
      "Ivory organza lehenga with hand-embellished lotus motifs and a scarlet scalloped hemline.",
    colors: [
      { name: "Ivory", hex: "#ede3d3" },
      { name: "Rose", hex: "#e0728a" },
      { name: "Red", hex: "#a3162b" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    image: "/products/lehenga-5.png",
    name: "Peacock Velvet Bridal Fusion",
    price: 85000,
    description:
      "Red velvet drape over an emerald skirt hand-embroidered with regal peacock motifs in gold zardozi.",
    colors: [
      { name: "Maroon", hex: "#6e0f1e" },
      { name: "Gold", hex: "#c9a24b" },
      { name: "Emerald", hex: "#0b3d2e" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    image: "/products/lehenga-6.png",
    name: "Meera Bai Hand-Painted Lehenga",
    price: 76000,
    description:
      "Royal blue silk lehenga hand-painted with a Radha-Krishna motif, bordered in intricate gold embroidery.",
    colors: [
      { name: "Royal Blue", hex: "#12235c" },
      { name: "Gold", hex: "#c9a24b" },
      { name: "Red", hex: "#a3162b" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

const formatINR = (amount: number) =>
  `₹${amount.toLocaleString("en-IN")}`;

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [size, setSize] = useState("M");
  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const count = PRODUCTS.length;

    const render = (floatIndex: number) => {
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = i - floatIndex;
        let scale: number;
        let x = 0;
        let y: number;
        let opacity: number;
        let z: number;

        if (d >= 0) {
          const t = Math.max(0, Math.min(1, 1 - d));
          scale = 0.75 + 0.25 * t;
          y = 60 * (1 - t);
          opacity = t;
          z = 20 + Math.round(t * 10);
        } else {
          const s = Math.max(0, Math.min(1, -d));
          scale = 1 - 0.45 * s;
          x = 140 * s;
          y = -20 * s;
          opacity = 1 - s;
          z = 20 - Math.round(s * 10);
        }

        gsap.set(el, { x, y, scale, opacity, zIndex: Math.round(z) });
      });
    };

    render(0);

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.4,
      onUpdate: (self) => {
        const floatIndex = self.progress * (count - 1);
        render(floatIndex);
        setActive(Math.round(floatIndex));
      },
    });

    return () => st.kill();
  }, []);

  useEffect(() => {
    setColorIdx(0);
    setSize("M");
  }, [active]);

  const product = PRODUCTS[active];

  return (
    <section
      ref={sectionRef}
      className="relative bg-ivory text-ink"
      style={{ height: `${PRODUCTS.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden md:flex-row">
        <div className="relative h-[48vh] w-full shrink-0 bg-ivory md:h-screen md:w-1/2">
          <span className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[140px] font-bold text-ink/5 md:text-[280px]">
            {String(active + 1).padStart(2, "0")}
          </span>
          {PRODUCTS.map((p, i) => (
            <div
              key={p.image}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-auto max-w-full rounded-2xl shadow-2xl"
              />
            </div>
          ))}
        </div>

        <div className="relative z-40 flex w-full flex-1 flex-col justify-center bg-cream px-8 py-6 md:h-screen md:w-1/2 md:px-16 md:py-0">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
            The Collection
          </p>
          <h3 className="mt-2 font-display text-2xl font-medium md:mt-3 md:text-4xl">
            {product.name}
          </h3>
          <p className="mt-2 font-display text-xl text-gold md:mt-4 md:text-2xl">
            {formatINR(product.price)}
          </p>
          <p className="mt-3 max-w-sm text-sm text-ink/70 md:mt-4">
            {product.description}
          </p>

          <div className="mt-5 md:mt-8">
            <p className="text-xs uppercase tracking-[0.25em] text-ink/60">
              Select Size
            </p>
            <div className="mt-3 flex gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-9 w-9 rounded-full border text-xs transition md:h-10 md:w-10 ${
                    size === s
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/30 text-ink/70 hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 md:mt-6">
            <p className="text-xs uppercase tracking-[0.25em] text-ink/60">
              Select Colour
            </p>
            <div className="mt-3 flex gap-3">
              {product.colors.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setColorIdx(i)}
                  aria-label={c.name}
                  style={{ background: c.hex }}
                  className={`h-7 w-7 rounded-full border-2 transition ${
                    colorIdx === i ? "scale-110 border-ink" : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-7 flex gap-3 md:mt-10">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-xs uppercase tracking-[0.3em] text-ink transition hover:bg-ink hover:text-cream md:py-4">
              Buy Now
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-xs uppercase tracking-[0.3em] text-cream transition hover:bg-gold hover:text-ink md:py-4">
              Add to Cart
            </button>
          </div>

          <div className="mt-5 flex gap-2 md:mt-6">
            {PRODUCTS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  active === i ? "w-8 bg-ink" : "w-1.5 bg-ink/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
