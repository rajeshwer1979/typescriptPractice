// const str ='rajeshwerMamidala';
// let obj = {};

// for(let i =0; i<= str.length; i++){ 
//     let s= str[i]; // single charecters
//     // console.log(s);    
//     if (obj[s] != 1) {
//         obj[s] = 1;  //key = value
//         // console.log(obj[s]); 
//      } else { 

//         obj[s] = obj[s]  + 1;  //key = value
//         // console.log(obj[s]);        
//      }     
// }
// console.log(obj)


// let strn = "atul kumar srivastava";
// let objt ={};
// for(let s of strn)if(!objt[s])objt[s] = 1;else objt[s] = objt[s]  + 1;
// console.log(objt)

// let arr = [50,40,30,20,10];
// let position = 2;
// let newEl = 45;
// let item = 20;
// let itemIndex = undefined;
//insert element
//  for(let i=arr.length-1; i>=0; i--){ 
// console.log(i,arr[i]);
//      if(i>=position){
//         arr[i+1]=arr[i];
//          console.log((i+1), i)
//         if(i==position){
//           arr[i]=newEl;
//         }
//     }    
//   }
// console.warn(arr);

//delete element
// for(let j=position; j<arr.length-1; j++){
//       arr[j]=arr[j+1];      
//      console.log([j], [j+1])
// }
// arr.length = arr.length-1;
// console.warn(arr);

// for(let i=0;i<arr.length;i++){
//    if(arr[i]===item){
//       itemIndex = i;
//       break;
//    }
// }
// console.warn(itemIndex);


// array data merging
// let data = [1,2,3,4,5];
// let data2 = [6,7,8,9,10];
// let data3 = [];

// for(let i=0; i<=data.length; i++){
//    data3[i] = data[i];
// }
// for(let i=0; i<=data2.length; i++){
//    data3[data.length+i] = data2[i];
// }
// console.log(data3, data merging);


// // array sorting
// let sortarr = [10,30,12,25];

// for(let i=0; i<sortarr.length; i++){
//    for(let j=0; j<sortarr.length; j++){

//       // if(sortarr[40]>sortarr[30]){
//          // let temp = sortarr[40];
//          // sortarr[40] = sortarr[30]; 
//          // sortarr[30] = temp //40;
//          //}
//          if(sortarr[j]>sortarr[j+1]){
//          let temp = sortarr[j];
//          sortarr[j] = sortarr[j+1]; 
//          sortarr[j+1] = temp;
//       }
//    }
// }
// console.warn(sortarr);

// // Recursion --> Function calling repetedly
// function factorial(item:any){
//    if(item == 0){
//       return 1;
//    }
//    return item*factorial(item - 1);
// }
// let datav =5;
// console.log(factorial(datav), 'factorial 1');

// // Recursion --> increment
// function fnIncrement(x){
//    console.log(x, 'factorial 2');  //5,4,3,2,1,0 
//    if(x>0){
//       fnIncrement(x-1);
//    }
//    console.log(x, 'factorial 3'); //0,1,2,3,4,5
// }
// let s =5;
// fnIncrement(s);

// //Stack Data Push Array
// let pushData:any = [];
// let currentSize = pushData.length;
// let maxSize = 7;
// function pushArray(newVal){
//    if(currentSize >= maxSize){
//       alert("Stack is full you can not add "+ newVal)
//    }
//    pushData[currentSize] = newVal;
//    currentSize += 1;   //currentSize ++
// }


// //Stack Data Pop Array
// function popArray(){
//    if(currentSize>0){
//       currentSize -= 1; //currentSize --
//       pushData.length = currentSize;
//    }else{
//       alert("Stack is already empty.")
//    }
// }

// pushArray(20);
// pushArray(21);
// pushArray(22);
// pushArray(23);
// // pushArray(24);
// // pushArray(25);
// // pushArray(26); 
// popArray();
// popArray();  
// console.log(pushData)

// String to Array Conversion
// function reverseStr(item){
//    //console.warn(item)
//    for(let i =0; i<item.length; i++){
//       pushArray(item[i])
//    }
//    for(let i=0; i<item.length; i++){
//       // item[i] = popArray(); //ujaR
//       popArray() //Raju
//    }
// }

// let strn = "Raju";
// // let r = strn.split();
// let r = strn.split("");
// // console.log(r);
// reverseStr(strn);
// console.log(r);
// console.log(r.join(""))

class linearSearch {
   data;
   find;
   pos;
   constructor() {
      this.data = [2, 5, 6, 8, 9, 10];
      this.find = 8;
      this.pos = undefined;

      for (let i = 0; i <= this.data.length; i++) {
         if (this.data[i] == this.find) {
            this.pos = i;
            break;
         }
      }
      // console.log(this.pos, 'pos');
   }
}
let ls = new linearSearch();
console.log(ls.pos, 'pos');

class Stack {  //LIFO (Last-In-First-Out)
   item: any = [];
   currentsize;
   maxsize
   constructor(size) {
      this.currentsize = this.item.length;
      this.maxsize = size;
   }
   push(newVal) {
      if (this.currentsize >= this.maxsize) {
         alert("Stack is full");
      } else {
         this.item[this.currentsize] = newVal;
         this.currentsize++;
      }
   }
   pop() {  //remove last element
      if (this.currentsize > 0) {
         this.currentsize--;
         this.item.length = this.currentsize;
      } else {
         alert('Stak is already empty');
      }
   }
   reverseString(item) {
      for (let i = 0; i < item.length; i++) {
         this.push(item[i])
      }
      for (let i = 0; i < item.length; i++) {
         (item[i]) = this.pop()
      }
   }
   display() {
      console.log(this.item)
   }
}

let str1 = new Stack(5);
console.log(str1, 'str1');
str1.reverseString(2)
str1.push(1)
str1.push(2)
str1.push(3)
str1.pop()
str1.display()

class Queue { //FIFO (First-In-First-Out)
   queue: any = [];
   currentSize = this.queue.length;
   maxSize = 5;
   enqueue(newVal) {
      if (!this.isEmpty) { //false
         this.queue[this.currentSize] = newVal;
         this.currentSize++
      } else {
         alert('Queue is already empty')
      }
   }
   dequeue() { //remove first element
      if (!this.isEmpty) { //false
         for (let i = 0; i < this.queue.length; i++) {
            this.queue[i] = this.queue[i + 1];
         }
         this.currentSize--;
         this.queue.length = this.currentSize;
      } else {
         alert('Queue is already empty')
      }
   }
   front() { //frist element
      if (this.currentSize >= 0) {
         console.warn(this.queue[0])
      } else {
         alert('Queue is already empty')
      }
   }

   rear() {  // last element
      if (!this.isEmpty) { //false 
         console.warn(this.queue[this.currentSize - 1])
      } else {
         alert('Queue is alreday empty')
      }
   }

   isEmpty() {
      if (this.currentSize <= 0) {
         return true;
      } else {
         return false;
      }
   }

   display() {
      console.warn(this.queue)
   }
}
let logQueue = new Queue();
logQueue.enqueue(30);
logQueue.front();
logQueue.rear();
logQueue.dequeue();
logQueue.display();

// Object Map
// let objData = new Map([
//   ['company', 'Raju'],
//    [true, 'Boolean'],
//    [100, 'hundered']
// ]);

// objData.set('color','green');
// console.log(objData.size);
// for(let x of objData){
//    console.warn(x[1]);
// }
// objData.forEach((val, key) => {
//    console.log(val, key)
// });

class circleQueue {
   max;
   items;
   currentSize;
   rear;
   front;
   constructor(size) {
      this.max = size;
      this.items = new Array(size);
      this.currentSize = 0;
      this.rear = -1;
      this.front = -1;
   }

   enqueue(val) {
      if (this.currentSize != this.max) {
         if (this.rear == this.max - 1) {
            this.rear = 0;
         } else {
            this.rear++;
         }
         this.items[this.rear] = val;
         this.currentSize++;
         if (this.front == -1) {
            this.rear = this.front;
         }
      }
   }
   dequeue() {
      if (this.currentSize != 0) {
         this.items[this.front] = null;
         if (this.front == this.max - 1) {
            this.front = 0;
         } else {
            this.front++
         }
         this.currentSize++
      } else {
         this.front = -1;
         this.rear = -1;
         alert('Queue is empty')
      }
   }
}

let cq = new circleQueue(5);


