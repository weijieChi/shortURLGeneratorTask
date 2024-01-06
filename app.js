'use strict'

const express = require('express')
const fs = require('fs')

// use template engine  "express-handlebars"
const { engine } = require('express-handlebars')

const app = express()
const port = 3000

// bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// express-handlebars
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

// express static file service
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/submit', (req, res) => {
  const data = req.body
  console.log(data)

})

app.listen(port, () => {
  console.log(`server on http://localhost:${port}`)
})