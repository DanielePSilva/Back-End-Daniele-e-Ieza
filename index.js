const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
// products list
const products = [
  {
    id: 1,
    name: "shoes",
    description: "brown",
    price: "20€",
  },
];
// get products
app.get("/products", (req, res) => {
  res.status(200).json(products);
});
// adicionar produto
app.post("/products", (req, res) => {
  console.log(req.body);
  const newProduct = { id: products.length };
  newProduct.name = req.body.name;
  newProduct.description = req.body.description;
  newProduct.price = req.body.price;
  products.push(newProduct);
  res.status(201).json(newProduct);
});
// atualizar produto
app.listen(6000, () => {
  console.log("server is running");
});
