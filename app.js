const api = require('./api.js');
const $ = require('jquery');

const users = api.getUsers();

 // console.log($);
$.each(users,(index, user) => {
  $(document.body).append(index + "<p> name " + user.name + ' age ' + user.age + "</p>");
})