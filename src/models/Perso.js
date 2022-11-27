const mongoose = require('mongoose');

//Creer schema a partir de mongoose

const PersoSchema = new mongoose.Schema({

    image: {type: String, required: true},
    name: { type: String, required: true },
    id_anime: { type: String, required: true }
    

})

//On exporte le model Perso

module.exports = mongoose.model('Perso', PersoSchema)