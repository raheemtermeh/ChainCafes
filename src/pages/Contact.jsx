import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا می‌توانید کد ارسال فرم را اضافه کنید
    alert("پیام شما ارسال شد!");
  };

  return (
    <div className="bg-dark text-lightText min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          تماس با ما
        </h1>
        <p className="text-lg leading-relaxed mb-8 text-center">
          برای سوالات، پیشنهادات یا نظرات خود، می‌توانید از طریق فرم زیر با ما
          در تماس باشید. ما به سرعت به شما پاسخ خواهیم داد.
        </p>

        <form
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">
              نام شما
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-lightText rounded-lg outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="email">
              ایمیل شما
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-lightText rounded-lg outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="message">
              پیام شما
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-lightText rounded-lg outline-none"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-dark py-3 rounded-lg hover:bg-accent transition-colors duration-300"
          >
            ارسال پیام
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
