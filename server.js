const express = require('express')
const https = require('https')
const htmlToText = require('html-to-text')
const request = require('request')

const SUBSCRIPTION_KEY = '2c14392d55034f8981c5c9f645329a1c';

//const SUBSCRIPTION_KEY = process.env['AZURE_SUBSCRIPTION_KEY']
if (!SUBSCRIPTION_KEY) {
  throw new Error('Missing the AZURE_SUBSCRIPTION_KEY environment varable')
}

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/search', (req, res) => {
    bingWebSearch(req.query.query, (results) => {
        res.json(results)
    })
})

function bingWebSearch(query, callback) {
    https.get({
      hostname: 'api.cognitive.microsoft.com',
      path:     '/bing/v7.0/search?q=' + encodeURIComponent(query),
      headers:  { 'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY },
    }, res => {
      let body = ''
      res.on('data', part => body += part)
      res.on('end', () => {
        for (var header in res.headers) {
          if (header.startsWith("bingapis-") || header.startsWith("x-msedge-")) {
            console.log(header + ": " + res.headers[header])
          }
        }

        callback(JSON.parse(body))
    })
      res.on('error', e => {
        console.log('Error: ' + e.message)
        throw e
      })
    })
  }

app.get('/get-page-text', (req, res) => {
    const url = req.query.url

    request(url, (err, response, body) => {
        res.send(htmlToText.fromString(body))
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))