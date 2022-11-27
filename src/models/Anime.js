const mongoose = require('mongoose');

//Creer schema a partir de mongoose

const AnimeSchema = new mongoose.Schema({

    name: { type: String, required: true }

})

//On exporte le model Perso

module.exports = mongoose.model('Anime', AnimeSchema)