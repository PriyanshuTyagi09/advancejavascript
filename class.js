//class
//  class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
//  }
//  let obj = new ClassName("args1","args2")
//  console.log(obj.prop1);
//  console.log(obj.prop2);
 
//  class Dog {
//     constructor(dogname , weight, color, breed) {
//         this.dogname=dogname;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
//  }
//  let dog=new dog ("javascript",2.4,"brown","chihuahua")
//  console.log(dog.dogname,"is a",dog.bread,"and weight",dog.weight,"kg")
 
//  CLASSES(it shoiuld be started with the capital letters)
//    class person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//    }

//    let p=new person("priyanshu","tyagi");
//    console.log(p.firstname,p.lastname);

// Inheritance: classes can have child classes that inherit the properties and methods from parent class.
// class Vehicle{
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color= color;
//         this.currentSpeed= currentSpeed;
//         this.maxSpeed= maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed +=amount;
//     }
// } 

// class Motorcycle extends Vehicle{
//     constructor(color,currentSpeed,maxSpeed,fuel){
//         super(color, currentSpeed,maxSpeed);
//         this.fuel= fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }
// }

// let motor = new Motorcycle("Black",0, 250, "gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();

// Prototypes
// class Person{
//         constructor(firstname,lastname){
//             this.firstname=firstname;
//             this.lastname=lastname;
//         }
//     }
    


//     Person.prototype.introduce = function() {
//         console.log("Hi, I'm", this.firstname);
//     };
//     Person.prototype.favoriteColor="Green";

    
