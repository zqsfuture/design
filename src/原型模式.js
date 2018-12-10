let prototype = {
    getName() {
        return this.first + ' ' +this.last
    },
    say() {
        console.log("hello")
    }
}
let x = Object.create(prototype)
x.first = "A"
x.last = "B"
console.log(x.getName())
x.say()

let xy = Object.create(prototype)
xy.first = "C"
xy.last = "D"
console.log(xy.getName())
xy.say()
console.log(x.first)