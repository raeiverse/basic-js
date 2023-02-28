function printMyName(name) {
  console.log(name);
}
printMyName("Raei");

// Arrow need const to using it and () needed if there multiple variable
const printWeName = (weName) => {
  console.log(weName);
};
printWeName("Raei");

const printMultipleData = (multiName, multiAge) => {
  console.log(multiName, multiAge);
};
printMultipleData("Raei", 20);

const multiply = (number) => number * 2;
console.log(multiply(2));
