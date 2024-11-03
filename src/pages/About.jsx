import React from "react";

const About = () => {
  return (
    <div className="bg-dark text-lightText min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          درباره ما
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-accent">کافه آنلاین</h2>
            <p className="leading-relaxed text-lg">
              کافه آنلاین، جایی برای استراحت و لذت از طعم عالی نوشیدنی‌ها و
              غذاهای متنوع است. ما در تلاش هستیم تا محیطی مدرن و راحت برای شما
              فراهم کنیم تا از لحظات خود در کنار دوستان و خانواده لذت ببرید.
            </p>
            <p className="leading-relaxed text-lg">
              هدف ما ارائه بهترین خدمات و محصولات با کیفیت بالا و در عین حال،
              فراهم کردن تجربه‌ای مدرن و دیجیتال برای سفارش‌های آنلاین و رزرو
              میز می‌باشد.
            </p>
            <p className="leading-relaxed text-lg">
              تیم ما متشکل از افراد حرفه‌ای و علاقه‌مند به قهوه و غذاهای با
              کیفیت است و ما همیشه به دنبال ارائه تجربه‌ای عالی برای مشتریان خود
              هستیم.
            </p>
          </div>

          <div className="relative">
            <img
              src="/assets/cafe_interior.jpg"
              alt="داخل کافه"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-accent">تیم ما</h2>
          <div className="flex justify-center mt-6 space-x-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
              <img
                src="/assets/team_member1.jpg"
                alt="عضو تیم"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">علی رضایی</h3>
              <p className="text-sm text-gray-400">مدیر کافه</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
              <img
                src="/assets/team_member2.jpg"
                alt="عضو تیم"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">مریم صادقی</h3>
              <p className="text-sm text-gray-400">سرآشپز</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
              <img
                src="/assets/team_member3.jpg"
                alt="عضو تیم"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">سارا احمدی</h3>
              <p className="text-sm text-gray-400">مسئول سفارشات آنلاین</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
