
# Administration roles, group & permissions package for meteor.

## Installing package:
- meteor add diogeneshern:roles


## We have 4 main concepts:
- Permissions
- Group of Permissions
- Roles
- Users


## How use Methods:
`
Creating a new Role:
`
```
     /**
     * Create a new role. Whitespace will be trimmed.
     *
     * @method createRole
     * @param {Object} role to insert
     * @return {String} id of new role
     */

     role must have this format:
     role = { name: String, description(optional): String, permissions: [{group: String, permission: [String] }] }

     RolesPermissions.createRole(role);
```
`
Update Role:
`
```
     /**
     * Update a role. Whitespace will be trimmed.
     *
     * @method updateRole
     * @param {Object} role to update
     * @return {String} id of role updated
     */

     role must have this format:
     role = { name: String, description(optional): String, permissions: [{group: String, permission: [String] }] }

     RolesPermissions.updateRole(role);
```
`
Delete Role:
`
```
     /**
     * Delete an existing role.  Will throw "Role in use" error if any users
     * are currently assigned to the target role.
     *
     * @method deleteRole
     * @param {String} role Name of role
     */

     RolesPermissions.deleteRole(name);
```
`
Get roles list:
`
```
     /**
     * Retrieve set of all existing roles
     *
     * @method getAllRoles
     * @return {Cursor} cursor of existing roles
     */

     RolesPermissions.getAllRoles();
```
`
Get a single role:
`
```
     /**
     * Retrieve set of especific role
     *
     * @method getRole
     * @param {id} role id
     * @return {Cursor} cursor of existing roles
     */

     RolesPermissions.getRole(id);
```
`
Get roles for user:
`
```
     /**
     * Retrieve users roles
     *
     * @method getRolesForUser
     * @param {String|Object} user User Id or actual user object
     * @return {Array} Array of user's roles, unsorted.
     */

     RolesPermissions.getRole(user);
```
`
Add roles to user:
`
```
     /**
     * Add roles to user.
     *
     * @method addRolesToUser
     * @param {String|Object} user User Id or actual user object
     * @param {Array} Array of roles names
     */

     RolesPermissions.addRolesToUser(user, roles);
```
`
Remove users from roles:
`
```
     /**
     * Remove users from roles
     *
     * @example
     *     RolesPermissions.removeUsersFromRoles(users, ['admin','role1'])
     *
     * @method removeUsersFromRoles
     * @param {Array|String} users User id(s) or object(s) with an _id field
     * @param {Array|String} roles Name(s) of roles to remove users from
     */

     RolesPermissions.removeUsersFromRoles(users, roles)
```
`
Check if user has specified roles:
`
```
     /**
     * Check if user has specified roles
     *
     * @example
     *     // non-group usage
     *     RolesPermissions.userIsInRole(user, 'admin')
     *     RolesPermissions.userIsInRole(user, ['admin','editor'])
     *     RolesPermissions.userIsInRole(userId, 'admin')
     *     RolesPermissions.userIsInRole(userId, ['admin','editor'])
     *
     * @method userIsInRole
     * @param {String|Object} user User Id or actual user object
     * @param {String|Array} roles Name of role/permission or Array of
     *                            roles/permissions to check against.  If array,
     *                            will return true if user is in _any_ role.
     * @return {Boolean} true if user is in _any_ of the target roles
     */

     RolesPermissions.userIsInRole(user, roles)
```
`
Check if user has permissions:
`
```
     /**
     * Check if logged user has specified permissions
     *
     * @method userHasPermissions
     * @param {String} group. name of the group of permissions
     * @param {String} permission. specific permission
     * @return {Boolean} true if user has permissions in _any_ of his roles
     */

     RolesPermissions.userHasPermissions(group, permission)
```
`
Get All users in specified role:
`
```
     /**
     * Retrieve all users who are in target role.
     *
     * NOTE: This is an expensive query; it performs a full collection scan
     * on the users collection since there is no index set on the 'roles' field.
     * This is by design as most queries will specify an _id so the _id index is
     * used automatically.
     *
     * @method getUsersInRole
     * @param {Array|String} role Name of role/permission.  If array, users
     *                            returned will have at least one of the roles
     *                            specified but need not have _all_ roles.
     * @param {Object} [options] Optional options which are passed directly
     *                           through to `Meteor.users.find(query, options)`
     * @return {Cursor} cursor of users in role
     */

     RolesPermissions.getUsersInRole(group, permission)
```