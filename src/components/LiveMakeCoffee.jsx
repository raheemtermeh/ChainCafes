import React from "react";
import { FaPlay } from "react-icons/fa";
import img from "../assets/posterCafePhoto/COFFEE-Banner2.png";

const LiveMakeCoffee = () => {
  return (
    <div className="flex  flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-12 p-6">
      <div className="relative w-82 h-82 sm:w-96 sm:h-96">
        <img
          src={img}
          alt="Coffee Making"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="text-right max-w-md">
        <p className="text-sm text-mutedText uppercase mb-2">
          فرآیند زنده درست کردن قهوه
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-lightText mb-4">
          ما فرآیند درست کردن قهوه را به صورت زنده پخش می‌کنیم
        </h2>
        <p className="text-secondary mb-6">
          ما اینجا هستیم تا از شما بشنویم و بهترین کیفیت را ارائه دهیم. این متن
          ساختگی صرفاً برای نمایش ظاهر متن و صنعت چاپ و حروفچینی استفاده شده
          است.
        </p>
        <button className="border border-gray-400 text-mutedText py-2 px-6 rounded-full font-semibold hover:bg-gray-100">
          تماشا کنید
        </button>
      </div>
    </div>
  );
};

export default LiveMakeCoffee;
