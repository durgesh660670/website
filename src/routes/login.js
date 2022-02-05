const express = require('express')
const async = require('hbs/lib/async')
const Details = require('../models/Details')
const routes = express.Router()





routes.get('/login', async (req, res) => {

    const details = await Details.findOne({ _id: '61f4d023c4665a0c6915c00d' })
    res.render("login",{details:details});
})



module.exports = routes