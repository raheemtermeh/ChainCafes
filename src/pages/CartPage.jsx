import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Calculate total price based on selected size prices
  const total = cart.reduce((acc, item) => {
    return (
      acc +
      Object.keys(item.sizePrices).reduce((sum, size) => {
        // Add the price of the current size multiplied by its specific quantity
        return sum + (item.sizePrices[size] || 0);
      }, 0)
    );
  }, 0);

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-dark text-lightText relative">
      <Header />

      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed bottom-4 right-4 bg-primary text-dark py-2 px-4 rounded-full shadow-lg hover:bg-accent transition-colors duration-300"
      >
        سبد خرید
      </button>

      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-primary">
          سبد خرید شما
        </h2>
        {cart.length === 0 ? (
          <p className="text-center text-lg">سبد خرید شما خالی است</p>
        ) : (
          <div className="border rounded-lg p-4 bg-gray-800">
            {cart.map((item) =>
              // Loop through each size in the item
              Object.keys(item.sizePrices).map((size) => (
                <div
                  key={`${item.id}-${size}`} // Unique key for each item-size combination
                  className="flex justify-between items-center mb-4 p-2 border-b border-gray-600"
                >
                  <span className="flex-1">
                    {item.name} ({size}) x
                    {item.sizePrices[size] / item.sizePrices[size]}{" "}
                    {/* Show the quantity for the specific size */}
                  </span>
                  <span>
                    {item.sizePrices[size]} تومان{" "}
                    {/* Show the total price for the specific size */}
                  </span>{" "}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors duration-300"
                  >
                    حذف
                  </button>
                </div>
              ))
            )}
            <div className="flex justify-between font-semibold mt-4">
              <span>مجموع</span>
              <span>{total} تومان</span>
            </div>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
              پرداخت
            </button>
          </div>
        )}
      </main>

      <Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
}

export default CartPage;
