const express = require('express')
const app = express()
// var session = require('express-session')
const mustacheExpress = require('mustache-express')
global.models  = require('./models')
const { Op } = require('sequelize')
const tripRoutes = require('./routes/trips')
const commentRoutes = require('./routes/comments')
const path = require('path')
const VIEWS_PATH = path.join(__dirname, '/views')

app.use('/css',express.static("css"))
app.use(express.static('images'))

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))

app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')

app.use(express.urlencoded())
app.use('/trips', tripRoutes)
app.use('/comments', commentRoutes)


app.listen(3000,() => {
    console.log('Server is running...')
})