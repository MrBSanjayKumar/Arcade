import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import CartModal from "./components/CartModal";
import PRODUCTS from "./data/products";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const [sort, setSort] = useState("none");
  const [showProduct, setShowProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // --- Cart functions ---
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setCart([]);

  // --- Filtering + Sorting ---
  useEffect(() => {
    let list = [...PRODUCTS];
    if (query) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.desc.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (genre !== "all") {
      list = list.filter((p) => p.genre === genre);
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name-asc")
      list.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "name-desc")
      list.sort((a, b) => b.title.localeCompare(a.title));
    setProducts(list);
  }, [query, genre, sort]);

  return (
    <>
      <Navbar
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        onCartOpen={() => setCartOpen(true)}
      />

      <section className="card-bg-color min-vh-100">
        <div className="container py-4">
          {/* Filters */}
          <div className="d-flex flex-wrap gap-2 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search games..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ maxWidth: "200px" }}
            />
            <select
              className="form-select"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              style={{ maxWidth: "160px" }}
            >
              <option value="all">All Genres</option>
              {[...new Set(PRODUCTS.map((p) => p.genre))].map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <select
              className="form-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              style={{ maxWidth: "160px" }}
            >
              <option value="none">Sort</option>
              <option value="price-asc">Price ↑</option>
              <option value="price-desc">Price ↓</option>
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="row">
            <ProductGrid
              products={products}
              onAdd={addToCart}
              onDetails={setShowProduct}
            />
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ToastContainer />
      <ProductModal
        show={!!showProduct}
        onHide={() => setShowProduct(null)}
        product={showProduct}
        onAdd={addToCart}
      />

      {/* Cart Modal */}
      <CartModal
        show={cartOpen}
        onHide={() => setCartOpen(false)}
        cart={cart}
        onUpdateQty={updateQty}
        onRemove={removeFromCart}
        onClear={clearCart}
      />
    </>
  );
}

export default App;
