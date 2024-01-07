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

// golbal function
function getRandomString() {
  const Characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let randomString = ''
  for (let i = 0; i < 5; i++) {
    randomString += Characters[Math.floor(Math.random() * Characters.length)]
  }
  return randomString
}

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/submit', (req, res) => {
  const data = req.body.urlstring
  console.log(data)

})

app.listen(port, () => {
  console.log(`server on http://localhost:${port}`)
})