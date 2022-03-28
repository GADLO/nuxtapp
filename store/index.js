import {v4 as uuidv4} from "uuid";

export const state = () => ({
  fooddata: [
    {
      name: "墨西哥肉卷",
      deliveryTime: 25,
      meal: ["lunch", "dinner"],
      rating: 4.7,
      freeDelivery: true,
      id: "f71400ed-26b1-43d0-940c-7cabd3546dc6",
      menu: [
        {
          item: "塔可",
          img: "taco-taco.jpg",
          price: 15,
          id: "e85dbacc-f721-44e6-af8c-eda2835e2e50",
          options: ["烤羊", "猪肉丝", "牛舌", "烤肉", "鸡肉"],
          addOns: ["无", "酸奶油", "牛油果", "香菜"],
          description: "软玉米饼，您可以选择肉类、洋葱、香菜和莎莎酱",
        },
        {
          item: "墨西哥馅饼",
          img: "taco-quesadilla.png",
          price: 7.0,
          id: "e956a779-941f-41ef-874e-d5f6a6c6e0cb",
          options: ["烤羊", "猪肉丝", "牛舌", "烤肉", "鸡肉"],
          addOns: ["无", "酸奶油", "牛油果", "香菜"],
          description: "面粉玉米饼、融化的奶酪和可选的肉类选择",
        },
        {
          item: "墨西哥卷饼",
          img: "taco-burrito.jpg",
          price: 6.59,
          id: "ecd7c207-acd7-4b58-8685-894ba622949e",
          options: ["烤羊", "猪肉丝", "牛舌", "烤肉", "鸡肉"],
          addOns: ["无", "酸奶油", "牛油果", "香菜"],
          description: "肉、米饭、豆类、洋葱、香菜和莎莎酱",
        },
      ],
    },
    {
      name: "披萨",
      deliveryTime: 40,
      meal: ["lunch", "dinner"],
      rating: 4.5,
      freeDelivery: false,
      id: "e1e569e5-7b75-42cf-8fc3-7638d6c940f8",
      menu: [
        {
          item: "自选搭配",
          img: "pizza-plain.jpg",
          addOns: [
            "无",
            "芥末",
            "辣椒",
            "西红柿",
            "蘑菇",
            "洋葱",
            "青椒",
            "芝士加倍",
          ],
          price: 17.99,
          id: "7644eba9-d6a8-466f-bd49-781bc005cfe5",
          description: "搭配你自己的披萨",
        },
        {
          item: "肉食爱好者",
          img: "pizza-meat.jpg",
          price: 17.99,
          addOns: [
            "无",
            "芥末",
            "辣椒",
            "西红柿",
            "蘑菇",
            "洋葱",
            "青椒",
            "芝士加倍",
          ],
          id: "70ceec44-3ccb-4f92-b149-0ebe2c10704b",
          description: "意大利辣香肠、香肠、意大利腊肠和加拿大培根。",
        },
        {
          item: "素食主义者",
          img: "pizza-veggie.jpg",
          price: 17.99,
          addOns: [
            "无",
            "芥末",
            "辣椒",
            "西红柿",
            "蘑菇",
            "洋葱",
            "青椒",
            "芝士加倍",
          ],
          id: "b27f4d8e-7235-42f9-b0a7-98e76a1afaf0",
          description: "西红柿、橄榄、大蒜、洋葱、蘑菇和铃铛。",
        },
      ],
    },
    {
      name: "点心",
      deliveryTime: 35,
      meal: ["breakfast", "lunch", "dinner"],
      rating: 4.9,
      freeDelivery: true,
      id: "1f9500d2-fd27-422e-acc6-48198d0de5c2",
      menu: [
        {
          item: "虾饺",
          img: "dimsum-shrimp.jpg",
          price: 6.49,
          addOns: ["无", "蒸芝麻球", "芒果布丁", "豆腐花"],
          id: "22672b93-2c65-4fd9-b151-683f7eb7df4a",
          description: "饺子中的有大大的虾",
        },
        {
          item: "灌汤饺",
          img: "dimsum-soup.jpg",
          price: 9.99,
          addOns: ["无", "蒸芝麻球", "芒果布丁", "豆腐花"],
          id: "3a6da02c-2354-4eb8-af07-f9f2d26fa7c2",
          description: "饺子里有猪肉、蟹肉和肉汤。",
        },
        {
          item: "酿茄子",
          img: "dimsum-eggplant.jpg",
          price: 5.59,
          addOns: ["无", "蒸芝麻球", "芒果布丁", "豆腐花"],
          id: "cadd2903-b9cb-4053-9720-c096cc95e8a5",
          description: "茄子里装满酱汁",
        },
      ],
    },
  ],
  cart: [],
});

export const getters = {
  totalPrice: state => {
    if(!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + +next.combinedPrice, 0)
  }
}

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  },
  addToCart: (state, formOutput) => {
    formOutput.id = uuidv4();
    state.cart.push(formOutput);
  },
};

export const actions = {
  async getFoodData({ state, commit }) {
    try {
      await fetch();
    } catch (err) {
      console.log(err);
    }
  },
};


