import { useState } from "react";

const links = ["Home", "Technologies", "Projects", "About", "Contact"];
const hrefFor = (l) => (l === "Home" ? "#" : `#${l.toLowerCase()}`);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Hamburger (mobile only) */}
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">
          <img src="/images/hamburger.png" alt="menu" className="h-6 w-6" />
        </button>

        {/* Brand */}
        <a href="#" className="max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
          <img src="/images/logo-text.png" alt="Dev Stack" className="h-8 w-auto sm:h-9" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {links.map((l, i) => (
            <li key={l}>
              <a href={hrefFor(l)} className={i === 0 ? "text-pink-600" : "hover:text-pink-600"}>{l}</a>
            </li>
          ))}
        </ul>

        {/* Auth buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-sm font-medium text-slate-700 hover:text-pink-600">Sign In</button>
          <button className="bg-brand rounded-full px-4 py-2 text-sm font-semibold text-white shadow sm:px-5">Sign Up</button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a href={hrefFor(l)} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-pink-50">{l}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
