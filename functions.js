// type Person = {   // multiple properties we can call using type 
//     name:string;
//     city:string;
//     age:number;
// }
// let persons:Person = {
//     name:'Leela',
//     city:"New York",
//     age:24
// }
// let employe :Person = {
//     name:'Leela',
//     city:"New York",
//     age:24
// }
// console.log(persons.age)
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('department is' + this.name);
    };
    return Department;
}());
var test = new Department("Accounting"); //object
console.log(test);
test.describe();
var testCopy = { name: 'Raju', describe: test.describe }; //copy object
testCopy.describe();
