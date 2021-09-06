'use strict'
module.exports = {
    add: (user, client) => {
        return new Promise((resolve, reject) => {
            client.hmset(user.email, user, function(err, reply) {
                if (err) {
                    reject('An error occurred registring a user, err:' + err)
                }
                console.log(reply); // OK
                resolve(user);
            });

        })
    }
}