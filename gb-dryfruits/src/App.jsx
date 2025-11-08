import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer"; // ✅ Import Footer
import api from "./api/api";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();

  // ✅ Fetch products from backend
  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("❌ Error fetching products:", err));
  }, []);

  // ✅ Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item._id === product._id);
      if (existing) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  // ✅ Remove item from Cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // ✅ Clear cart after checkout
  const clearCart = () => {
    setCart([]);
  };

  // ✅ Proceed to checkout
  const goToCheckout = () => {
    setShowCart(false);
    navigate("/checkout", { state: { cart, clearCart } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 flex flex-col">
      {/* Header with Cart button */}
      <Header onCartClick={() => setShowCart(true)} cartCount={cart.length} />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-28 px-4">
        <h1 className="text-5xl font-extrabold text-green-900 mb-4 drop-shadow-md">
          Welcome to GB Dry Fruits
        </h1>
        <p className="text-gray-700 max-w-2xl mb-6 text-lg">
          Fresh, organic, and hand-picked dry fruits directly from the mountains
          of Gilgit Baltistan — taste the natural richness in every bite!
        </p>
        <button
          onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
          className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-300 shadow-lg"
        >
          Order Now
        </button>
      </section>

      {/* Product Section */}
      <section
        id="products"
        className="py-16 px-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 flex-grow"
      >
        {products.length > 0 ? (
          products.map((item) => (
            <ProductCard key={item._id} item={item} onAdd={() => addToCart(item)} />
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            Loading products...
          </p>
        )}
      </section>

      {/* Cart Modal */}
      {showCart && (
        <CartModal
          cart={cart}
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
          onCheckout={goToCheckout}
        />
      )}

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}

export default App;
