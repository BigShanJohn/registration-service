'use strict'

module.exports = {
    getOne: (key, client) => {
        return new Promise((resolve, reject) => {
            client.hgetall(key, function(err, object) {
                if (err) {
                    reject('An error occurred when retreving  a user, err:' + err)
                }
                console.log(object); // OK
                resolve(object);
            });
        })
    }
}