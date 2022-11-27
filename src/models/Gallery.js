const mongoose = require('mongoose');

//Creer schema a partir de mongoose

const GallerySchema = new mongoose.Schema({

    imageUrl: {type: String, required: true},
    
})

//On exporte le model Perso

module.exports = mongoose.model('Gallery', GallerySchema)