import { useState } from "react";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import Sidebar from "../components/Sidebar";
import ProductDetailsModal from "../components/ProductDetailsModal";
import { products } from "../MenuData"; 

function MenuPage() {
  const { addToCart } = useCart();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("hotDrinks");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); 
    setSidebarOpen(true); 
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
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
          منوی ما
        </h2>

        <div className="text-center mb-6">
          <button
            onClick={() => setActiveCategory("hotDrinks")}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === "hotDrinks"
                ? "bg-primary text-dark"
                : "bg-gray-700 text-lightText"
            } hover:bg-accent transition-colors duration-300`}
          >
            نوشیدنی‌های گرم
          </button>
          <button
            onClick={() => setActiveCategory("coldDrinks")}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === "coldDrinks"
                ? "bg-primary text-dark"
                : "bg-gray-700 text-lightText"
            } hover:bg-accent transition-colors duration-300 ml-4`}
          >
            نوشیدنی‌های سرد
          </button>
          <button
            onClick={() => setActiveCategory("food")}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === "food"
                ? "bg-primary text-dark"
                : "bg-gray-700 text-lightText"
            } hover:bg-accent transition-colors duration-300 ml-4`}
          >
            غذاها
          </button>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products[activeCategory].map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl text-right font-semibold mb-2">
                {product.name}
              </h3>
              {/* <p className="text-lg text-right mb-4">
                {product.sizePrices.small} تومان - کوچک |{" "}
                {product.sizePrices.medium} تومان - متوسط |{" "}
                {product.sizePrices.large} تومان - بزرگ
              </p>{" "} */}

              <button
                onClick={() => handleProductClick(product)}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg"
              >
                افزودن به سبد خرید
              </button>
            </div>
          ))}
        </div>
      </main>

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          isOpen={true}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}

      <Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
}

export default MenuPage;
