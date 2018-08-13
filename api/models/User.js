const bcrypt = require('bcrypt-nodejs');

module.exports = {
    attributes: {
        firstName: { type: 'string', required: true },
        lastName: { type: 'string', required: true },
        displayName: { type: 'string'/*, required: true, unique: true*/ },
        emailAddress: { type: 'string', required: true, unique: true },
        password: { type: 'string', required: true },
        roles: { collection: 'role', via: 'users' }
    },

    customToJSON: function () {
        return _.omit(this, ['password']);
    },

    beforeCreate: function (user, cb) {
		user.password = CipherService.hashPassword(user.password);
		cb();
    }
}