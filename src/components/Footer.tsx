const QUICK_LINKS = ["Home", "About Us", "Contact", "Privacy Policy"];
const CATEGORIES = [
  "Bridal Lehengas",
  "Zardozi Collection",
  "Party Wear",
  "New Arrivals",
];

function SocialIcon({ path }: { path: string }) {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/25 transition hover:border-cream/60 hover:text-gold">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-3.5 w-3.5"
      >
        <path d={path} />
      </svg>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-cream/15 pb-10 text-center md:flex-row md:text-left">
          <div>
            <h3 className="font-display text-2xl font-medium md:text-3xl">
              Get 15% Off Your First Order
            </h3>
            <p className="mt-2 text-sm font-light text-cream/70">
              Subscribe for exclusive news, styling tips, and early access to
              new collections.
            </p>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full border border-cream/25 bg-transparent px-5 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
            />
            <button
              type="button"
              className="shrink-0 rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-ink transition hover:bg-cream"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-10 py-12 text-sm md:grid-cols-4">
          <div>
            <p className="font-display text-xl">Lehenga Luxe</p>
            <p className="mt-3 max-w-xs font-light text-cream/70">
              Handcrafted bridal lehengas and occasion wear, where heritage
              craftsmanship meets modern luxury.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialIcon path="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
              <SocialIcon path="M12 2c-2.7 0-3.1 0-4.1.1-1.1 0-1.8.2-2.4.5-.7.2-1.2.6-1.8 1.1-.5.6-.9 1.1-1.1 1.8-.3.6-.5 1.3-.5 2.4C2 8.9 2 9.3 2 12s0 3.1.1 4.1c0 1.1.2 1.8.5 2.4.2.7.6 1.2 1.1 1.8.6.5 1.1.9 1.8 1.1.6.3 1.3.5 2.4.5C8.9 22 9.3 22 12 22s3.1 0 4.1-.1c1.1 0 1.8-.2 2.4-.5.7-.2 1.2-.6 1.8-1.1.5-.6.9-1.1 1.1-1.8.3-.6.5-1.3.5-2.4.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c0-1.1-.2-1.8-.5-2.4-.2-.7-.6-1.2-1.1-1.8-.6-.5-1.1-.9-1.8-1.1-.6-.3-1.3-.5-2.4-.5C15.1 2 14.7 2 12 2Zm0 1.8c2.6 0 3 0 4 .1.9 0 1.5.2 1.8.3.4.2.7.3 1 .6.3.3.5.6.6 1 .1.3.3.9.3 1.8.1 1 .1 1.4.1 4s0 3-.1 4c0 .9-.2 1.5-.3 1.8-.2.4-.3.7-.6 1-.3.3-.6.5-1 .6-.3.1-.9.3-1.8.3-1 .1-1.4.1-4 .1s-3 0-4-.1c-.9 0-1.5-.2-1.8-.3-.4-.2-.7-.3-1-.6-.3-.3-.5-.6-.6-1-.1-.3-.3-.9-.3-1.8-.1-1-.1-1.4-.1-4s0-3 .1-4c0-.9.2-1.5.3-1.8.2-.4.3-.7.6-1 .3-.3.6-.5 1-.6.3-.1.9-.3 1.8-.3 1-.1 1.4-.1 4-.1ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.2 1.2 0 1 1-2.3 0 1.2 1.2 0 0 1 2.3 0Z" />
              <SocialIcon path="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3ZM8.5 17h-2v-7h2v7Zm-1-8a1.2 1.2 0 1 1 0-2.4A1.2 1.2 0 0 1 7.5 9Zm10.5 8h-2v-3.8c0-1-.4-1.6-1.2-1.6-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.8V17h-2s0-6.4 0-7h2v1c.3-.5 1-1.2 2.2-1.2 1.6 0 2.9 1 2.9 3.3V17Z" />
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-cream/50 uppercase">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 font-light text-cream/80">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-gold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-cream/50 uppercase">
              Categories
            </p>
            <ul className="mt-4 space-y-2 font-light text-cream/80">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <a href="#collection" className="transition hover:text-gold">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-cream/50 uppercase">
              Contact Us
            </p>
            <ul className="mt-4 space-y-2 font-light text-cream/80">
              <li>+91 98765 43210</li>
              <li>hello@lehengaluxe.com</li>
              <li>New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Lehenga Luxe. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-gold">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
