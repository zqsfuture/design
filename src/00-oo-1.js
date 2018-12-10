class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        alert(`${this.name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}

let zhang = new People('zhang', 20)
zhang.eat()
zhang.speak()

let wang = new People('wang', 21)
wang.eat()
wang.speak()