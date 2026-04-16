import { useState, useEffect } from "react";
import { heroSlides } from "../data/products";
import { Link } from "react-router-dom";

export default function Hero() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(i => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[heroIndex];

  return (
    <section className="hero-section" style={{ background: slide.bg }}>
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className="hero-slide"
          style={{ background: s.bg, opacity: i === heroIndex ? 1 : 0, transition: "opacity 0.8s ease" }}
        >
          <div className="hero-label">{s.label}</div>
          <h1 className="hero-title">{s.title}</h1>
          <p className="hero-sub">{s.subtitle}</p>
          <Link to="/collection" className="hero-cta">{s.cta}</Link>
        </div>
      ))}
      <div className="hero-dots">
        {heroSlides.map((_, i) => (
          <div
            key={i}
            className={`hero-dot${i === heroIndex ? " active" : ""}`}
            onClick={() => setHeroIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
