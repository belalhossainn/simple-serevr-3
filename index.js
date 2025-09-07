const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares:
app.use(cors());
app.use(express.json());


const fruits = [
  { id: 1, name: "Mango", color: "Yellow", taste: "Sweet" },
  { id: 2, name: "Pineapple", color: "Golden", taste: "Tangy" },
  { id: 3, name: "Papaya", color: "Orange", taste: "Mild Sweet" }
];


app.get('/', (req, res) => {
  res.send('fruits management server')
})
app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.post('/fruits', (req, res) => {
  console.log('after post data')
  console.log(req.body)
  const newFruit = req.body;
  newFruit.id = fruits.length + 1;

  fruits.push(newFruit)
  res.send(newFruit)
})


app.listen(port, () => {
  console.log(`fruits management server ${port}`)
})