const User = require("../models/user");
const Manager = require('../managers/user-manager');
const Repository = require('../repositories/user-repository');

module.exports = {
    add: (req, res) => {
        const client = req.app.get('client');
        const { fullname, email, password } = req.body;
        const newUser = User(fullname, email, password);
        Repository.checkRecord(email, client).then((result) => {
            if (result != null) {

                return res.status(200).send({
                    success: false,
                    message: 'Record Exist'
                });

            } else {
                Manager.add(newUser, s).then((user) => {

                    return res.status(200).send({
                        success: true,
                        data: user
                    });

                });

            }
        });
    }
}