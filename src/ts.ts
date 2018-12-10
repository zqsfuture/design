class People {
    name
    age
    protected weight
    constructor(name, age) {
        this.name = name
        this.age = age
        this.weight = 120
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
    speak() {
        console.log(`My name is ${this.name}, age ${this.age}`)
    }
}
class Students extends People {
    number
    private girlfriend
    constructor(name, age, number) {
        super(name, age)
        this.number = number
        this.girlfriend = 'xiaoli'
    }
    sdudy() {
        console.log(`${this.name} study ${this.number}`)
    }
    getWeight() {
        console.log(`weight  ${this.weight}`)
    }
}

let xiaoming = new Students("xiaoming", 28, 1);
console.log(xiaoming.getWeight())