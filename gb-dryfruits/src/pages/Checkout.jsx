import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart = [], clearCart } = location.state || {};

  // ✅ Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // ✅ If user directly visits checkout without cart, redirect back
  useEffect(() => {
    if (!cart || cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  // ✅ Handle order confirmation
  const handleConfirmOrder = () => {
    alert("🎉 Thank you for your order! Your dry fruits are on the way!");
    if (clearCart) clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-green-900 mb-8">Checkout</h1>

      {cart.length > 0 ? (
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b-2 border-yellow-400">
                <th className="py-2">Product</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="py-2">{item.name}</td>
                  <td>{item.qty}</td>
                  <td>Rs. {item.price * item.qty}</td>
                </tr>
              ))}
              <tr>
                <td className="font-bold pt-4 text-green-800">Total</td>
                <td></td>
                <td className="font-bold pt-4 text-green-800">Rs. {total}</td>
              </tr>
            </tbody>
          </table>

          {/* Confirm Order Button */}
          <button
            onClick={handleConfirmOrder}
            className="mt-6 w-full bg-green-700 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-800 transition"
          >
            Confirm Order
          </button>
        </div>
      ) : (
        <p className="text-gray-700 mt-10 text-lg">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Checkout;
