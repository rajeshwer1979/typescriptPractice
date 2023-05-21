let companies=[
    {comapyname:'LG', employees:500, category:'retail', start:1970, end: 20022},
    {comapyname:'Wipro', employees:600, category:'retail', start:1981, end: 20021},
    {comapyname:'HCL', employees:700, category:'retail', start:1985, end: 20020},
    {comapyname:'TCS', employees:800, category:'IT', start:1990, end: 2019},
    {comapyname:'Mahindra', employees:900, category:'IT', start:1983, end: 20022},
]

let ages =[9,18,21,24,32,42,52,62]

// for(let i=0; i<companies.length; i++){
//    console.log( companies[i].comapyname); 
// }


//  companies.forEach(function(company){
//     console.log(company.employees);
// });

// ages.filter(function(age){
//     if(age >= 21){
//         console.log(age);        
//         return true;      
//     }
// });
 
// const canDrink = ages.filter(age => age>=21);
// console.log(canDrink);

// let cats = companies.filter((company)=>company.category==='retail');
// console.log(cats);

// let catsDiff = companies.filter((company)=> (company.start >= 1985 && company.end >= 2020));
// console.log(catsDiff);

// let catsRange = companies.filter((company) => (company.end - company.start > 20));
// console.log(catsRange);

// let map = companies.map(function(company){
//     // return company.comapyname;
//     return `${company.comapyname} [${company.end} - ${company.start}]` ;
// });
// console.log(map);
// companies.map(function(company){
//     console.log(company.comapyname);
// });
    

let sorting = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return
    }else{
        return -1;
    }
});
console.log(sorting);
