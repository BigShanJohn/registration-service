'use strict'

module.exports = {
    checkRecord: (email, client) => {
        return new Promise((resolve, reject) => {
            client.get(email, function(err, result) {
                if (err) {
                    reject('An error occurred when retreving  a user, err:' + err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}