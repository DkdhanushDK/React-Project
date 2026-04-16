import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} style={{ display: "block" }}>
        <div className="product-img-wrap" style={{ background: product.bg }}>
          {product.image ? <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : <span style={{ fontSize: 72 }}>{product.emoji}</span>}
          {product.badge && (
            <div className={`product-badge${product.badge === "Best-seller" ? " bestseller" : ""}`}>
              {product.badge}
            </div>
          )}
        </div>
        <div className="product-info">
          <div className="product-name">{product.name}</div>
          <div className="product-sub">{product.sub}</div>
          {product.size && <div className="product-size">{product.size}</div>}
          <div className="product-price">
            {product.originalPriceFormatted && <span className="original">{product.originalPriceFormatted}</span>}
            {product.salePriceFormatted ? (
              <>
                <span className="original">{product.priceFormatted}</span>
                <span className="sale">{product.salePriceFormatted}</span>
              </>
            ) : (
              <span>{product.priceFormatted}</span>
            )}
          </div>
        </div>
      </Link>
      <div className="product-actions">
        <button
          className={`add-to-bag${added ? " added" : ""}`}
          onClick={handleAdd}
        >
          {added ? "Added!" : "Add to bag"}
        </button>
      </div>
    </div>
  );
}
