// single class
class Person {
  constructor() {
    // this.name to declare the data using variable called name
    this.name = "Raei";
  }
  printMyNames() {
    console.log(this.name);
  }
}

// multiple classes
class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}
// extends to using another class data
class Persons extends Human {
  constructor() {
    // super is needed when using another class, super = to show we use parent class item
    super();
    this.name = "Raei";
    this.gender='female';
  }
  printMyNames() {
    console.log(this.name, this.gender);
  }
}

// person is var to call method and Persons is classes we make
const person = new Persons();
person.printMyNames();
person.printGender();
