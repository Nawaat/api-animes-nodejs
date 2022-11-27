
const Gallery = require('../models/Gallery.js');


exports.newImg = (req, res) => {

    const createImg = new Gallery({
  
        imageUrl: req.body.imageUrl,
  
    })
  
    createImg.save().then(image => {
  
        res.status(200).json({
            message: "L'image a bien été envoye",
            image: image
        });
  
  
    }).catch(err => {
        res.status(500).json({
  
            message: "Une erreur c'est produite à la création de l'image",
            err: err
  
        })
    })
  
  }
  

  exports.GetAllImage = (req, res) => {

    Gallery.find().then(image => res.status(200).json({

        message: "IMAGES DISPO: ",
        image: image

    })).catch(err => {

        res.status(500).json({

            message: " ERREUUUUUR ",
            err: err

        })

    })

}
