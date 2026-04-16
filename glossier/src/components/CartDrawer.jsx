import { Link } from "react-router-dom";

export default function CartDrawer({ open, setOpen, cartItems = [], removeFromCart }) {
  if (!open) return null;

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      <div className="cart-overlay" onClick={() => setOpen(false)} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h3>Shopping Bag</h3>
          <button className="cart-close" onClick={() => setOpen(false)}>×</button>
        </div>
        <div className="cart-body" style={{ padding: cartItems.length > 0 ? "0" : "24px", overflowY: "auto", justifyContent: cartItems.length > 0 ? "flex-start" : "center" }}>
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your bag is empty,</p>
              <span>but you still look good.</span>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={idx} className="cart-item" style={{ padding: "16px 24px" }}>
                <div style={{ width: 60, height: 60, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>
                  {item.image ? <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : item.emoji}
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">Rs. {item.price.toLocaleString()}</div>
                  <div className="cart-item-quantity">
                    <span>Qty: {item.quantity}</span>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 16, fontWeight: 600 }}>
            <span>Estimated total</span>
            <span>Rs. {total.toLocaleString()}</span>
          </div>
          <Link to="/cart" onClick={() => setOpen(false)}>
            <button className="checkout-btn">Checkout</button>
          </Link>
          <p style={{ fontSize: 11, color: "#aaa", textAlign: "center", marginTop: 12, lineHeight: 1.5 }}>
            By checking out, you agree to our Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    </>
  );
}
