function Person(name, email, phone){
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function(other){
    console.log(`Hello ${other.name}, I am ${this.name}!`);
};

const funnyFarm = [
    new Person('Sonny', 'sonny@hotmail.com', '483-485-4948'),
    new Person('Jordan', 'jordan@aol.com', '495-586-3456'),
]

funnyFarm.forEach((people, index)=>{
    index === 0 ? people.greet(funnyFarm[index+1]) : people.greet(funnyFarm[index-1])
})

funnyFarm.forEach((people)=>{
    console.log(`\n${people.name} Contact Info:\n${people.email}\n${people.phone}\n`)
})