const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middileware:




app.get('/', (req, res) => {
  res.send('fruits management server')
})


app.listen(port, () => {
  console.log(`fruits management server ${port}`)
})