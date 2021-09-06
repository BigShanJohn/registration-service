const validator = require('../helpers/validator');

module.exports = (req, res, next) => {
    const validationRule = {
        "email": "required|email",
        "fullname": "required|string",
        "password": "required|string|min:6",
    }

    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}