const allData = [
  {
    id: 1,
    title: "Black Printed Coffee Mug",
    RatingUrl:
      "https://cdn.glitch.global/a560d598-347c-4e58-89bf-d24366cbd9a9/rating.png?v=1751025373315",
    category: "Mugs",
    imageUrl:
      "https://images.unsplash.com/photo-1641978377056-3f5b2cc523e4?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "15.00",
    salePrice: "",
    sale: false,
  },
  {
    id: 2,
    title: "Father's Day Coffee Mug",
    RatingUrl:
      "https://cdn.glitch.global/a560d598-347c-4e58-89bf-d24366cbd9a9/rating.png?v=1751025373315",
    category: "Mugs",
    imageUrl:
      "https://images.unsplash.com/photo-1641978377056-3f5b2cc523e4?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "19.00",
    salePrice: "",
    sale: false,
  },
  {
    id: 3,
    title: "Green Printed Tshirt",
    RatingUrl:
      "https://cdn.glitch.global/a560d598-347c-4e58-89bf-d24366cbd9a9/rating.png?v=1751025373315",
    category: "Tshirts",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "34.00",
    salePrice: "",
    sale: false,
  },
  {
    id: 4,
    title: "Personalised Mug",
    RatingUrl:
      "https://cdn.glitch.global/a560d598-347c-4e58-89bf-d24366cbd9a9/rating.png?v=1751025373315",
    category: "Mugs",
    imageUrl:
      "https://images.unsplash.com/photo-1641978377056-3f5b2cc523e4?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "15.00",
    salePrice: "",
    sale: false,
  },
  {
    id: 5,
    title: "Printed Brown Tshirt",
    RatingUrl:
      "https://cdn.glitch.global/a560d598-347c-4e58-89bf-d24366cbd9a9/rating.png?v=1751025373315",
    category: "Tshirts",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "34.00",
    salePrice: "25.00",
    sale: true,
  },
  {
    id: 6,
    title: "Printed Dark Blue Tshirt",
    RatingUrl:
      "https://cdn.glitch.global/a560d598-347c-4e58-89bf-d24366cbd9a9/rating.png?v=1751025373315",
    category: "Tshirts",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "34.00",
    salePrice: "",
    sale: false,
  },
  {
    id: 7,
    title: "Printed Green Tshirt",
    RatingUrl:
      "https://cdn.glitch.global/a560d598-347c-4e58-89bf-d24366cbd9a9/rating.png?v=1751025373315",
    category: "Tshirts",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "28.00",
    salePrice: "35.00",
    sale: true,
  },
  {
    id: 8,
    title: "Printed Tshirt Coffee Black Color",
    RatingUrl:
      "https://cdn.glitch.global/a560d598-347c-4e58-89bf-d24366cbd9a9/rating.png?v=1751025373315",
    category: "Tshirts",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    salePrice: "35.00",
    price: "25.00",
    sale: true,
  },
  {
    id: 9,
    title: "Typography Teal Printed Tshirt",
    RatingUrl:
      "https://cdn.glitch.global/a560d598-347c-4e58-89bf-d24366cbd9a9/rating.png?v=1751025373315",
    category: "Tshirts",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "32.00",
    salePrice: "34.00",
    sale: true,
  },
];

export default allData;
