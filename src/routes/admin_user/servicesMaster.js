const express = require('express')
const async = require('hbs/lib/async')
const Details = require('../../models/Details')
const Slider = require('../../models/Slider')
const Services = require('../../models/Services')
const myURL = new URL('http://localhost:4000');

const routes = express.Router()

myURL.pathname = 'admin_user/services_master';

routes.get('/services_master', async (req, res) => {
    console.log("inside services Master")
    const details = await Details.findOne({ _id: '62034483b3b0e3488632e9c9' })
    //console.log(details);

    const services = await Services.find();

    // console.log(acknowlodge)
    res.render("admin_user/services_master", ({ details: details, services: services }))


})

routes.post('/process_services_add_form', async (req, res) => {
    console.log("inside process_servicess_add_form")
    const { icon, title, description, linkText, link } = req.body;
    //  console.log(brandName, labelName1, url1, labelName2, url2, labelName3, url3, labelName4, url4);
    dId = '62034483b3b0e3488632e9c9';
    const details = await Details.findOne({ dId })

    const newServices = await Services.create({

        icon,
        title,
        description,
        linkText,
        link
    })
    // console.log(newDetails)
    res.redirect(myURL);

})

routes.get('/services_master_delete/:_id', async (req, res) => {

    const _id = req.params._id;
    console.log('inside services_master_delete')
    dId = '62034483b3b0e3488632e9c9';
    const details = await Details.findOne({ dId })

    const acknowlodge = await Services.findByIdAndDelete(
        { _id }
    )

    // console.log(acknowlodge)
    res.redirect(myURL);



})

routes.get('/servics_master_modify/:_id', async (req, res) => {

    const _id = req.params._id;
    console.log('inside servics_master_modify')
    dId = '62034483b3b0e3488632e9c9';
    const details = await Details.findOne({ dId })
    const services = await Services.findOne({ dId })
    res.render("admin_user/services_master_modify", { details: details, services: services, _id: _id });

})


routes.post('/process_services_modify_form/:_id', async (req, res) => {

    const _id = req.params._id;
    // console.log(_id)
    const { icon, title, description, linkText, link } = req.body;
    console.log('inside process_services_modify_form')
    dId = '62034483b3b0e3488632e9c9';
    const details = await Details.findOne({ dId })

    const acknowlodge = await Services.findByIdAndUpdate(
        { _id: _id },
        { $set: { icon, title, description, linkText, link } },

    )

    res.redirect(myURL);

})




routes.get('/services_master_add', async (req, res) => {
    console.log("inside services Master add")
    const details = await Details.findOne({ _id: '62034483b3b0e3488632e9c9' })
    //console.log(details);

    res.render("admin_user/services_master_add", { details: details });

})

module.exports = routes