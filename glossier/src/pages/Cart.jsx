import { Link } from "react-router-dom";

export default function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="page-container" style={{ padding: "64px 24px", minHeight: "60vh" }}>
      <h1 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "40px", letterSpacing: "-0.02em" }}>Your Bag</h1>
      
      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <p style={{ fontSize: "18px", marginBottom: "24px" }}>Your bag is empty, but you still look good.</p>
          <Link to="/collection" className="shop-all-btn">Shop all products</Link>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "60px" }}>
          <div>
            <div style={{ borderBottom: "1px solid #e8e0dc", paddingBottom: "16px", display: "flex", justifyContent: "space-between", color: "#666", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              <span>Product</span>
              <span style={{ width: "200px", display: "flex", justifyContent: "space-between" }}>
                <span>Quantity</span>
                <span>Total</span>
              </span>
            </div>
            {cartItems.map(item => (
              <div key={item.id} style={{ display: "flex", padding: "32px 0", borderBottom: "1px solid #e8e0dc", alignItems: "center" }}>
                <div style={{ width: "80px", height: "80px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>
                  {item.image ? <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : item.emoji}
                </div>
                <div style={{ flex: 1, paddingLeft: "24px" }}>
                  <div style={{ fontWeight: 600, fontSize: "16px", marginBottom: "4px" }}>{item.name}</div>
                  <div style={{ color: "#666", fontSize: "14px", marginBottom: "12px" }}>Rs. {item.price.toLocaleString()}</div>
                  <button onClick={() => removeFromCart(item.id)} style={{ fontSize: "12px", textDecoration: "underline", color: "#888" }}>Remove</button>
                </div>
                <div style={{ width: "200px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div className="cart-item-quantity" style={{ marginTop: 0 }}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span style={{ width: "24px", textAlign: "center", fontSize: "14px" }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div style={{ fontWeight: 600 }}>Rs. {(item.price * item.quantity).toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ background: "#fafafa", padding: "32px", borderRadius: "4px", height: "fit-content" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "24px", borderBottom: "1px solid #e8e0dc", paddingBottom: "16px" }}>Order Summary</h2>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", fontSize: "14px" }}>
              <span>Subtotal</span>
              <span>Rs. {total.toLocaleString()}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px", fontSize: "14px", color: "#666" }}>
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px", fontSize: "16px", fontWeight: 700, borderTop: "1px solid #e8e0dc", paddingTop: "16px" }}>
              <span>Total</span>
              <span>Rs. {total.toLocaleString()}</span>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
