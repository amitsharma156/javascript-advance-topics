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

var personProto = {
    calculateAge : function(){
        console.log(2016-yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job ='teacher';