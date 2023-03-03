// For the provided input [1, 2, 3] the transformToObjects()
// function should return [{val: 1}, {val: 2}, {val: 3}].
const numbers = [1, 2, 3];

function tranformObject(nilai) {
  return nilai.map((numbers) => {
    return { val: numbers };
  });
}
console.log(tranformObject(numbers));

//
const name = ["Raei", "Verse", "Raeiverse"];
const age = [21, 19, 24];

function combined(name, age) {
  const combinedData = [];
  for (let i = 0; i < name.length; i++) {
    const person = {
      name: name[i],
      age: age[i],
    };
    combinedData.push(person);
  }
  return combinedData;
}

const people = combined(name, age);
console.log(people);
