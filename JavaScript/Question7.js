
const products = [
    { productName: "Laptop", category: "Electronics", quantity: 10, price: 1200, rating: 4.5 },
    { productName: "Smartphone", category: "Electronics", quantity: 15, price: 800, rating: 4.2 },
    { productName: "Headphones", category: "Electronics", quantity: 20, price: 50, rating: 4.0 },
    { productName: "Backpack", category: "Fashion", quantity: 30, price: 50, rating: 4.7 },
    { productName: "Shoes", category: "Fashion", quantity: 25, price: 80, rating: 4.3 },
    { productName: "T-Shirt", category: "Fashion", quantity: 40, price: 20, rating: 4.8 },
    { productName: "Desk", category: "Furniture", quantity: 5, price: 300, rating: 4.6 },
    { productName: "Chair", category: "Furniture", quantity: 8, price: 150, rating: 4.4 },
    { productName: "Table", category: "Furniture", quantity: 7, price: 200, rating: 4.1 },
    { productName: "Bookshelf", category: "Furniture", quantity: 3, price: 100, rating: 4.9 },
    { productName: "Camera", category: "Photography", quantity: 12, price: 500, rating: 4.7 },
    { productName: "Lens", category: "Photography", quantity: 6, price: 250, rating: 4.5 }
  ];
  
  function groupAndSortProducts(products){
    const ShortByRating = products.sort((a,b)=>b.rating - a.rating)
    console.log(ShortByRating)
  }
  console.log(groupAndSortProducts(products))
