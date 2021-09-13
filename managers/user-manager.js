'use strict'
module.exports = {
    add: async(user, client) => {
        try {
            const result = await client.xadd("userstream", "*", "fullname", user.fullname, "email", user.email, "password", user.password, "dateCreated", user.dateCreated);
            user.id = result;
            client.set(user.email, user.id);
            return user;
        } catch (e) {
            return false;
        }
    }
}