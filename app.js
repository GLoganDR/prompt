var prompt = require('sync-prompt').prompt;
var firstname = prompt('What is your firt name? ');
var lastname = prompt('What is your last name? ');
var fullname = firstname + ' ' + lastname;
console.log('your full name is', fullname);
