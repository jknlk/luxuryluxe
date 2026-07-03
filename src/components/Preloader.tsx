"use client";

import { useEffect, useState } from "react";

const WORD = "Vigneshwari";

export default function Preloader() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">(
    "loading"
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true));

    const minTime = new Promise((resolve) => setTimeout(resolve, 700));
    const loaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) =>
            window.addEventListener("load", resolve, { once: true })
          );

    document.body.style.overflow = "hidden";

    Promise.all([minTime, loaded]).then(() => {
      setPhase("exiting");
      document.body.style.overflow = "";
      setTimeout(() => setPhase("done"), 700);
    });

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  const exiting = phase === "exiting";

  const mark = (
    <div
      className={`flex flex-col items-center gap-3 transition-all duration-700 ease-out ${
        ready ? "scale-100 opacity-100" : "scale-95 opacity-0"
      }`}
    >
      <span className="whitespace-nowrap font-script text-[16vw] text-cream md:text-[10vw]">
        {WORD}
      </span>
      <span
        className={`h-px bg-gold transition-all delay-200 duration-700 ease-out ${
          ready ? "w-16 opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100]" aria-hidden>
      <div
        className={`absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-ink transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          exiting ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="absolute inset-y-0 left-0 flex w-screen items-center justify-center">
          {mark}
        </div>
      </div>

      <div
        className={`absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-ink transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          exiting ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="absolute inset-y-0 right-0 flex w-screen items-center justify-center">
          {mark}
        </div>
      </div>
    </div>
  );
}
