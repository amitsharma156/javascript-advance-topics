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

var personProto ={
    calculateAge : function(){
        console.log(2016 - this.yearOFBrith);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOFBrith = 1990,
john.job = 'teacher';

var jane = Object.create(personProto,{
    name : {value:'jane'},
    yearOFBrith : {value : 1969},
    job : {value : 'designer'}
});

