const express = require('express')
const async = require('hbs/lib/async')
const routes = express.Router()
const Details = require('../../src/models/Details')
const Services = require('../models/Services')
const Slider = require('../models/Slider')
const Contacts = require('../models/Contacts')


routes.get('/', async (req, res) => {
    const details = await Details.findOne({ _id: '62034483b3b0e3488632e9c9' })
    const sliders=await Slider.find()
    const services=await Services.find()

    // console.log(details);
    res.render("index",{details:details,sliders:sliders,services:services})
})
routes.get('/gallery', async (req, res) => {
    const details = await Details.findOne({ _id: '62034483b3b0e3488632e9c9' })

    console.log(details);
    res.render("gallery",{details:details})
})

routes.post('/process-contact-form',async(req,res)=>{

    console.log('inside process-contact-form ',req.body);

    // save the data into db
    try {
        
        const result=await Contacts.create(req.body)
        console.log(result);
        res.redirect("/")

    } catch (error) {

        console.log(error);
        res.redirect("/")
        
    }


})



module.exports = routes