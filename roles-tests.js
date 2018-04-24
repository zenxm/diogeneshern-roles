// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by roles.js.
import { name as packageName } from "meteor/diogeneshern:roles";

// Write your tests here!
// Here is an example.
Tinytest.add('roles - example', function (test) {
  test.equal(packageName, "roles");
});
