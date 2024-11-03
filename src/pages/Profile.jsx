import React, { useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaEdit,
  FaSave,
} from "react-icons/fa";

const Profile = () => {
  // اطلاعات کاربر
  const initialUser = {
    name: "نام کاربر",
    email: "user@example.com",
    phone: "+98 912 345 6789",
    joinDate: "فروردین 1402",
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false); // برای مدیریت وضعیت ویرایش
  const [formData, setFormData] = useState(initialUser); // داده‌های فرم

  const orderHistory = [
    { id: 1, date: "22 شهریور 1402", total: "300,000 تومان" },
    { id: 2, date: "18 مرداد 1402", total: "450,000 تومان" },
  ];

  // مدیریت تغییرات فرم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ذخیره تغییرات
  const handleSave = () => {
    setUser(formData);
    setIsEditing(false); // بازگشت به حالت نمایش
  };

  return (
    <div className="min-h-screen bg-dark text-lightText p-8">
      <div className="max-w-4xl mx-auto bg-[#3e2723] p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">پروفایل کاربری</h1>
          {isEditing ? (
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              onClick={handleSave}
            >
              <FaSave className="inline-block mr-2" /> ذخیره اطلاعات
            </button>
          ) : (
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              onClick={() => setIsEditing(true)}
            >
              <FaEdit className="inline-block mr-2" /> ویرایش اطلاعات
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <div className="text-center md:text-right md:w-1/3 mb-6 md:mb-0">
            <FaUserCircle className="text-9xl text-yellow-500 mb-4 mx-auto md:mx-0" />
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-2xl font-semibold bg-gray-700 text-white p-2 rounded-lg w-full text-center md:text-right"
              />
            ) : (
              <h2 className="text-2xl font-semibold">{user.name}</h2>
            )}
            <p className="text-mutedText">کاربر فعال</p>
          </div>

          <div className="md:w-2/3">
            <div className="mb-4 flex items-center">
              <FaEnvelope className="text-xl ml-2" />
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-700 text-white p-2 rounded-lg w-full"
                />
              ) : (
                <span>ایمیل: {user.email}</span>
              )}
            </div>

            <div className="mb-4 flex items-center">
              <FaPhone className="text-xl ml-2" />
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-700 text-white p-2 rounded-lg w-full"
                />
              ) : (
                <span>شماره تماس: {user.phone}</span>
              )}
            </div>

            <div className="mb-4 flex items-center">
              <FaCalendarAlt className="text-xl ml-2" />
              <span>تاریخ عضویت: {user.joinDate}</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">تاریخچه سفارشات</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
          {orderHistory.length === 0 ? (
            <p>هیچ سفارشی ثبت نشده است.</p>
          ) : (
            <ul>
              {orderHistory.map((order) => (
                <li
                  key={order.id}
                  className="flex justify-between items-center p-2 border-b border-gray-700"
                >
                  <span>تاریخ: {order.date}</span>
                  <span>مجموع: {order.total}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
