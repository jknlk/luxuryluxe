function FloralMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 55 C 55 55, 55 0, 110 0"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M0 110 C 75 110, 110 75, 110 0"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M0 165 C 110 165, 165 110, 165 0"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="108" cy="18" r="9" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="80" cy="42" r="6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="42" cy="80" r="6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="18" cy="108" r="9" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="18" cy="18" r="3" fill="currentColor" />
      <path
        d="M108 18 C 118 8, 132 8, 138 20"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M18 108 C 8 118, 8 132, 20 138"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function ForeverMoments() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-36">
      <FloralMotif className="pointer-events-none absolute -top-4 -left-4 h-40 w-40 text-ink opacity-5 md:h-56 md:w-56" />
      <FloralMotif className="pointer-events-none absolute -top-4 -right-4 h-40 w-40 -scale-x-100 text-ink opacity-5 md:h-56 md:w-56" />
      <FloralMotif className="pointer-events-none absolute -bottom-4 -left-4 h-40 w-40 -scale-y-100 text-ink opacity-5 md:h-56 md:w-56" />
      <FloralMotif className="pointer-events-none absolute -right-4 -bottom-4 h-40 w-40 scale-x-[-1] scale-y-[-1] text-ink opacity-5 md:h-56 md:w-56" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl md:text-6xl">
          Crafted for
          <br />
          Your Forever Moments
        </h2>
        <p className="mx-auto mt-6 max-w-md font-body text-base font-light text-ink/70 sm:text-lg">
          Every lehenga is thoughtfully handcrafted with timeless artistry and
          attention to detail.
        </p>
        <a
          href="#collection"
          className="mt-10 inline-block rounded-full bg-ink px-10 py-4 text-xs uppercase tracking-[0.3em] text-cream transition hover:bg-gold hover:text-ink"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
}
