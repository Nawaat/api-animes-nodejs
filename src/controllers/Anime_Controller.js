
const Anime = require('../models/Anime');

/**-------------------- ON COMMENCE LE CRUUD -------------- */

//ajoute un animé

exports.newAnime = (req, res) => {

    const createAnime = new Anime({

        name: req.body.name,

    })

    createAnime.save().then(anime => {

        res.status(200).json({
            message: "L'animé a bien été créer",
            anime: anime
        });

        
    }).catch(err => {
        res.status(500).json({

            message: "Une erreur c'est produite à la création de l'animé",
            err: err

        })
    })

}

//affiche anime

exports.ToutLesAnimes = (req, res) => {

    Anime.find().then(Anime => res.status(200).json({

        message: "Liste des animés: ",
        Anime: Anime

    })).catch(err => {

        res.status(500).json({

            message: " ERREUUUUUR ",
            err: err

        })

    })

}


//modifie animé

exports.updateAnime = (req, res) => {

    Perso.findByIdAndUpdate(req.params.id, {

        name: req.body.name

    }).then(anime => {

        res.status(200).json({
            message: "L'animé a bien été modifieeeer",
            anime: anime,
            contenu: req.body
        })

    }).catch(err => {

        res.status(500).json({

            message: "Une erreur c'est produite à la modification de l'animé",
            err: err

        })

    })

}

//supp l'animee


exports.deleteAnime = (req, res) => {


    Anime.findByIdAndDelete(req.params.id)

        .then(anime => {

            res.status(201).json({
                message: "L'anime a bien été SUPPRIMER",
                anime: anime

            })

        }).catch(err => res.status(500).json({

            message: " ERREUUUUUR ",
            err: err

        }));

}