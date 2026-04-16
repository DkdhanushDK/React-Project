import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

export default function Collection({ addToCart }) {
  return (
    <div className="page-container">
      <div className="collection-header">
        <h1 className="collection-title">Shop All</h1>
        <p className="collection-desc">
          Skincare, makeup, body care, and fragrance, all carefully formulated to put skin first.
        </p>
      </div>
      <div style={{ margin: "40px 0" }}>
        <ProductGrid products={products} addToCart={addToCart} />
      </div>
    </div>
  );
}
