class Animal {
    constructor(name, birthdate, species){
        this.name = name;
        this.birthdate = birthdate;
        this.species = species;
    }

    getAge(){
        let day = new Date();
        let actualAge = Math.abs(this.birthdate.getFullYear() = day.getFullYear());
        return actualAge;
    }

    speak(){
        if(this.species === 'dog'){
            console.log(`${this.name}`)
        }
    }
}