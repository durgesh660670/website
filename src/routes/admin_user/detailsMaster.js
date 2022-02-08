const express = require('express')
const async = require('hbs/lib/async')
const Details = require('../../models/Details')

const routes = express.Router()




routes.get('/details_master', async (req, res) => {
    console.log("inside details Master")
    const details = await Details.findOne({ _id: '61f4d023c4665a0c6915c00d' })
    //console.log(details);

    res.render("admin_user/details_master", { details: details });

})

routes.post('/process_details_form', async (req, res) => {

    const { brandName, labelName, url } = req.body;
    console.log(req.body);
    const details = await Details.findOne({ _id: '61f4d023c4665a0c6915c00d' })
    


    await Details.create(
        {
            brandName: brandName,
            links: [{
                label: labelName,
                url: url
            }]
        }
    ).then((err,newlyCreated)=>{

        if(err){
            console.log(err);
            res.render("admin_user/admin_user", { details: details });
        }
        else{
            console.log(newlyCreated)
            res.render("admin_user/admin_user", { details: details });

        }
    })
    

})



module.exports = routes