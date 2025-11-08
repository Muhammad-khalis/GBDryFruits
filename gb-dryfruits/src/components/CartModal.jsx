import React from "react";

function CartModal({ cart, onClose, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4">🛍️ Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border-b py-2"
              >
                <div>
                  <h3 className="text-lg font-semibold text-green-700">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Rs. {item.price} × {item.qty}
                  </p>
                </div>
                <button
                  onClick={() => onRemove(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-green-800">
                Total: Rs. {total}
              </h3>
              <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">
                Checkout
              </button>
            </div>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-400 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
