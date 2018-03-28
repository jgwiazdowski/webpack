class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi!' + this.name
        return `Hi, I am ${this.name}!`
    }

    getDesciption() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    getDesciption() {
        let description = super.getDesciption();
        if (this.hasMajor()) {
            description = description + ` Their major is ${this.major}`;
        }
        return description;

    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getDesciption() {
        let description = super.getDesciption();
        if (this.hasHomeLocation()) {
            description = description + ` I am visiting from  ${this.homeLocation}`;
        }
        return description;

    }
}


// const me = new Student('Jacob', 26, 'Developer');
// const other = new Student();
const t1 = new Traveler('Jacob', 26, 'Cambridge');
const t2 = new Traveler();

console.log(t1.getDesciption())
console.log(t2.getDesciption())
