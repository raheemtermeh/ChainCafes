import React, { useState } from "react";


const initialMenuItems = [
  {
    id: 1,
    name: "اسپرسو",
    category: "نوشیدنی‌های گرم",
    price: 15000,
    active: true,
  },
  {
    id: 2,
    name: "لاته",
    category: "نوشیدنی‌های گرم",
    price: 20000,
    active: true,
  },
  {
    id: 3,
    name: "موکا",
    category: "نوشیدنی‌های سرد",
    price: 25000,
    active: false,
  },
];

const initialOrders = [
  { id: 1, user: "کاربر ۱", product: "اسپرسو", quantity: 2 },
  { id: 2, user: "کاربر ۲", product: "لاته", quantity: 1 },
];

const AdminDashboard = () => {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [orders] = useState(initialOrders);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "نوشیدنی‌های گرم",
    price: "",
    description: "",
    image: "",
  });

  const handleProductChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const addNewProduct = () => {
    const newItem = {
      id: menuItems.length + 1,
      ...newProduct,
      price: parseInt(newProduct.price, 10),
      active: true,
    };
    setMenuItems([...menuItems, newItem]);
    setNewProduct({
      name: "",
      category: "نوشیدنی‌های گرم",
      price: "",
      description: "",
      image: "",
    });
  };

  const toggleActiveStatus = (id) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">پنل ادمین کافه</h1>
        <nav className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">
            صفحه اصلی
          </a>
          <a href="#orders" className="text-gray-300 hover:text-white">
            سفارشات
          </a>
          <a href="#products" className="text-gray-300 hover:text-white">
            مدیریت محصولات
          </a>
          <button className="bg-orange-500 py-2 px-4 rounded-md hover:bg-orange-600">
            خروج
          </button>
        </nav>
      </header>

      <div className="container mx-auto py-8 px-4 space-y-8">
        <div id="orders" className="bg-gray-800 p-6 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">سفارشات کاربران</h2>
          <ul className="space-y-2">
            {orders.map((order) => (
              <li
                key={order.id}
                className="flex justify-between items-center border-b border-gray-600 pb-2"
              >
                <span>
                  {order.user} سفارش داد: {order.product} - تعداد:{" "}
                  {order.quantity}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div id="products" className="bg-gray-800 p-6 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">مدیریت منو</h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b border-gray-600 pb-2"
              >
                <span>
                  {item.name} - {item.category} - {item.price} تومان
                </span>
                <button
                  onClick={() => toggleActiveStatus(item.id)}
                  className={`py-1 px-4 rounded-full ${
                    item.active
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {item.active ? "فعال" : "غیرفعال"}
                </button>
              </li>
            ))}
          </ul>

          {/* فرم اضافه کردن محصول جدید */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">
              اضافه کردن محصول جدید
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="نام محصول"
                value={newProduct.name}
                onChange={handleProductChange}
                className="bg-gray-700 p-2 rounded-md text-white"
              />
              <input
                type="number"
                name="price"
                placeholder="قیمت"
                value={newProduct.price}
                onChange={handleProductChange}
                className="bg-gray-700 p-2 rounded-md text-white"
              />
              <select
                name="category"
                value={newProduct.category}
                onChange={handleProductChange}
                className="bg-gray-700 p-2 rounded-md text-white"
              >
                <option value="نوشیدنی‌های گرم">نوشیدنی‌های گرم</option>
                <option value="نوشیدنی‌های سرد">نوشیدنی‌های سرد</option>
                <option value="غذاها">غذاها</option>
              </select>
              <input
                type="text"
                name="description"
                placeholder="توضیحات"
                value={newProduct.description}
                onChange={handleProductChange}
                className="bg-gray-700 p-2 rounded-md text-white"
              />
              <input
                type="text"
                name="image"
                placeholder="لینک تصویر"
                value={newProduct.image}
                onChange={handleProductChange}
                className="bg-gray-700 p-2 rounded-md text-white"
              />
            </div>
            <button
              onClick={addNewProduct}
              className="mt-4 bg-orange-500 py-2 px-4 rounded-md hover:bg-orange-600 w-full"
            >
              اضافه کردن محصول جدید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
