const User = require('../models/User').User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

/**
 * 
 * On utilise la methode find pour verifier si l'email existe déja 
 * En cas de promesse positive on verifie s'il existe un utilisateur avec cette email, 
 * ça affiche le message indiquant que m'email existe deja 
 * sinon on hash le code en utilisant le module bcrypt
 * 
*/


exports.signUp = (req, res) => {

    // On stock dans nos constante les attribut email, name, password du body de notre requette
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    /**
     *  On utilise la methode find pour verifier si l'email existe déja 
     */
    User.find({ email: email }).then(user => {

        //On verifie si la longueur du tableau est superieur a 0

        if (user.length > 0) {
            res.status(503).json({ message: "L'email est déja existant" });
        } else {

            /** Génère de manière asynchrone un hachage pour la chaîne donnée.
               * on precise la longueur du salage 12, (le fait d'ajouter des caractere)
            */
            bcrypt.hash(password, 12).then(hashedPassword => {

                //on instancie un nouveau utilisateur avec les attributs précédents ainsi que le password hacher             
                const newUser = new User({
                    email: email,
                    name: name,
                    password: hashedPassword
                })

                //On sauvegarde en bdd cette nouvelle instance                 
                newUser.save().then(user => {
                    res.status(200).json({ user: user })
                }).catch(err => res.status(500).json({ message: err }));
            })
        }
    })
}


/**
 * On stock dans nos constantes les attribut email, password du body 
 */
exports.signIn = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    //On utilise la methode findOne qui recupere un objet a partir de l'email entreer

    User.findOne({ email: email }).then(user => {


        //Compare de manière asynchrone le password donné avec le password hashé.              

        bcrypt.compare(password, user.password).then(isEqual => {

            /**
             * En cas de retour positif si la condition est vrai, on etabli un token grace a la fonction 
             * sign de jsonwebtoken qui prend en parametre 
            */

            if (isEqual) {
                const token = jwt.sign({
                    email: user.email,
                    userId: user._id.toString()
                },

                    //On pointe vers la variable env secret token qui va servir de signature
                    process.env.JWT_SECRET_TOKEN,
                    {

                        // 3eme param delai d'expriration
                        expiresIn: '5h'
                    });

                const id = user.id
                const update = { token_valid: token }

                User.findByIdAndUpdate(id, update, function (err, res) {

                    if (err) {
                        console.log(err)

                    } else {
                        console.log(res)
                    }
                })
                //On renvoie un objet contenant le token creer et le user Email
                res.status(200).json({ token: token, userEmail: user.email })
            } else {

                //Sinon on envoie un message precisant que le mdp est incorrecte
                res.status(503).json({ message: "Le mot de passe est incorrecte" })
            }

            // On cas de retour negatif de la methode compare() on renvoie un msg d'erreur
        }).catch(err => res.status(400).json({ message: "Une erreur c'est produite", err: err }));

        //En cas de retour negatif de findOne on envoie le message 
    }).catch(err => {
        res.status(503).json({ message: "L'email n'existe pas" });
    })
}