const UserModel = require("../models/users");

// async/await method 
exports.getAllUsers = async(req, res) => {
    try {
        const users = await UserModel.find({});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
};

exports.createUser = async(req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (error) {
        res.json(error);
    }
};

exports.getUser = async(req, res) => {
    try {
        const id = req.params.id;
        const users = await UserModel.findById({_id:id});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
}

exports.updateUser = async(req, res) => {
    try {
        const id = req.params.id;
        const users = await UserModel.findByIdAndUpdate({_id:id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    },  { new: true })
    res.json(users);
    } catch (error) {
        res.json(error);
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        const users = await UserModel.findByIdAndDelete({_id:id})
        res.json(users)
    } catch (error) {
        res.json(error)
    }
}

// .then()and.catch() method
// exports.getAllUsers = (req, res) => {
//     UserModel.find({})
//         .then(users => res.json(users))
//         .catch(err => res.json(err));
// };

// exports.createUser = (req, res) => {
//     UserModel.create(req.body)
//         .then(user => res.json(user))
//         .catch(err => res.json(err));
// };
