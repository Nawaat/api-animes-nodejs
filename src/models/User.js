const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({

    name: {type: String, required: true},
    email: {type: String, required: true },
    password: {type: String, required: true},

//Afficher la date localement
    register_date: {type: String, required: true, default: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()},  
    token_valid: {type:String}
})


exports.User = mongoose.model('User',UserSchema)