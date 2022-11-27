const jwt = require('jsonwebtoken');

require('dotenv').config();

exports.validateToken = (req, res, next) => {

    console.log(req.headers.authorization)
    const token = req.headers.authorization.split(" ")[1];

    // si j'ai un token je vais le verifier par rapport a la cle passer dans le env 
    if (token) {

        try {
            const tokenVerif = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
            console.log("req.user " + req.User);
            req.User = tokenVerif

            //passer a la suite dans la route
            next()

            //si + 1h il expire donc msg d'erreur 
        } catch (err) {

            res.status(401).json({ message: "Le token a expiré " + err });

        }

        //si ce n'est pas le bon utilisateur
    } else {

        res.status(503).json({ message: "utilisateur non valide" });
    }

}

