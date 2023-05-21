//string operations
let names:Array<string> = [];
let promise:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve Done');
    }, 2000);
});

promise.then((response) =>{
    console.log(response);
    response.split('');
});


function merge<T extends Object, U extends Object>( objA:T, objB:U){
        return Object.assign(objA,objB);
}
const data = merge({ employee:'Raju'}, {age:30}) as{ employee:string, age:number };
console.log(data.employee);

     