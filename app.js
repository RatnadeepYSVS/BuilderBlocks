const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const path = require('path')
const hbs = require('hbs')
const app = express()
const pathfol = path.join(__dirname, './public')
const viewpath = path.join(__dirname, './templates/views')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "users"
});
app.set('view engine', 'hbs')
app.set('views', viewpath)
app.use(express.static(pathfol))
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/services", (req, res) => {
    res.render("services")
})
app.get("/kitchens", (req, res) => {
    res.render("kitchens")
})
app.get("/bedrooms", (req, res) => {
    res.render("bedrooms")
})
app.get("/more", (req, res) => {
    res.render("more")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.post("/test/contact", (req, res) => {
    const { name, email, phone, landmark, pin, city, state, comm } = req.body
        //console.log(name, email, phone, landmark, pin, add, city, state, comm)
    con.query('INSERT INTO usersarrayone SET ?', { Name: name, Email: email, Phone: phone, Landmark: landmark, Pincode: pin, City: city, State: state, Comments: comm }, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    req.body = null;
    res.render('response')
})
app.listen(3000, () => {
    console.log('connected at 3000')
})