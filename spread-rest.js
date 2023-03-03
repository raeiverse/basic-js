// single data array
const number = [1, 2, 3];
// get previous data and add own data, ... is connector to previous data
const newNumber = [...number, 4];

console.log(newNumber);

const person = {
  name: "Raei",
};

const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson);

// el is parameter comparasions
const filter = (...args) => {
  return args.filter((el) => el == 1);
};

console.log(filter(1, 2, 3));
