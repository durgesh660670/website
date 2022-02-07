const express = require('express')
const async = require('hbs/lib/async')
const Details = require('../models/Details')
const routes = express.Router()





routes.get('/login', async (req, res) => {

    const details = await Details.findOne({ _id: '61f4d023c4665a0c6915c00d' })
    res.render("login", { details: details });
})
routes.post('/process_login_form', async (req, res) => {
    console.log("inside process_login_form")
    const details = await Details.findOne({ _id: '61f4d023c4665a0c6915c00d' })
    console.log(details);

    let { email, password } = req.body
    let email1 = 'admin@gmail.com'
    let password1 = '123'
    if (email1 === email && password1 === password) {
        res.render("admin_user", { details: details })
    }
    else {
        res.render("login", { details: details });
    }
})



module.exports = routes