import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks, megaMenu } from "../data/products";

export default function Navbar({ cartCount, setCartOpen }) {
  const [activeNav, setActiveNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`nav-wrapper${scrolled ? " scrolled" : ""}`} ref={navRef}>
        <div className="nav-top">
          <Link to="/" className="nav-logo">Appnstruct</Link>

          <ul className="nav-links">
            {navLinks.map(link => (
              <li
                key={link}
                className={activeNav === link ? "active" : ""}
                onMouseEnter={() => setActiveNav(link)}
                onMouseLeave={() => setActiveNav(null)}
              >
                <Link to="/collection">{link}</Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="nav-action-btn" onClick={() => setSearchOpen(true)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button className="nav-action-btn">IN</button>
            <button className="nav-action-btn d-mobile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <button className="nav-action-btn hide-mobile">Stores</button>
            <button className="nav-action-btn hide-mobile">Log in</button>
            <button className="nav-action-btn cart-btn" onClick={() => setCartOpen(true)}>Bag ({cartCount})</button>
          </div>
        </div>

        {activeNav && megaMenu[activeNav]?.length > 0 && (
          <div
            className="mega-menu"
            onMouseEnter={() => setActiveNav(activeNav)}
            onMouseLeave={() => setActiveNav(null)}
          >
            <div className="mega-menu-inner">
              {megaMenu[activeNav].map(item => (
                <Link key={item} to="/collection">{item}</Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-box" onClick={e => e.stopPropagation()}>
            <input
              className="search-input"
              placeholder="Search our site"
              autoFocus
            />
            <button className="search-close" onClick={() => setSearchOpen(false)}>×</button>
          </div>
        </div>
      )}
      <style>{`
        .d-mobile { display: none; }
        @media (max-width: 768px) {
          .d-mobile { display: flex; }
          .hide-mobile { display: none; }
        }
      `}</style>
    </>
  );
}
