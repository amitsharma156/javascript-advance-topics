//function constructor
// var john = {
//     name : 'John',
//     yearOfBirth : 1990,
//     job : 'teacher'
// }

// var Person = function(name,yearOfBirth,job){
//     this.name =name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
    
// }
// Person.prototype.calculateAge=function(){
//     return 2019-this.yearOfBirth;
// }
// Person.prototype.lastName = 'smith';

// var john = new Person('John',1990,'teacher');
// var jane = new Person('Jane',1969,'designer');
// var mark = new Person('Mark',1948,'driver');

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// Object.create

// var personProto = {
//     calculateAge : function(){
//         console.log(2016-yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job ='teacher';

// var jane = Object.create(personProto,{
//     name : {value :'jane'},
//     yearOfBirth :{value :1969},
//     job :{value :'designer'}
// });


// Primitives vs Objects

// var a = 23;
// var b = a;
// a=46;
// console.log(a, b);

// var obj1 ={
//     name:'john',
//     age : 26
// }
// var obj2 = obj1;
// obj1.age =30;
// console.log(obj1);
// console.log(obj2);

// //functions 
// var age = 27;
// var obj = {
//     name : 'jonas',
//     city : 'Lisbon'
// };
// function change(a,b){
//     a=30;
//     b.city ='San Fransicco';
// }

// change(age,obj);

// console.log(age);
// console.log(obj.city);

//Passing functions as arguments

// var years = [1990,1965,1972,1928,1999];

// function arrayCalc(arr,fn){
//     var newArr = [];
//     for( var i=0; i<arr.length ; i++){
//         newArr.push(fn(arr[i]));
//     }
//     return newArr;
// }

// function calculateAge(age){
//     return 2010-age;
// }
// function adult(age){
//     return age>=18;
// }
// function maxHeartRate(age){
//     if(age>=18 && age<81){
//         return 206-age;
//     }
//     else{
//         return -1;
//     }
// }

// var ages = arrayCalc(years,calculateAge);
// var adullt =arrayCalc(ages,adult)
// var heart = arrayCalc(ages,maxHeartRate);
// console.log(ages);
// console.log(adullt);
// console.log(heart);

//Functions returning functions

function interviewQuestion(job){
    if(job === 'teacher'){
        return function(name){
            console.log('teacher - '+name)
        }
    }
    else if(job === 'designer'){
        return function(name){
            console.log('designer - '+name);
        }
    }
    else {
        return function(name){
            console.log('general ' +name);
        }
    }
}
var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('john');
interviewQuestion('desiasagner')('mark');