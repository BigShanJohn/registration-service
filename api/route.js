'use strict'
const status = require('http-status');
const userController = require("../controllers/user-controller");
const registrationValidation = require('../middlewares/registration-validation-middleware');

module.exports = (app) => {
    app.post("/register", registrationValidation, userController.add);
}