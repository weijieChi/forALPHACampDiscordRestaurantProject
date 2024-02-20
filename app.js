'use strict'

//express
const express = require('express');
const app = express();
const port = 3000;

// express-handlebars
const { engine } = require('express-handlebars');
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views')

// static file
app.use(express.static('public'))

// bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/new', (req, res) => {
  res.render('new')
})

app.post('/new', (req, res) => {
  console.log(data)
  const data = req.body
  res.send(data)
})

app.get('/new2', (req, res) => {
  res.render('new2')
})

app.post('/new2', (req, res) => {
  const data = req.body
  console.log(data)
  res.send(data)
})

// listen
app.listen(port, () => {
  console.log(`express server on http://localhost:${port}`)
})
