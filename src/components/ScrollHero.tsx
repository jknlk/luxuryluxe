"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const FRAME_COUNT = 150;
const frameSrc = (index: number) =>
  `/hero/frame-${String(index + 1).padStart(3, "0")}.jpg`;

export default function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef({ index: 0 });
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let cancelled = false;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loadedCount = 0;

    const drawFrame = (index: number) => {
      const canvas = canvasRef.current;
      const img = images[index];
      if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      let drawWidth: number;
      let drawHeight: number;

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgRatio;
      } else {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgRatio;
      }

      const dx = (canvas.width - drawWidth) / 2;
      const dy = (canvas.height - drawHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
    };

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(Math.round(frameRef.current.index));
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = frameSrc(i);
      img.onload = () => {
        if (cancelled) return;
        loadedCount += 1;
        if (i === 0) drawFrame(0);
        if (loadedCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };
      images[i] = img;
    }
    imagesRef.current = images;

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.4,
      onUpdate: (self) => {
        setProgress(self.progress);
        const target = self.progress * (FRAME_COUNT - 1);
        frameRef.current.index = target;
        drawFrame(Math.round(target));
      },
    });

    return () => {
      cancelled = true;
      window.removeEventListener("resize", resizeCanvas);
      st.kill();
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  const introOpacity = 1 - Math.min(progress / 0.18, 1);
  const closeUpOpacity =
    progress > 0.72 ? Math.min((progress - 0.72) / 0.2, 1) : 0;

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-ink">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60" />

        {!loaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-ink">
            <p className="font-display text-sm tracking-[0.3em] text-cream/70 uppercase">
              Loading the collection…
            </p>
          </div>
        )}

        <div
          className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
          style={{ opacity: introOpacity }}
        >
          <h1 className="font-display text-5xl font-medium text-cream sm:text-7xl md:text-8xl">
            Lehenga Luxe
          </h1>
          <p className="mt-6 max-w-md font-body text-base font-light text-cream/80 sm:text-lg">
            Heritage craftsmanship, hand-embroidered for the moments you&apos;ll
            never forget.
          </p>
          <div className="mt-10 flex flex-col items-center gap-1 text-cream/60">
            <span className="text-[11px] tracking-[0.3em] uppercase">
              Scroll to explore
            </span>
            <span className="h-8 w-px animate-pulse bg-cream/40" />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-20 text-center"
          style={{ opacity: closeUpOpacity }}
        >
          <h2 className="font-display text-3xl font-medium text-cream sm:text-5xl">
            Every Detail, Handworked
          </h2>
          <p className="mt-4 max-w-md font-body text-sm font-light text-cream/80 sm:text-base">
            Zardozi, sequins and thread work, embroidered by artisans who have
            perfected their craft over generations.
          </p>
          <a
            href="#collection"
            className="mt-8 pointer-events-auto rounded-full border border-gold px-8 py-3 font-body text-xs tracking-[0.25em] text-gold uppercase transition hover:bg-gold hover:text-ink"
          >
            Explore The Collection
          </a>
        </div>
      </div>
    </section>
  );
}
