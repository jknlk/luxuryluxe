const NAV_LINKS = [
  { label: "New Arrivals", hasChevron: false },
  { label: "Collections", hasChevron: true },
  { label: "Categories", hasChevron: true },
  { label: "Sale", hasChevron: false },
];

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="h-4 w-4"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="h-4 w-4"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4 md:top-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-ink/5 bg-cream/90 px-5 py-3 text-ink shadow-lg backdrop-blur-md md:px-7">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition hover:text-gold"
          >
            <MenuIcon />
            <span className="hidden sm:inline">Menu</span>
          </button>
          <span className="hidden h-4 w-px bg-ink/20 sm:block" />
          <button
            type="button"
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition hover:text-gold"
          >
            <SearchIcon />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              className="flex items-center gap-1 text-xs tracking-[0.1em] uppercase transition hover:text-gold"
            >
              {link.label}
              {link.hasChevron && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition hover:text-gold"
        >
          <CartIcon />
          <span className="hidden sm:inline">My Cart</span>
        </button>
      </div>
    </header>
  );
}
