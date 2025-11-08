import { useState } from "react";
import api from "../api/api";

function AdminAddProduct() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/admin/addproduct", {
        name,
        img,
        price,
      });

      if (res.status === 200) {
        setMessage("✅ Product added successfully!");
        setName("");
        setImg("");
        setPrice("");
      }
    } catch (err) {
      console.error("Error adding product:", err);
      setMessage("❌ Error adding product. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50">
      <h1 className="text-3xl font-bold mb-6 text-green-800">🛒 Add New Product (Admin)</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-96 space-y-4"
      >
        <input
          type="text"
          placeholder="Product Name"
          className="border border-gray-300 w-full p-2 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="border border-gray-300 w-full p-2 rounded-lg"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price (Rs)"
          className="border border-gray-300 w-full p-2 rounded-lg"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          type="submit"
          className="bg-green-700 text-white w-full py-2 rounded-lg hover:bg-green-800 transition"
        >
          Add Product
        </button>
      </form>

      {message && (
        <p className="mt-4 text-lg font-semibold text-gray-800">{message}</p>
      )}
    </div>
  );
}

export default AdminAddProduct;
