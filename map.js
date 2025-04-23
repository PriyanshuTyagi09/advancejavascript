// // create a map
// const fruits=new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);

// //Set Map Values
// fruits.set("apples",500);
// fruits.set("bananas",300)
// fruits.set("oranges",200);
// // returns object
// typeof fruits;
// //map.clear map.size map.new map.delete map.get map.set typeof

//Map.forEach()
// let text=" ";
// fruits.forEach (function(value,key) {
//     text+=key +'='+value;
// })

// Map.entries()
// let text=" ";
// for(const x of fruits.entries()) {
//     text+=x;
// }

//map.keys()
// let text="";
// for(const x of fruits.keys()) {
//     text+=x;
// }

// //map.values()
// let text="";
// for(const x of fruits.values()) {
//     text+=x;
// }


// Objects as keys
//Create Objects
// const apples={names:'Apples'};
// const bananas={names:'Bananas'};
// const oranges={names:'Oranges'};

// const fruits= new Map();

// fruits.set(apples,500);
// fruits.set(bananas,300)
// fruits.set(oranges,200)



//Destructuring :is not destructive.
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50
// };
// let{firstName,lastName}=person;

//object default values:for potenially missing properties
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50
// };
// let{lastName:name}=person;