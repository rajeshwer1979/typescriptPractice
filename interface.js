var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () { };
    return Greeting;
}());
var Person = /** @class */ (function () {
    function Person(name, occupation) {
        this.name = name;
        this.occupation = occupation;
        this.name = name;
        this.occupation = occupation;
    }
    Person.prototype.hello = function (greet) {
        console.log(greet + '' + this.name);
    };
    return Person;
}());
var jhonPerson = {
    name: 'jhon',
    occupation: 'Software',
    age: 40,
    hello: function (greet) {
        console.log(greet + '' + this.name);
    },
    greet: function () {
        throw new Error("Function not implemented.");
    }
};
jhonPerson.hello('Hello');
console.log(jhonPerson);
