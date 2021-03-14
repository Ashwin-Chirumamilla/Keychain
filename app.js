const express = require('express');
const app = express();
const port = 3030;
const axios = require('axios');
const { response } = require('express');
let stocks = ["AAPL", "MSFT", "AMZN", "FB", "TSLA"];
const API_key = 'c16jep748v6ppg7est50';



app.listen(port, () => {
  console.log(`Notifications service listening on https://localhost:${port}`);
});

app.get('/', async (req, res) => {
  let quotes = [];
  let percentages = [];
  
  for(let i = 0; i < stocks.length; i++) {
    let element = stocks[i];
    let response = await
    axios.get(`https://finnhub.io/api/v1/quote?symbol=${element}&token=${API_key}`)
    let data = response.data;
    quotes.push(data);
    console.log(quotes);
  }
  for(let i = 0; i < quotes.length; i++) {
    let element = quotes[i];
    let percentage = ( element["c"] - element["o"] ) / (element["o"]) * 100;
    let rounded = percentage.toFixed(3);
    percentages.push(rounded);
  }
  res.json(percentages);
  console.log(percentages);
})
  
