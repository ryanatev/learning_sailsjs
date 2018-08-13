module.exports = {
    attributes: {
        name: {type: 'string', required: true, unique: true},
        description: {type: 'string'},
        users: {collection: 'user', via: 'roles'},
        permissions: {collection: 'permission'}
    },
    
    /* customToJSON: function() {
        var x = _.omit(this, ['permissions','users']);;
        x.test = {ex: 'test'};
        return x;
    } */
}