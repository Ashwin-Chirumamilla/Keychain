const express = require('express');
const app = express();
const port = 3030;
const axios = require('axios');
let stocks = ["AAPL", "MSFT", "AMZN", "FB", "TSLA"];
const API_key = 'c16jep748v6ppg7est50';
let quotes = {}

app.listen(port, () => {
  console.log(`Notifications service listening on https://localhost:${port}`);
});

app.get('/', (req, res) => {
  stocks.forEach(element => {
    axios.get(`https://finnhub.io/api/v1/quote?symbol=${element}&token=${API_key}`)
    .then(response => {
      console.log(element);
      console.log(response.data);

    })
    .catch(error => {
      console.log(error);

    });
  });
});
