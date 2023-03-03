// primitives types is will only create real copy of data
const number = 1;
const num2 = number;
console.log(num2);

// references types is copying the object not just the pointer
const person = {
  name: "Raei",
};
const secondPerson = person;

console.log(secondPerson);
