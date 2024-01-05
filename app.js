'use strict'

const express = require('express')
// use template engine  "express-handlebars"
const { engine } = require('express-handlebars')
const fs = require('fs')

const app = express()
const port = 3000

// express-handlebars
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

// express static file service
app.use(express.static('public'))