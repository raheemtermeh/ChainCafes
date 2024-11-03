import { useState } from "react";
import { useCart } from "../context/CartContext";

function CustomCoffeeSection() {
  const { addToCart } = useCart();
  const [customOrder, setCustomOrder] = useState({
    name: "قهوه سفارشی",
    milk: 1, 
    sugar: 1, 
    price: 10, 
  });

  const handleMilkChange = (amount) => {
    setCustomOrder((prev) => ({
      ...prev,
      milk: Math.max(0, prev.milk + amount),
    }));
  };

  const handleSugarChange = (amount) => {
    setCustomOrder((prev) => ({
      ...prev,
      sugar: Math.max(0, prev.sugar + amount),
    }));
  };

  const handleAddToCart = () => {
    addToCart(customOrder);
  };

  return (
    <section className="container mx-auto py-12 px-4 bg-secondary text-white rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl font-semibold mb-6 text-center text-primary">
        ساخت قهوه سفارشی
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold">شیر</h3>
          <div className="flex items-center space-x-2 mt-2">
            <button
              onClick={() => handleMilkChange(-1)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              -
            </button>
            <span>{customOrder.milk} پیمانه</span>
            <button
              onClick={() => handleMilkChange(1)}
              className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold">شکر</h3>
          <div className="flex items-center space-x-2 mt-2">
            <button
              onClick={() => handleSugarChange(-1)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              -
            </button>
            <span>{customOrder.sugar} قاشق</span>
            <button
              onClick={() => handleSugarChange(1)}
              className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleAddToCart}
          className="bg-primary text-dark py-3 px-6 rounded-md hover:bg-accent"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </section>
  );
}

export default CustomCoffeeSection;
