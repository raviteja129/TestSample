const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const http = require('http')
const path = require('path');
const ejs = require('ejs')
const PORT = process.env.PORT || 3000;
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(expressLayouts)
app.set('view engine', 'ejs')



app.get('/', async(req,res) => {
    res.render("index")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})