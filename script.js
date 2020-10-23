// Old Way
// const animal = {
//     name: "Nelson",
//     dob: new Date(2017, 05, 16),
//     species: 'Dog'
// }

// console.log(animal);

// Arrow functions don't rebind the this keyword, 
// so we cannot use arrow functions whenever we are trying to access the this keyword

function Animal(name, dob, species){
    this.name = name;
    this.dob = dob;
    this.species = species;
}
// Have to put it as prototype so javascript knows to apply this to new a instance
Animal.prototype.speak = function(){
    console.log(`Hello, my name is ${this.name}`);
}

const theFarm = [
    new Animal('Nelson', new Date(2017, 5, 16), 'Dog'),
    new Animal('Emmy', new Date(2020, 2, 01), 'Dog'),
    new Animal('Fish', new Date(2020, 8, 1), 'Fish'),
    new Animal('Atom', new Date(2013, 9, 1), 'Cat'),
]
// console.log(theFarm);

// theFarm.forEach(animal => {
//     for(let key in animal){
//         const value = animal[key]
//         console.log(`${key} : ${value}`)
//     }
// })

theFarm.forEach(animal=>{
    animal.speak();
})
