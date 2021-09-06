var uuid = require('uuid');

module.exports = (fullname, email, password, dateCreated = null, id = null) => {
    return {
        fullname: fullname,
        password: password,
        email: email,
        get dateCreated() {
            if (dateCreated) {
                return dateCreated;
            }

            let date = new Date();

            return date.toISOString().slice(0, 19).replace('T', ' ');
        },
        get id() {
            if (id) {
                return id;
            }

            return uuid.v4();
        }
    }
}