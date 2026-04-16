import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import "./index.css";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("Appnstruct-cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart JSON");
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("Appnstruct-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-container">
      <AnnouncementBar />
      <Navbar cartCount={cartCount} setCartOpen={setCartOpen} />

      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/collection" element={<Collection addToCart={addToCart} />} />
          <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        </Routes>
      </main>

      <Footer />
      <CartDrawer open={cartOpen} setOpen={setCartOpen} cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
