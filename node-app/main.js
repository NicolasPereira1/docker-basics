const express = require('express');
const cors = require('cors');
const app = express();
const port = 80;
const products = [{id:1, name:'iPhone 15', price: 1200.00},{id:2, name:'iPhone 14', price: 1000.00},{id:3, name:'iPhone 13', price: 800.00}];

app.use(cors({
  origin: '*'
}));

app.get('/products', (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Backend application listening at port: ${port}`);
});
