class Circle {
    draw() {
        console.log("画一个圆形")
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw() {
        this.circle.draw()
        this.setRedBorder(circle)
    }
    setRedBorder() {
        console.log("设置红色边框")
    }
}
//test
let circle = new Circle()
circle.draw()
let dec = new Decorator(circle)
dec.draw()