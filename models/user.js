module.exports = (fullname, email, password, dateCreated = null, id = null) => {
    return {
        id: id,
        fullname: fullname,
        password: password,
        email: email,
        get dateCreated() {
            if (dateCreated) {
                return dateCreated;
            }

            let date = new Date();

            return date.toISOString().slice(0, 19).replace('T', ' ');
        }
    }
}