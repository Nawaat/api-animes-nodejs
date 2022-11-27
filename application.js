
/**
 * on importe: 
 */

require('dotenv').config();
const express = require('express');
const connexion = require('./connexion');
const bodyParser = require('body-parser');
const cors = require('cors');


const Perso_Route =require('./src/routes/Perso_Routes')
const Anime_Route =require('./src/routes/Anime_Routes')
const userRoute = require('./src/routes/User_Routes');
const GalleryRoute= require('./src/routes/Gallery_Routes');




connexion;
const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req,res)=>{
    res.json({message:'bienvenueee '})
})
app.use('/Perso', Perso_Route);
app.use('/Anime', Anime_Route);
app.use('/User', userRoute);
app.use('/Gallery', GalleryRoute);


module.exports = app;
