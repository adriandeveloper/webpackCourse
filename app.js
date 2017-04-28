var api = require('./api.js');
var $ = require('jquery');

var users = api.getUsers();

 // console.log($);
$.each(users, function(index, user) {
  $.(document.body).append(index + "<p> name " + user.name + ' age ' + user.age + "</p>");
})