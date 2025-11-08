import React from "react";

function ProductCard({ item, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4">
      <img
        src={item.img}
        alt={item.name}
        className="rounded-xl w-full h-48 object-cover"
      />
      <h3 className="text-xl font-semibold mt-4 text-green-800">{item.name}</h3>
      <p className="text-gray-600 mt-1">Rs. {item.price}</p>
      <button
        onClick={onAdd}
        className="mt-3 bg-yellow-600 text-white px-5 py-2 rounded-lg hover:bg-yellow-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
