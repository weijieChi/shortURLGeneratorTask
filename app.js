'use strict'

const express = require('express')
const fs = require('fs')
const isUrlHttp = require('is-url-http')
// const path = require('path')

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
// index
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/submit', (req, res) => {
  const reqUrlString = req.body.urlstring
  // console.log(reqUrlString)
  // console.log(isUrlHttp(reqUrlString))

  function readShortUrlsData() {
    return new Promise((resolve, reject) => {
      fs.readFile('./public/jsons/shortUrls.json', (err, data) => {
        if (err) {
          reject(err)
        }
        resolve(JSON.parse(data.toString()))
      })
    })
  }

  function writeShortUrlsData(stringData) {
    return new Promise((resolve, reject) => {
      fs.writeFile('./public/jsons/shortUrls.json', stringData, (err) => {
        if (err) reject(err)
        resolve('write successfully')
      })
    })
  }

  async function getShortUrlsFileData() {
    try {
      let shortUrls = await readShortUrlsData()
      const shortUrlsIndex = shortUrls.results.findIndex(element => element.source === reqUrlString)
      if (shortUrlsIndex !== -1) {
        // ... do something
        // 輸入相同網址在這裡處理
        const shortUrlData = shortUrls.results[shortUrlsIndex]
        res.render('your-short-link', { shortUrlData })
        // req
        return // res() 好像並不會停止程式碼跳出 function ，所以加上 return
      }

      let randomString = ''
      // 防止出現相同的短網址
      do {
        randomString = getRandomString()
      }
      while (shortUrls.results.findIndex(element => element.shortString === randomString) !== -1)
      // 建立物件
      const shortUrlData = {
        source: reqUrlString,
        shortString: randomString
      }

      shortUrls.results.push(shortUrlData)

      // 寫回到 ./public/jsons/shortUrls.json 檔案裡
      const shortUrsDataString = JSON.stringify(shortUrls)
      await writeShortUrlsData(shortUrsDataString)
      res.render('your-short-link', { shortUrlData })
    }
    catch (err) {
      console.error('catch:', err)
    }
  }

  // 程式執行位置
  // 後端 URL 規則判斷
  if (isUrlHttp(reqUrlString)) {
    getShortUrlsFileData()
  } else {
    res.sendStatus(400).send('{"status": "HTTP 400", "message": "Bad Request Error"}')
  }
})

// app.get('/:', (req, res) ={

// })

app.listen(port, () => {
  console.log(`server on http://localhost:${port}`)
})