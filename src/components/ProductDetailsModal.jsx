import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

const ProductDetailsModal = ({ product, isOpen, onClose, addToCart }) => {
  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [customization, setCustomization] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (product) {

      const defaultCustomization = {};
      product.ingredients.forEach((ingredient) => {

        const defaultQuantity =
          parseInt(product.defaultIngredients[ingredient]) || 0;
        defaultCustomization[ingredient] = defaultQuantity;
      });
      setCustomization(defaultCustomization);
    }
  }, [product]);

  if (!product) {
    return <div>محصولی انتخاب نشده است.</div>;
  }

  const handleIngredientChange = (ingredient, value) => {
    const maxAllowed = 5;

    const numberValue = Math.max(
      0,
      Math.min(maxAllowed, parseInt(value, 10) || 0)
    );

    setCustomization((prev) => ({
      ...prev,
      [ingredient]: numberValue,
    }));
  };

  const handleRemoveIngredient = (ingredient) => {
    setCustomization((prev) => {
      const updated = { ...prev };
      delete updated[ingredient];
      return updated;
    });
  };

  const handleAddToCart = () => {
    addToCart({ ...product, size, quantity, customization });
    onClose();
    setSidebarOpen(true);
  };

  if (!isOpen) return null;

  const price =
    product.sizePrices && product.sizePrices[size]
      ? Number(product.sizePrices[size]) // مطمئن شوید که قیمت عدد است
      : "نامشخص";

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="fixed inset-0 bg-[#000000] bg-opacity-50 flex justify-center items-center">
        <div className="bg-[#080818] rounded-lg shadow-lg p-6 w-96">
          
          <button onClick={onClose} className="text-red-500 float-right">
            X
          </button>
          
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
          <p className="mb-4">{product.description}</p>
          <p className="mb-4">قیمت: {price} تومان</p>
          <div className="mb-4">
            <label className="block font-bold mb-2">اندازه</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-2 bg-white text-black rounded-lg"
            >
              <option value="small">کوچک</option>
              <option value="medium">متوسط</option>
              <option value="large">بزرگ</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block font-bold mb-2">تعداد</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))
              }
              min="1"
              className="w-full p-2 bg-white text-black rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">سفارشی‌سازی مواد</label>
            {product.ingredients.map((ingredient) => (
              <div
                key={ingredient}
                className="flex justify-between items-center mb-2"
              >
                <span>{ingredient}</span>
                <div className="flex">
                  <input
                    type="number"
                    value={customization[ingredient] || 0} // مقدار عددی
                    onChange={(e) =>
                      handleIngredientChange(ingredient, e.target.value)
                    }
                    className="w-20 p-2 bg-white text-black rounded-lg mr-2"
                  />
                  <button
                    onClick={() => handleRemoveIngredient(ingredient)}
                    className="text-red-500 font-bold"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
      
    </>
  );
};

export default ProductDetailsModal;
