const products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
];

function getProductById(id) {
  return products.find((product) => product.id === id);
}
console.log("Tìm sản phẩm có id=2:", getProductById(2));

function getTotalPrice() {
  return products.reduce((total, product) => total + product.price, 0);
}
console.log("Tổng giá của tất cả sản phẩm:", getTotalPrice());

products.push({ id: 4, name: "Headphone", price: 200 });
console.log("Danh sách sau khi thêm sản phẩm:", products);

let expensiveProducts = products
  .filter((product) => product.price > 700)
  .map((product) => product.name);

console.log("Sản phẩm có giá > 700:", expensiveProducts);
