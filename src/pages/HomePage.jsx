import { useState } from "react";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import CustomCoffeeSection from "../components/CustomCoffeeSection";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import LiveMakeCoffee from "../components/LiveMakeCoffee";
import LittleView from "../components/LittleView";

function HomePage() {
  const [quantities, setQuantities] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { addToCart } = useCart();

  const bestSellingProducts = [
    { id: 1, name: "اسپرسو", price: 4 },
    { id: 2, name: "کاپوچینو", price: 5 },
    { id: 3, name: "لاته", price: 6 },
  ];

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const handleAddToCart = (product) => {
    if (quantities[product.id]) {
      addToCart({ ...product, quantity: quantities[product.id] });
      setSidebarOpen(true);
    }
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-outer font-IranianSans text-lightText">
      {" "}
      <Header />
      <Banner />
      <LiveMakeCoffee />
      <LittleView />
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center text-primary">
          محصولات پرفروش
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bestSellingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={quantities[product.id] || 0}
              onAdd={(id) => handleQuantityChange(id, 1)}
              onRemove={(id) => handleQuantityChange(id, -1)}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>
      {/* <CustomCoffeeSection /> */}
      <Footer />
      <Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
}

export default HomePage;
