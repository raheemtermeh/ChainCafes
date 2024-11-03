import React from "react";

function ProductCard({ product, quantity, onAdd, onRemove, onAddToCart }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="mb-4">{product.price} تومان</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onRemove(product.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => onAdd(product.id)}
            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
          >
            +
          </button>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600"
        >
          افزودن به سبد
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
