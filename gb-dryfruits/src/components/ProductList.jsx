import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productService";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">GB Dry Fruits Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p._id} className="border rounded-lg p-3 shadow-sm">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
            <h3 className="text-lg font-semibold mt-2">{p.name}</h3>
            <p className="text-gray-700">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
