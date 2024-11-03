import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name === "admin" && password === "admin123") {
      // یوزرنیم و پسوورد ادمین
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("username", "ادمین");
      localStorage.setItem("isAdmin", "true");
      navigate("/admin"); // به پنل ادمین هدایت می‌شود
    } else {
      // کاربر عادی
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("username", name);
      localStorage.setItem("isAdmin", "false");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white hover:text-yellow-400">
            خانه
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-400">
            درباره ما
          </Link>
          <Link to="/menu" className="text-white hover:text-yellow-400">
            منو
          </Link>
        </nav>
      </header>

      <div className="flex items-center justify-center flex-grow">
        <div className="bg-gray-800 p-8 rounded-md shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">
            ورود / ثبت‌نام
          </h2>
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded-md text-white"
          />
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded-md text-white"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            ورود / ثبت‌نام
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
