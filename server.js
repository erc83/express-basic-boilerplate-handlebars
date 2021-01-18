const { port } = require('./config')
const express = require('express')
const handlebars = require('express-handlebars')
// Routes
const mainRoutes = require('./routes/main')

// Server
const app = express()
app.use(mainRoutes)

//handlebars
app.engine("handlebars", handlebars())
app.set("view engine", "handlebars");

// Server Running
app.listen(port, _ => console.log(`Server Running at: http://localhost:${port}/`))


