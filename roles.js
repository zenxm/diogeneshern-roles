"use strict"


/**
 * Roles collection documents consist in id, a role name, a role list of permissions.
 *   ex: { _id: "123", name: "admin" }
 */
if (!Meteor.roles) {
  Meteor.roles = new Mongo.Collection("roles");

  // Create default indexes for roles collection
  Meteor.roles._ensureIndex('name', {unique: 1});
  Meteor.roles._ensureIndex('permissions');
}


/**
 * Publish logged-in user's roles so client-side checks can work.
 *
 * Use a named publish function so clients can check `ready()` state.
 */
Meteor.publish('_roles', function () {
  var loggedInUserId = this.userId,
    fields = {roles: 1}

  if (!loggedInUserId) {
    this.ready()
    return
  }

  return Meteor.users.find({_id: loggedInUserId},
    {fields: fields})
})