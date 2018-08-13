/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

	'POST /user': 'User.create',
	'GET /users': 'User.find',
	'GET /users/:id': 'User.findOne',
	'PUT /users/:id': 'User.update',

	'POST /role': 'Role.create',
	'GET /roles': 'Role.find',
	'GET /roles/:id': 'Role.findOne',
	'PUT /roles/:id': 'Role.update',

	'POST /permission': 'Permission.create',
	'GET /permissions': 'Permission.find',
	'GET /permissions/:id': 'Permission.findOne',
	'PUT /permissions/:id': 'Permission.update'

};
