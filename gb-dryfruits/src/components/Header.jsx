import React from "react";

function Header({ onCartClick, cartCount }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-green-700 text-white shadow-lg py-4 px-8 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold tracking-wide">🌰 GB Dry Fruits</h1>

      <nav className="hidden md:flex gap-8 text-lg">
        <a href="#home" className="hover:text-yellow-300">Home</a>
        <a href="#products" className="hover:text-yellow-300">Products</a>
        <a href="#contact" className="hover:text-yellow-300">Contact</a>
      </nav>

      <button
        onClick={onCartClick}
        className="relative bg-yellow-500 text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-400"
      >
        🛒 Cart
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2">
            {cartCount}
          </span>
        )}
      </button>
    </header>
  );
}

export default Header;
