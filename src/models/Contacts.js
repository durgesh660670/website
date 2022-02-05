const mongoose = require('mongoose')

const Contacts = mongoose.Schema({

    email: String,
    phone:String,
    query:String
    

})

module.exports=mongoose.model('contacts',Contacts)