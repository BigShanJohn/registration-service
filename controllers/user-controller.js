const User = require("../models/user");
const Manager = require('../managers/user-manager');
const Repository = require('../repositories/user-repository');

module.exports = {
    add: (req, res) => {
        const client = req.app.get('client');
        const { fullname, email, password } = req.body;
        const newUser = User(fullname, email, password);

        Repository.getOne(email, client)
            .then(user => {
                if (user) {
                    return res.status(200).send({
                        success: false,
                        message: 'Record Exist'
                    });
                }

                Manager.add(newUser, client)
                    .then(user => {
                        res.status(200).send({
                            success: true,
                            data: user
                        });
                    })
                    .catch((err) => this.error(res));
            })
            .catch((err) => this.error(res));
    },
    error: (res) => {
        res.status(412).send({
            success: false,
            message: err
        });
    }
}