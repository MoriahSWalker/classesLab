class Car {
    constructor (serialNumber, maker, price) {
      this.serialNumber = serialNumber;
      this.maker = maker;
      this.price = price
    }
    drive () {
      console.log('Vroom Vroom');
    }
    stop () {
        console.log('Skurrrt. Abrupt stop!')
    }
  }

  const firstCar = new Car(34573, "Bronco", 65000);
  const secondCar = new Car(87949, "Jeep", 14000);
  const thirdCar = new Car(12345, "Lexus", 70000);
  const fourthCar = new Car(57394, "BMW", 65000);
  const fifthCar = new Car(99483, "Bentley", 90000);

  let myCarCollection = [firstCar, secondCar, thirdCar, fourthCar, fifthCar]

  myCarCollection.map((myCars) => {
    myCars.drive()
    console.log(myCars.serialNumber)
  })
  

// 2. 
 
class Trucks{
    constructor(doors = 2, price, color, make){
        this.door = doors;
        this.price = price;
        this.color = color;
        this.make = make
    }
}

const truck1 = new Trucks(2, 1200, "white", "Ford ");
const truck2 = new Trucks(4, 16000, "black", "Tundra" );
const truck3 = new Trucks(4, 26000, "silver", "Dodge Ram");
const truck4 = new Trucks(2, 40000, "gray", "Rivian");
const truck5 = new Trucks(4, 11000, "red", "Jeep");

let myTruckCollection = [truck1, truck2, truck3, truck4, truck5];

    // 3.
    // make a function called compareCollections
    // create a variable in the function called carsValue and (by iterating through the array) get the average price.
    // do the same for the trucks collection
    // log a string explaining which collection has a higher average price


const compareCollections = () => {
    let carsValue = [65000, 14000, 70000, 65000, 90000];
    let average = carsValue.reduce ((a,b) => a + b, 0) / carsValue.length;
    // console.log(average)
    let trucksValue = [1200, 16000, 26000, 40000, 11000]
    let average2 = trucksValue.reduce ((a,b) => a + b, 0) / trucksValue.length;
    // console.log(average2)
    console.log(`The cars collection has a higher average price of ${average}.`)
}
compareCollections()




// 4.
// Create a class called Person - add appropriate properties and methods.

class Person {
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    greeting (){
        console.log("Hello, it is nice to meet you!")
    }
   
}



// 5.
//  create a class called Enemy that extends Person, adding extra properties and methods.

class Enemy extends Person {
    constructor(name, age, location, favColor, favFood ){
        super(name, age, location)
        this.favColor = favColor;
        this.favFood = favFood
    }
    offerPeace (){
        console.log("I surrender, let's go out for Sushi!")
    }
}

// 6.
    // create a Factory that takes a name as a parameter.
  // create an instance of the factory called const jerry = new Factory('jerry')
  // the factory should have an empty array called "friends" (this.friends = [])
  // the factory should also have a method to push friends to that array (taking the friend's name as a parameter)

  class Factory{
    constructor(name){
        this.name = name;
        this.friends = []
    }
    addFriends (){
        const newFriend = new Factory(this.friends);
        this.friends.push(this.name)
    }
}

const jerry = new Factory('jerry')
jerry.addFriends()
console.log(jerry)
  

// 7.  
// Create a class that will produce Comments (author, content, date, likes, commentIndex (where the comment falls) ).
// Make another class for  social media posts.
// The object should have properties author, content, date, likes, and comments ( empty array).
// There should be a method called editContent that takes in a new string that will replace the content.
// There should be another method called addComment that uses the Comments class to create a new comment with some passed values (arguments) and
// pushes that comment object to the comments array.

// class Comments {
//     constructor(author, content, date, likes, commentIndex){
//         this.author = author;
//         this.content = content;
//         this.date = date;
//         this.likes = likes;
//         this.commentIndex = commentIndex
//     }
// }


// class SocialMediaPosts extends Comments {
//     constructor(author, content, date, likes, comments){
//         super(author, content, date, likes);
//         this.comments = []

//     }
//     editContent(string){
//          newContent() = this.content;
//     }
//     addComment(comments){
//         let newComment = Comments("Moriah", "Coding is tough but REWARDING!", new Date, 100, );
//         this.comments.push(newComment)
//     }
// }
// addComment(newComment)
// console.log(Comments)

