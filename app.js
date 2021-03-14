const express = require('express');
const app = express();
const port = 3030;
const axios = require('axios');
let stocks = ["AAPL", "MSFT", "AMZN", "FB", "TSLA"];
const API_key = 'c16jep748v6ppg7est50';


app.listen(port, () => {
  console.log(`Notifications service listening on https://localhost:${port}`);
});

app.get('/', (req, res) => {
  let quotes = [];
  
  stocks.forEach(element => {
    axios.get(`https://finnhub.io/api/v1/quote?symbol=${element}&token=${API_key}`)
    .then((response) => {
      
        quotes.push(response.data);
        console.log(quotes);
        res.json(quotes);
    })
    .catch(error => {
      console.log(error);
    });
    
  });
  
  
});

