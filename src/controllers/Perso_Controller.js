
const Perso = require('../models/Perso');
const Anime = require('../models/Anime');
const User = require('../models/User');


/**-------------------- ON COMMENCE LE CRUUD -------------- */


//methode qui creer un nouveau perso et l'enregistre dans la bdd

exports.newPerso = (req, res, next) => {

    const createPerso = new Perso({

        //le schema qui a pour parametre image name et id_anime (attribut)

        image: req.body.image,
        name: req.body.name,
        id_anime: req.body.id_anime,

    })


    createPerso.save().then(perso => {

        res.status(200).json({
            message: "Le Perso a bien été créer",
            perso: perso
        });


    }).catch(err => {
        res.status(500).json({

            message: "Une erreur c'est produite à la création du Perso",
            err: err

        })
    })

}


exports.updatePerso = (req, res) => {

    Perso.findByIdAndUpdate(req.params.id, {

        image: req.body.image,
        name: req.body.name,
        id_anime: req.body.id_anime,

    }).then(perso => {

        res.status(200).json({
            message: "Le Perso a bien été modifieeeer",
            perso: perso,
            contenu: req.body
        })

    }).catch(err => {

        res.status(500).json({

            message: "Une erreur c'est produite à la modification du Perso",
            err: err

        })

    })

}


exports.ToutLesPersos = (req, res) => {

    Perso.find().then(Persoo => res.status(200).json({

        message: "VOICI TES PERSO: ",
        Perso: Persoo

    })).catch(err => {

        res.status(500).json({

            message: " ERREUUUUUR ",
            err: err

        })

    })

}


exports.deletePerso = (req, res) => {

    Perso.findByIdAndDelete(req.params.id)

        .then(Persooo => {

            res.status(201).json({
                message: "Le Perso a bien été SUPPRIMER",
                perso: Persooo

            })

        }).catch(err => res.status(500).json({

            message: " ERREUUUUUR ",
            err: err

        }));

}


exports.get_perso_by_anime_id = (req, res) => {

    Perso.find({ id_anime: req.params.id_anime })

        .then(perso => res.status(200).json({
            Perso: perso
        }))

        .catch(err => res.status(404).json({ err: err }))
}

exports.GetOnePerso = (req,res)=>{

    Perso.findById({_id: req.params.id})

    .then(perso => res.status(200).json({
        Perso: perso
    }))

    .catch(err => res.status(404).json({ err: err }))

}


