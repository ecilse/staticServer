const express = require('express')
const app = express()
const port = 80
app.use(express.static('public'))

app.listen(80, err => {
  if(err) console.log(err)
  else console.log(`serve is running at ${port} port!`)
})