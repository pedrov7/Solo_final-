const { Project } = require('../models/project.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
module.exports.createUser = (req, res) => {
    const { user, password, role } = req.body;

    Project.create({
        user,
        password,
        role
    })
        // .save()
        .then(res => {
            res.json({ msg: "success!", user })
        })
        .catch(err => res.json(err))
}


module.exports.getAllUsers = (req, res) => {
    Project.find({})
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

// module.exports.authUser = (req, res) => {
//     const { user, password} = req.body;
//     Project.findOne({user})
//     .then(user => {
//         bcrypt.compare(password, user.password)
//         .then(isSamePassword => {
//             const secretKey = "keepThisSecret";
//             const payload = {
//                 _id: user._id,
//                 name: user.userName,
//                 permissions: user.role,
//             }
//             const token = jwt.sign(payload, secretKey, {expiresIn:'1800s'})
//             if(isSamePassword){
//                 res.json(token)
//             }else{
//                 res.status(402)
//                 res.json('contraseña incorrecta')
//             }
//         })
//     })
//     .catch(()=> {
//         res.status(404)
//         res.json('Usuario no existe')
//     })
// }
module.exports.authUser = (req, res) => {
    const { user, password } = req.body;
    Project.findOne({ user })
        .then(user => {
            bcrypt.compare(password, user.password)
                .then(isSamePass => {
                    const secretKey = "keepThisSecret";
                    const payload = {
                        _id: user._id,
                        name: user.userName,
                        permissions: user.role,
                    }
                    const token = jwt.sign(payload, secretKey, { expiresIn: '1800s' })
                    if (isSamePass) {
                        res.json(token)
                    } else {
                        res.status(402)
                        res.json('contraseña incorrecta')
                    }
                })

        })
        .catch(() => {
            res.status(404)
            res.json('Usuario no existe')
        })
}


module.exports.deleteUser = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
        .then(deleteUser => res.json(deleteUser))
        .catch(err => res.json(err))
}