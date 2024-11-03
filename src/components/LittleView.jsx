


const LittleView = () => {
  const coffees = [
    {
      name: "کاپوچینو",
      price: "۴۰",
      description:
        "این یک متن ساختگی است که برای نمایش صنعت چاپ و حروفچینی استفاده می‌شود.",
    },
    {
      name: "آمریکانو",
      price: "۴۰",
      description:
        "این یک متن ساختگی است که برای نمایش صنعت چاپ و حروفچینی استفاده می‌شود.",
    },
    {
      name: "اسپرسو",
      price: "۴۰",
      description:
        "این یک متن ساختگی است که برای نمایش صنعت چاپ و حروفچینی استفاده می‌شود.",
    },
    {
      name: "کاپوچینو",
      price: "۴۰",
      description:
        "این یک متن ساختگی است که برای نمایش صنعت چاپ و حروفچینی استفاده می‌شود.",
    },
    {
      name: "آمریکانو",
      price: "۴۰",
      description:
        "این یک متن ساختگی است که برای نمایش صنعت چاپ و حروفچینی استفاده می‌شود.",
    },
    {
      name: "اسپرسو",
      price: "۴۰",
      description:
        "این یک متن ساختگی است که برای نمایش صنعت چاپ و حروفچینی استفاده می‌شود.",
    },
    {
      name: "کاپوچینو",
      price: "۴۰",
      description:
        "این یک متن ساختگی است که برای نمایش صنعت چاپ و حروفچینی استفاده می‌شود.",
    },
    {
      name: "آمریکانو",
      price: "۴۰",
      description:
        "این یک متن ساختگی است که برای نمایش صنعت چاپ و حروفچینی استفاده می‌شود.",
    },
    {
      name: "اسپرسو",
      price: "۴۰",
      description:
        "این یک متن ساختگی است که برای نمایش صنعت چاپ و حروفچینی استفاده می‌شود.",
    },
  ];

  return (
    <div className="py-12 px-6">
      <div className="text-center lightText mb-8">
        <h1 className="text-4xl font-bold mb-4">
          چه نوع قهوه‌ای برای شما سرو می‌کنیم؟
        </h1>
        <p className="text-lg">
          ما اینجا هستیم تا از شما بشنویم و بهترین کیفیت را ارائه دهیم
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {coffees.map((coffee, index) => (
          <div
            key={index}
            className="bg-custom card-hover-effect shadow-md p-6 flex justify-between items-center h-40 w-full"
          >
            <div className="relative z-10 content">
              <span className="text-2xl font-bold text-accent">
                {coffee.price}
              </span>
              <h3 className="text-2xl font-semibold text-right mb-2 text-secondary">
                {coffee.name}
              </h3>
              <p className="text-primary text-lg leading-relaxed">
                {coffee.description}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-outer"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LittleView;
