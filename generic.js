//string operations
var names = [];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Resolve Done');
    }, 2000);
});
promise.then(function (response) {
    console.log(response);
    response.split('');
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var data = merge({ employee: 'Raju' }, { age: 30 });
console.log(data.employee);
