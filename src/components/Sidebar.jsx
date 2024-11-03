import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 w-80 bg-gray-900 text-white h-full overflow-y-auto transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <div className="relative p-4">
        <button onClick={onClose} className="absolute top-4 left-4 text-2xl">
          بستن
        </button>
        <h2 className="text-2xl font-bold mb-4">سبد خرید</h2>
        {cart.length === 0 ? (
          <p>سبد خرید شما خالی است</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 p-2 border-b border-gray-700"
              >
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>
                  {(item.price * item.quantity).toLocaleString()} تومان
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition-colors duration-300"
                >
                  حذف
                </button>
              </div>
            ))}
            <div className="flex justify-between font-semibold mt-4">
              <span>مجموع</span>
              <span>{total.toLocaleString()} تومان</span>
            </div>
            <Link
              to="/cart"
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300 block text-center"
              onClick={onClose} 
            >
              پرداخت
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
