const express = require('express')
const async = require('hbs/lib/async')
const Details = require('../../models/Details')

const routes = express.Router()




routes.get('/details_master', async (req, res) => {
    console.log("inside details Master")
    const details = await Details.findOne({ _id: '62034483b3b0e3488632e9c9' })
    //console.log(details);

    res.render("admin_user/details_master", { details: details });

})

routes.post('/process_details_add_form', async (req, res) => {

    const { brandName, labelName, url } = req.body;
    //  console.log(brandName, labelName1, url1, labelName2, url2, labelName3, url3, labelName4, url4);
    dId = '62034483b3b0e3488632e9c9';
    const details = await Details.findOne({ dId })

    const newDetails = await Details.findByIdAndUpdate(

        dId,
        {
            $push: {

                links: {
                    label: labelName,
                    url

                }
            }
        },
        {
            new: true, useFindAndModify: false
        }
    );
    // console.log(newDetails)
    res.render("admin_user/admin_user", { details: details });


})

routes.get('/details_master_delete/:_id', async (req, res) => {

    const _id = req.params._id;
    console.log('inside details_master_delete')
    dId = '62034483b3b0e3488632e9c9';
    const details = await Details.findOne({ dId })

    const acknowlodge = await Details.updateOne(
        {},
        {
            $pull: {

                links: {
                   _id
                }
            }
        }, {
        multi: true
    })
    

    console.log(acknowlodge)
    res.render("admin_user/admin_user", { details: details });
    


})

routes.get('/details_master_modify/:_id', async (req, res) => {

    const _id = req.params._id;
    console.log('inside details_master_modify')
    dId = '62034483b3b0e3488632e9c9';
    const details = await Details.findOne({ dId })
    res.render("admin_user/details_master_modify", { details: details,_id:_id });

})


routes.post('/process_details_modify_form/:_id', async (req, res) => {

    const _id = req.params._id;
    console.log(_id)
    const {labelName,url}=req.body
    console.log('inside details_master_modify')
    dId = '62034483b3b0e3488632e9c9';
    const details = await Details.findOne({ dId })

    const acknowlodge = await Details.updateOne(
        {'links._id':_id},
        {$set:{'links.$.label':labelName,'links.$.url':url}}
      
    )

    console.log(acknowlodge)
    res.render("admin_user/details_master", { details: details });

})




routes.get('/details_master_add', async (req, res) => {
    console.log("inside details Master add")
    const details = await Details.findOne({ _id: '62034483b3b0e3488632e9c9' })
    //console.log(details);

    res.render("admin_user/details_master_add", { details: details });

})

module.exports = routes