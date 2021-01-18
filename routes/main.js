const { root } = require('../config')
const express = require('express')
const path = require('path')
const fs = require("fs")


// Router Creation
const router = express.Router()
router.use("/assets", express.static(path.join(root + "/assets")))

// Routes
router.get('/', (req,res) => {
    const file = JSON.parse(fs.readFileSync("./db/data.json"))
    res.render('index', {file})
})

router.get("*", (req, res) => {
    res.render('404')
})



module.exports = router
