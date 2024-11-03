import { useCart } from "../context/CartContext";
import Header from "../components/Header"; // Assuming you have a Header component
import { Link } from "react-router-dom";

function OrderSummaryPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-dark text-lightText">
      <Header />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">جزئیات سفارش</h2>
        {cart.length === 0 ? (
          <p className="text-center text-lg">سبد خرید شما خالی است</p>
        ) : (
          <div className="border rounded-lg p-4 bg-gray-800">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 p-2 border-b border-gray-700"
              >
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>{item.price * item.quantity} تومان</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold mt-4">
              <span>مجموع</span>
              <span>{total} تومان</span>
            </div>
            <Link
              to="/"
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 block text-center"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderSummaryPage;
