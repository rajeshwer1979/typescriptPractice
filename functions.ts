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


class Department{
    name:string;

    constructor(n:string){
        this.name = n;
    }
    describe(){
        console.log('department is' + this.name);
        
    }
}

let test = new Department("Accounting");  //object
console.log(test);
test.describe();

let testCopy = { name:'Raju', describe: test.describe}; //copy object
testCopy.describe();