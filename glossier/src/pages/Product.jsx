import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";

export default function Product({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [added, setAdded] = useState(false);

  if (!product) {
    return <div style={{ padding: "100px", textAlign: "center" }}>Product not found</div>;
  }

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-gallery">
        <div className="product-detail-thumbnails">
          {[product.bg, "#e8e0dc", "#f8f0ec"].map((bg, idx) => (
            <div key={idx} className={`product-thumbnail${idx === 0 ? " active" : ""}`} style={{ background: bg, overflow: "hidden" }}>
              {idx === 0 ? (product.image ? <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : product.emoji) : "📦"}
            </div>
          ))}
        </div>
        <div className="product-detail-main-img" style={{ background: product.bg, overflow: "hidden" }}>
          {product.image ? <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : product.emoji}
        </div>
      </div>
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <div className="product-detail-sub">{product.sub}</div>
        <div className="product-detail-price">
          {product.salePriceFormatted ? (
            <>
              <span style={{ textDecoration: "line-through", color: "#aaa", marginRight: "12px", fontSize: "16px", fontWeight: "normal" }}>{product.priceFormatted}</span>
              <span style={{ color: "#c0504a" }}>{product.salePriceFormatted}</span>
            </>
          ) : (
            <span>{product.priceFormatted}</span>
          )}
        </div>
        <div className="product-detail-desc">
          {product.description || "A staple for your routine. Enhances what you have while nourishing your skin deeply."}
        </div>
        
        <button className="product-add-to-cart" onClick={handleAdd} style={{ background: added ? "#5a8a5a" : "var(--dark)" }}>
          {added ? "Added to bag!" : "Add to bag"}
        </button>

        <div className="product-accordion">
          <div className="accordion-item">
            <div className="accordion-header">
              <span>Description</span>
              <span>−</span>
            </div>
            <div className="accordion-content">
              {product.description || "Formulated to give you the perfect look and feel every time you use it."}
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <span>Ingredients</span>
              <span>+</span>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <span>How to use</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
