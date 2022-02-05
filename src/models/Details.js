const mongoose = require('mongoose')

const Details = mongoose.Schema({

    brandName: String,
    links: [
        {
            label: String,
            url: String
        }
    ]

})

module.exports=mongoose.model('details',Details)