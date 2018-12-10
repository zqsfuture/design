class Circle {
    draw() {
        console.log("画个一圆形")
    }
}

 class Decorator {
     constructor(circle) {
         this.circle = circle
     }
     draw() {
         this.circle.draw()
     }
     setRedBorder(circle) {
         console.log("设置红色边框")
         return true
     }
 }

 let circle = new Circle()
 circle.draw()
 console.log("*****分割线*****")
 let desc = new Decorator(circle)
 console.log(desc.draw())
 console.log(desc.setRedBorder())