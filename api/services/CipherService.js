var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

module.exports = {
    /**
     * Hash the password field of the passed user.
     */
    hashPassword: (password) => {
        return bcrypt.hashSync(password);
    },

    /**
     * Compare user password hash with unhashed password
     * @returns boolean indicating a match
     */
    comparePassword: (password, user) => {
        return bcrypt.compareSync(password, user.password);
    },

    /**
     * Create a token based on the passed user
     * @param user
     */
    createToken: (user) => {
        const secret = 'whatever'; //sails.config.jwtSettings.secret,
        const issuer = 'Ernesto Vance'; //sails.config.jwtSettings.issuer,
        const audience = 'www.ryanatevstudios.com'; //sails.config.jwtSettings.audience,
        const EXPIRES_IN_MINUTES = 60 * 24;
        const ALGORITHM = "HS256";

        return jwt.sign({
            user: JSON.stringify(user)
        }, secret /* sails.config.jwtSettings.secret */, {
            algorithm: ALGORITHM, //sails.config.jwtSettings.algorithm,
            expiresIn: EXPIRES_IN_MINUTES, //sails.config.jwtSettings.expiresInMinutes,
            issuer: issuer, //sails.config.jwtSettings.issuer,
            audience: audience //sails.config.jwtSettings.audience
        });
    }
};