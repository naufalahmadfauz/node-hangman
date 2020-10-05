const express = require('express')
const path = require('path')
const hbs = require('hbs')
const getPuzzle = require('./utils/requests')

const app = express()
const pathPartials = path.join(__dirname, '../templates/partials')
const pathViews = path.join(__dirname, '../templates/views')
const publicDirectoryPath = path.join(__dirname,'../public')
const port = process.env.PORT||3000

app.set('views', pathViews)
app.set('view engine', 'hbs')
hbs.registerPartials(pathPartials)
app.use(express.static(publicDirectoryPath))


app.get('/puzzle', (req, res) => {
    getPuzzle(1, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            res.send(data)
        }
    })
})

app.get('/',(req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('server is up and running on ',+port)
})