const router = require('express').Router();


const AnimeController = require('../controllers/Anime_Controller');



router.post('/createAnime', AnimeController.newAnime);

router.get('/AfficheAllAnimes', AnimeController.ToutLesAnimes);

router.put('/updateAnime/:id', AnimeController.updateAnime);

router.delete('/deleteAnime/:id', AnimeController.deleteAnime);


module.exports = router;