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

export default function OfferAndGifts() {
  return (
    <section className="bg-ivory">
      <div className="relative w-full overflow-hidden">
        <img
          src="/offer/bridal-edit.jpg"
          alt="Bridal Edit offer"
          className="h-[420px] w-full object-cover object-top sm:h-[480px] md:h-[560px]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-sm px-8 text-cream sm:px-16 md:px-24 lg:px-32">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Limited Time
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">
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
              className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-xs uppercase tracking-[0.3em] text-ink transition hover:bg-cream"
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
          {GIFTS.map((gift) => (
            <div key={gift.name} className="group text-center">
              <div className="overflow-hidden rounded-2xl bg-ink/5">
                <img
                  src={gift.image}
                  alt={gift.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
                />
              </div>
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
