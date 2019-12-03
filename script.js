// // function constructor

// var john = {
//     name : 'John',
//     yearOfBirth : 1990,
//     job : 'teacher'
// }

// var Person =function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;     
    
// }

// Person.prototype.calculateAge = function(){
//     console.log(2016-this.yearOfBirth);
// }
// Person.prototype.lastName = 'Smith';

// var john = new Person('John',1990,'teacher');

// var jane = new Person('Jane',1969,'designer');
// var mark = new Person('Mark',1948,'retired');
// var sonu = {
//     yearOfBirth:1992
// }
// sonu.calculateAge = john.calculateAge ;
// sonu.calculateAge();
// console.log(john);

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// constructor using object.create

// var personProto ={
//     calculateAge : function(){
//         console.log(2016 - this.yearOFBrith);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOFBrith = 1990,
// john.job = 'teacher';

// var jane = Object.create(personProto,{
//     name : {value:'jane'},
//     yearOFBrith : {value : 1969},
//     job : {value : 'designer'}
// });

//Primitives vs objects

//primitives

// var a =23 ;
// var b = a ;
// a =46;
// console.log(a,b);

// //Objects
// var obj1 ={
//     name :'John',
//     age :26
// }
// var obj2 = obj1;
// obj1.age =30;
// console.log(obj1.age);
// console.log(obj2.age);

// //functions

// var age = 27;
// var obj = {
//     name:'jonas',
//     city :'Lisbon'
// }
// function change(a,b){
//     a=30;
//     b.city ='san'
// }
// change(age,obj);
// console.log(age);
// console.log(obj.city);

//passing function as arguments

// var years = [1990,1965,1937,2005,1998];

// function arrayCalc(arr,fn) {
//     var arrRes = [];
//     for(var i=0; i<arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el){
//     return 2016-el;
// }

// function isFullAge(el){
//     return el>=18
// }
// function maxHeartRate(el){
//     if(el>=18 && el<=81){
//     return Math.round(206.9-(0.67*el));
//     }
//     else{
//         return -1;
//     }
// }

// var ages = arrayCalc(years,calculateAge);
// var fullAges = arrayCalc(ages,isFullAge);
// var rates = arrayCalc(ages,maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(rates);



// functions returning functions

// function interviewQuestion(job){
//     if(job ==='designer'){
//         return function(name){
//             console.log(name + ' , can u plz explain ux design');
//         }
//     }
//     else if(job==='teacher'){
//         return function(name){
//             console.log('What subject do you teach, '+name + '?');
//         }
//     }
//     else {
//         return function(name){
//             console.log('Hello '+ name + ' , what do you do ?');
//         }
//     }
// }
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('john');
// designerQuestion('john');

// interviewQuestion('teacher')('Mark');

//IIfe



// (function(){
//     var score =Math.random()*10;
//     console.log(score>=5);
// })();

// (function(goodLuck){
//     var score =Math.random()*10;
//     console.log(score>=5-goodLuck);
// })(5);


//Closures

// function retirement(retirementAge){
//     var a = ' years left until retirement';
//     return function(yearOfBirth){
//         var age = 2016-yearOfBirth;
//         console.log((retirementAge-age) + a)
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1990);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);
// retirementGermany(1990);
// retirementIceland(1990);


// function interviewQuestion(job){
//     return function(name){
//         if(job ==='designer'){
//             return function(name){
//                 console.log(name + ' , can u plz explain ux design');
//             }
//         }
//         else if(job==='teacher'){
//             return function(name){
//                 console.log('What subject do you teach, '+name + '?');
//             }
//         }
//         else {
//             return function(name){
//                 console.log('Hello '+ name + ' , what do you do ?');
//             }
//         }
//     }
// }
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('john');
// designerQuestion('jane');


//Bind , call and apply

var john = {
    name : 'John',
    age : 26,
    job :'teacher',
    presentation :function(style,timeOfDay){
        if(style==='formal'){
            console.log('Good ' +timeOfDay+ ' Ladies And gentleman ! I\'m '+this.name+ ' i am a '+this.job + ' i am ' +this.age +' years old' );
        }
        else if(style === 'friendly'){
            console.log('Hey ! whats up ? ' +this.name + ' , I am having '+ this.job + 'and my age is '+this.age + ' Have a nice day');
        }
    }
}
var emily = {
    name : 'Emily',
    age : 35,
    job : 'designer'
}
john.presentation.call(emily,'formal','afternoon');

john.presentation('formal','morning');

var johnFriendly = john.presentation.bind(john,'friendly');
johnFriendly('afternoon');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');


var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn) {
    var arrRes = [];
    for(var i=0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016-el;
}

function isFullAge(limit,el){
    return el>=limit;
}
function maxHeartRate(el){
    if(el>=18 && el<=81){
    return Math.round(206.9-(0.67*el));
    }
    else{
        return -1;
    }
}
var ages = arrayCalc(years,calculateAge);

var fullJapan = arrayCalc(ages,isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);


































