var prompt = require('sync-prompt').prompt;
var firstname = prompt('What is your firt name?');
var lastname = prompt('What is your last name?');
var fullname = firstname + ' ' + lastname;
console.log('Your full name is', fullname);

var color = prompt ('What is your favorite color?');
console.log('Your favorite color is '+ color + '.');

var age = prompt("What is your dog's age?"); //var is only for the first time I'm creating a variable//
//console.log(age); This is a String//
age = parseInt(age); //turns something (string) into a number//
console.log("Your dog's age in human years is", age); //once tested turns the age into a number//
var dogage = age*7
console.log("Your dog's age in dog years is", dogage);

age = prompt("What is your age?");
age = parseInt(age);
if(age >= 21){
    console.log('You are legal to drink');
}else{
    console.log('You are NOT legal to drink');
}



//temperature converter Mikey//
//var tempType = prompt("Do you want to convert from F or C? ");
//{
//if(tempType === 'F'){
//  var temp = prompt("What is the temp in F? ")
//    temp = parseInt(temp)
//    console.log( temp + ' degrees F is ' + (((temp-32)*5)/9) + ' degrees C');
//}else if(tempType === 'C'){
//  var temp = prompt('What is your temp in C? ')
//    temp = parseInt(temp)
//    console.log( temp + ' degrees C is ' + (((temp*9 )/5)+32) + ' degrees F')
//}else{console.log( tempType + ' is not a valid scale. Enter F or C')
//}
//}
//

//Chyld's version//
var scale = prompt('What scale are you using? (f/c)? ');
var temp = prompt('What is the temperature? ');

temp = parseInt(temp);
var converted;
var alt;

if(scale === 'f'){
  converted = (temp - 32) * 5/9;
  alt = 'c';
}else{
  converted = (temp * 9/5) +32;
  alt = 'f';
}
converted = parseInt(converted);
console.log(temp + scale + ' -> ' + converted + alt);


//Write a BMI calculator//

var height = prompt('What is your height in inches? ');
var weight = prompt('What is your weight in pounds? ');

height = parseInt(height)
weight = parseInt(weight)

var bmi


bmi = ((weight * 703) / (height * height));
bmi = parseInt(bmi);
console.log('Your BMI is ' + bmi);

//Chyld's Version//

var lbs = prompt('Weight in lbs? ');
var height = prompt('Height in inches? ');

lbs = parseInt(lbs);
height = parseInt(height);
var bmi = (lbs/(height*height)) * 703;
console.log('your bmi is', bmi.toFixed(1));



