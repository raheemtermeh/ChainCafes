  import espressoImg from "./assets/espresso.jfif";
  import cappuccinoImg from "./assets/cappuccino.jfif";
  import latteImg from "./assets/latte.jfif";
  import mochaImg from "./assets/mocha.jfif";
  import americanoImg from "./assets/americano.jfif";
  import juiceImg from "./assets/juice.jfif";
  import chocoShakeImg from "./assets/shake.jfif";
  import iceCoffeeImg from "./assets/iceCoffe.jfif";
  import lemonadeImg from "./assets/lemon.jfif";
  import chickenSandwichImg from "./assets/Morghsandwich.jfif";
  import pastaImg from "./assets/pasta.jfif";
  import burgerImg from "./assets/hamburger.jfif";
  import pizzaImg from "./assets/pizza.jfif";
  import saladImg from "./assets/salad.jfif";

  export const products = {
    hotDrinks: [
      {
        id: 1,
        name: "اسپرسو",
        sizePrices: {
          small: 4,
          medium: 4.5,
          large: 5,
        },
        image: espressoImg,
        description: "قهوه خالص",
        ingredients: ["قهوه"],
        defaultIngredients: {
          قهوه: "50ml",
        },
      },
      {
        id: 2,
        name: "کاپوچینو",
        sizePrices: {
          small: 5,
          medium: 6,
          large: 6.5,
        },
        image: cappuccinoImg,
        description: "قهوه، شیر و کف شیر",
        ingredients: ["قهوه", "شیر", "کف شیر"],
        defaultIngredients: {
          قهوه: "40ml",
          شیر: "100ml",
          "کف شیر": "50ml",
        },
      },
      {
        id: 3,
        name: "لاته",
        sizePrices: {
          small: 6,
          medium: 7,
          large: 7.5,
        },
        image: latteImg,
        description: "قهوه، شیر و فوم شیر",
        ingredients: ["قهوه", "شیر", "فوم شیر"],
        defaultIngredients: {
          قهوه: "40ml",
          شیر: "150ml",
          "فوم شیر": "30ml",
        },
      },
      {
        id: 4,
        name: "موکا",
        sizePrices: {
          small: 6.5,
          medium: 7,
          large: 7.5,
        },
        image: mochaImg,
        description: "قهوه و شکلات",
        ingredients: ["قهوه", "شکلات"],
        defaultIngredients: {
          قهوه: "40ml",
          شکلات: "30g",
        },
      },
      {
        id: 5,
        name: "آمریکانو",
        sizePrices: {
          small: 4.5,
          medium: 5,
          large: 5.5,
        },
        image: americanoImg,
        description: "قهوه رقیق شده با آب",
        ingredients: ["قهوه", "آب"],
        defaultIngredients: {
          قهوه: "30ml",
          آب: "100ml",
        },
      },
    ],
    coldDrinks: [
      {
        id: 6,
        name: "آبمیوه طبیعی",
        sizePrices: {
          small: 3,
          medium: 3.5,
          large: 4,
        },
        image: juiceImg,
        description: "آبمیوه طبیعی بدون مواد افزودنی",
        ingredients: ["آبمیوه"],
        defaultIngredients: {
          آبمیوه: "200ml",
        },
      },
      {
        id: 7,
        name: "شیک شکلات",
        sizePrices: {
          small: 7,
          medium: 7.5,
          large: 8,
        },
        image: chocoShakeImg,
        description: "شکلات و شیر",
        ingredients: ["شکلات", "شیر"],
        defaultIngredients: {
          شکلات: "50g",
          شیر: "150ml",
        },
      },
      {
        id: 8,
        name: "آیس‌کافی",
        sizePrices: {
          small: 5.5,
          medium: 6,
          large: 6.5,
        },
        image: iceCoffeeImg,
        description: "قهوه سرد",
        ingredients: ["قهوه", "شکر", "یخ"],
        defaultIngredients: {
          قهوه: "40ml",
          شکر: "10g",
          یخ: "100g",
        },
      },
      {
        id: 9,
        name: "لیموترش",
        sizePrices: {
          small: 4,
          medium: 4.5,
          large: 5,
        },
        image: lemonadeImg,
        description: "لیموناد تازه",
        ingredients: ["لیمو", "آب", "شکر"],
        defaultIngredients: {
          لیمو: "50g",
          آب: "150ml",
          شکر: "10g",
        },
      },
    ],
    food: [
      {
        id: 10,
        name: "ساندویچ مرغ",
        sizePrices: {
          small: 8,
          medium: 9,
          large: 10,
        },
        image: chickenSandwichImg,
        description: "مرغ، سبزیجات و سس",
        ingredients: ["مرغ", "سبزیجات", "سس"],
        defaultIngredients: {
          مرغ: "100g",
          سبزیجات: "50g",
          سس: "20ml",
        },
      },
      {
        id: 11,
        name: "پاستا",
        sizePrices: {
          small: 9,
          medium: 10,
          large: 11,
        },
        image: pastaImg,
        description: "پاستا با سس سفید و پنیر",
        ingredients: ["پاستا", "سس سفید", "پنیر"],
        defaultIngredients: {
          پاستا: "200g",
          "سس سفید": "100ml",
          پنیر: "50g",
        },
      },
      {
        id: 12,
        name: "همبرگر",
        sizePrices: {
          small: 7.5,
          medium: 8,
          large: 9,
        },
        image: burgerImg,
        description: "گوشت گریل شده، پنیر و سبزیجات",
        ingredients: ["گوشت", "پنیر", "سبزیجات"],
        defaultIngredients: {
          گوشت: "150g",
          پنیر: "30g",
          سبزیجات: "50g",
        },
      },
      {
        id: 13,
        name: "پیتزا",
        sizePrices: {
          small: 10,
          medium: 11,
          large: 12,
        },
        image: pizzaImg,
        description: "پیتزا با مواد دلخواه شما",
        ingredients: ["خمیر", "پنیر", "سس", "تاپینگ"],
        defaultIngredients: {
          خمیر: "200g",
          پنیر: "100g",
          سس: "50ml",
          تاپینگ: "به دلخواه",
        },
      },
      {
        id: 14,
        name: "سالاد",
        sizePrices: {
          small: 6,
          medium: 7,
          large: 8,
        },
        image: saladImg,
        description: "سالاد تازه با سبزیجات و سس",
        ingredients: ["سبزیجات", "سس"],
        defaultIngredients: {
          سبزیجات: "100g",
          سس: "20ml",
        },
      },
    ],
  };
