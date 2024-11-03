import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const username = localStorage.getItem("username");
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const isAuthenticated = localStorage.getItem("authenticated") === "true";
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");
    window.location.reload();
  };

  const handleMenuClick = (route) => {
    if (isAuthenticated) {
      navigate(route);
    } else {
      navigate("/login");
    }
  };

  return (
    <header
      className={`text-white w-full py-4 px-4 sm:px-8 transition-all duration-300 ease-in-out ${
        location.pathname === "/"
          ? "bg-transparent absolute top-0 left-0 w-full z-10"
          : "bg-dark"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex-grow flex justify-center items-center space-x-2 sm:space-x-4 space-x-reverse">
          <Link
            to="/about"
            className="py-1 sm:py-2 px-2 sm:px-4 rounded-full hover:text-yellow-400  hover:bg-primary transition-colors duration-200 ease-in-out text-xs sm:text-base"
          >
            درباره
          </Link>
          <Link
            to="/menu"
            className="py-1 sm:py-2 px-2 sm:px-4 rounded-full hover:bg-primary hover:text-yellow-400 transition-colors duration-200 ease-in-out text-xs sm:text-base"
          >
            منو
          </Link>
          <Link
            to="/"
            className="bg-[#ff66006] py-1 sm:py-2 px-2 sm:px-4 hover:bg-primary rounded-full text-white font-bold hover:text-yellow-400 transition-transform transform hover:scale-105 text-xs sm:text-base"
          >
            خانه
          </Link>
          <Link
            to="/contact"
            className="py-1 sm:py-2 px-2 sm:px-4 rounded-full hover:bg-primary hover:text-yellow-400 transition-colors duration-200 ease-in-out text-xs sm:text-base"
          >
            تماس
          </Link>
          <div className="flex items-center relative">
            {username ? (
              <>
                <span
                  className="cursor-pointer font-bold text-md sm:text-lg hover:text-yellow-400 transition-colors duration-200 ease-in-out"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  {username}
                </span>
                {userMenuOpen && (
                  <div className="absolute top-12 right-0 text-white text-right p-4 rounded-lg shadow-lg z-10 w-40 bg-gray-800 animate-fadeIn">
                    <ul className="space-y-2">
                      <li
                        onClick={() => handleMenuClick("/profile")}
                        className="hover:text-orange-500  cursor-pointer transition-colors duration-200 ease-in-out"
                      >
                        پروفایل
                      </li>
                      {isAdmin ? (
                        <>
                          <li
                            onClick={() => handleMenuClick("/admin")}
                            className="hover:text-orange-500 cursor-pointer transition-colors duration-200 ease-in-out"
                          >
                            پنل ادمین
                          </li>
                          <li
                            onClick={() => handleMenuClick("/messages")}
                            className="hover:text-orange-500 cursor-pointer transition-colors duration-200 ease-in-out"
                          >
                            پیام‌ها
                          </li>
                        </>
                      ) : (
                        <>
                          <li
                            onClick={() => handleMenuClick("/cart")}
                            className="hover:text-orange-500 cursor-pointer transition-colors duration-200 ease-in-out"
                          >
                            سبد خرید
                          </li>
                          <li
                            onClick={() => handleMenuClick("/order-summary")}
                            className="hover:text-orange-500 cursor-pointer transition-colors duration-200 ease-in-out"
                          >
                            تاریخچه سفارشات
                          </li>
                        </>
                      )}
                      <li
                        onClick={handleLogout}
                        className="hover:text-orange-500 cursor-pointer transition-colors duration-200 ease-in-out"
                      >
                        خروج
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="bg-[#ff6600] py-1 sm:py-2 px-2 sm:px-4 rounded-full text-white font-bold hover:text-yellow-400 transition-transform transform hover:scale-105 text-xs sm:text-base"
              >
                ورود / ثبت‌نام
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;


