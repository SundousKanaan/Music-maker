// import express from 'express';

const express = require('express')

const app = express();
app.use(express.json());
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static("public"))
let options = { maxAge: '2y' }

// home page
app.get('/', async (req, res) => {
    try {
      res.render('index');
    } catch (error) {
      res.status(500).send(error.message);
    }
})

// offline page
app.get('/offline', async (req, res) => {
  try {
    res.render('offline');
  } catch (error) {
    res.status(500).send(error.message);
  }
})

const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
