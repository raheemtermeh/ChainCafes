import React from "react";

import backgroundImage2 from "../assets/posterCafePhoto/image.png";

function Banner() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row relative overflow-hidden">
      <div
        className="w-full md:w-full bg-cover bg-center hidden sm:block"
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      ></div>

      <div className="absolute w-full h-full flex items-end p-8  bottom-10">
        <div className="text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            اولین کافی‌شاپ آنلاین زنجیره‌ای
          </h1>
          <p className="text-lg md:text-xl mb-8">
            تجربه‌ای نوین از طعم قهوه و بازی‌های مهیج، همراه با خدمات آنلاین و
            حضوری.
          </p>
          <div className="flex space-x-reverse space-x-4 justify-center">
            <button className="bg-[#ff6600] text-white py-2 px-6 rounded-full font-bold hover:bg-[#ff9933]">
              خدمات ما
            </button>
            <button className="bg-transparent border-2 border-[#ff6600] text-white py-2 px-6 rounded-full font-bold hover:bg-[#ff9933]">
              درباره ما
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
