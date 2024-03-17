// src/index.js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.get('/about', (req, res) => {
  res.send('Express + TypeScript Server. About page');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});