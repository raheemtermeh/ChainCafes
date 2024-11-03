function CoffeeItem({ coffee }) {
  return (
    <div className="bg-card-bg text-cream p-6 rounded-lg text-center">
      <h3 className="text-golden text-2xl mb-4">{coffee.name}</h3>
      <p className="text-lg mb-6">{coffee.price} تومان</p>
      <button className="bg-cream text-black py-2 px-4 rounded-lg">
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default CoffeeItem;
