// destructure

const student = {
    name: "ayisha",
    age: 19,
    projects : {
        diceGame: " Two player dice game using Javascript"
    }
}

const { name, age, projects: { diceGame } } = student;

console.log(name);
console.log(age);

console.log(diceGame);