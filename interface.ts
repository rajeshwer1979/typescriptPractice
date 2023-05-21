interface IGreet{
    greet():void;
}

class Greeting implements IGreet{
    greet(){ }
}

interface IPerson{
    name?:string;
    occupation?:string;
    age?:number;
    hello(name:string):void;
}

class Person implements IPerson{
    constructor(public name:string, public occupation:string){
        this.name = name;
        this.occupation = occupation;
    }
    hello(greet: string): void {
        console.log(greet+''+this.name);
        
    }
}

let jhonPerson:IPerson = {
    name: 'jhon',
    occupation: 'Software',
    age: 40,
    hello(greet: string) {
        console.log(greet + '' + this.name);
    },
    greet: function (): void {
        throw new Error("Function not implemented.");
    }
}
jhonPerson.hello('Hello');
console.log(jhonPerson);
