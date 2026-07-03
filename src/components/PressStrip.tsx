const MENTIONS = [
  "Vogue",
  "Elle",
  "Grazia",
  "Harper's Bazaar",
  "Cosmopolitan",
  "Brides Today",
];

export default function PressStrip() {
  const duration = MENTIONS.length * 4;

  return (
    <section className="overflow-hidden bg-ink py-3">
      <div className="group relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${duration}s` }}
        >
          {[...MENTIONS, ...MENTIONS].map((name, i) => (
            <span
              key={i}
              className="shrink-0 whitespace-nowrap font-display text-sm tracking-wide text-cream/50 sm:text-base"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
