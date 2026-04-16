import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Home({ addToCart }) {
  return (
    <>
      <Hero />

      <section className="section-banner">
        <div
          className="section-banner-item"
          style={{ background: "url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1500&auto=format&fit=crop') center/cover no-repeat" }}
        >
          <div className="section-banner-overlay" />
          <div className="section-banner-eyebrow">Category</div>
          <div className="section-banner-title">SKIN FIRST</div>
          <Link to="/collection" className="section-banner-cta">Shop Skincare</Link>
        </div>
        <div
          className="section-banner-item"
          style={{ background: "url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1500&auto=format&fit=crop') center/cover no-repeat" }}
        >
          <div className="section-banner-overlay" />
          <div className="section-banner-eyebrow">Category</div>
          <div className="section-banner-title">MAKEUP SECOND</div>
          <Link to="/collection" className="section-banner-cta">Shop Makeup</Link>
        </div>
      </section>

      <section className="fragrance-banner" style={{ position: "relative", overflow: "hidden", background: "#000" }}>
        <video
          autoPlay loop muted playsInline
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.5 }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-waves-crashing-on-a-beach-5264/1080p.mp4" type="video/mp4" />
        </video>
        <div className="fragrance-text" style={{ position: "relative", zIndex: 1 }}>
          <h2>OUR FRAGRANCES</h2>
          <p>Your favorite scents that will grow with you no matter where you are in your personal evolution.</p>
          <Link to="/collection" className="fragrance-cta">Shop fragrances</Link>
        </div>
        <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src="/images/product_2.png"
            alt="Glossier You Fragrance"
            style={{ maxWidth: "250px", objectFit: "contain", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.4))", transform: "rotate(4deg)" }}
          />
          <img
            src="/images/product_4.png"
            alt="Fragrance Accessory"
            style={{ maxWidth: "160px", objectFit: "contain", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.4))", transform: "rotate(-6deg) translateX(-40px) translateY(40px)" }}
          />
        </div>
      </section>

      <div className="review-marquee">
        <div className="review-track">
          {[...Array(4)].map((_, k) => (
            <div key={k} className="review-item">
              <span className="review-stars">★★★★★</span>
              <span>"This is another amazing addition to the You lineup! Soie is fresh, and smells like a long sunset walk at the beach."</span>
              <span style={{ color: "#aaa", fontSize: 12 }}>— Verified Purchase</span>
            </div>
          ))}
        </div>
      </div>

      <div className="shop-all-header">
        <h2>SHOP ALL</h2>
        <Link to="/collection" className="shop-all-btn">Shop all products</Link>
      </div>

      <ProductGrid products={products} addToCart={addToCart} />

      <section className="get-the-look">
        <h2>GET THE LOOK</h2>
        <div className="look-grid">
          {[
            { bg: "url('https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1500&auto=format&fit=crop') center/cover no-repeat", emoji: "", label: "Shop Glossier You Soie" },
            { bg: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1500&auto=format&fit=crop') center/cover no-repeat", emoji: "", label: "Shop Futuredew Solid" },
            { bg: "url('https://images.unsplash.com/photo-1506956191951-7a88da4435e5?q=80&w=1500&auto=format&fit=crop') center/cover no-repeat", emoji: "", label: "Shop Skincare" },
          ].map((item, i) => (
            <div key={i} className="look-item" style={{ background: item.bg }}>
              <span>{item.emoji}</span>
              <div className="look-overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


    </>
  );
}
