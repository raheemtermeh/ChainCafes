import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import MenuPage from "./src/pages/MenuPage";
import CartPage from "./src/pages/CartPage";
import LoginPage from "./src/pages/LoginPage";
import OrderSummaryPage from "./src/pages/OrderSummaryPage";
import Profile from "./src/pages/Profile";
import AdminDashboard from "./src/pages/admin/AdminDashboard";
import { CartProvider } from "./src/context/CartContext";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";

function App() {
  const isAuthenticated = localStorage.getItem("authenticated") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true"; // برای شناسایی ادمین

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={isAuthenticated ? <CartPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin"
            element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/order-summary" element={<OrderSummaryPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
