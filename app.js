const express = require('express')
const app = express();
const exphbs = require("express-handlebars");
const path = require('path');
const PORT = 5001;

// template engine setup
app.engine("hbs", exphbs.engine(
    {
        extname: ".hbs",
        defaultLayout: "main",
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        }
    }
))

// setup view engine
app.set("view engine", "hbs")

// middleware
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get('/', (req, res) => {
    res.render('index', {home:true})
})

app.get('/properties', (req, res) => {
    res.render('properties', {properties: true})
})

app.get('/property/details', (req, res) => {
    res.render('property-single', {properties: true})
})

app.get('/services', (req, res) => {
    res.render('services', {services: true})
})

app.get('/about', (req, res) => {
    res.render('about', {about: true})
})

app.get('/contact', (req, res) => {
    res.render('contact', {contact: true})
})

app.get('*', (req, res) => {
    res.render({
        '404:':  'notfound'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})