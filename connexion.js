const mongoose = require('mongoose');

require('dotenv').config();

/**
 * declarer une constant connexion 
 * qui excecute une methode qui reclame 2 parametres 
 * 1 url dans .env
 * then() retour positif de la promesse
 */
const connexion = mongoose.connect(process.env.URL_MONGOOSE).then(() => console.log("La connexion à la BDD est OK")).catch(err => console.log("Une erreur est survenus avec la BDD" + err));

module.exports = connexion;
