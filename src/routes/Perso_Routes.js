
const router = require('express').Router();


const PersoController = require('../controllers/Perso_Controller');


const Token = require('../providers/Validate_Token');

//passer par la validation du token 
// Token.validateToken,

router.post('/createPerso', PersoController.newPerso);

router.put('/updatePerso/:id', PersoController.updatePerso);

router.get('/afficheLesPersos', PersoController.ToutLesPersos);

router.get('/afficheLesPersosParAnime/:id_anime',  PersoController.get_perso_by_anime_id);

router.delete('/deletePerso/:id', PersoController.deletePerso);

router.get('/GetOne/:id', PersoController.GetOnePerso);


module.exports = router;