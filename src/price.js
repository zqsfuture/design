class Car {
    constructor(name, number) {
        this.name = name
        this.number = number
    }
}
class Zhuanche extends Car {
    constructor(name, number, price) {
        super(name,number)
        this.price = 1
    }
}
class Kuaiche extends Car {
    constructor(name, number, price) {
        super(name,number)
        this.price = 2
    }
}
class Trip {
    constructor(car) {
        this.car = car
    }
    start() {
        console.log(`行程开始，名称：${this.car.name}，车牌号：${this.car.number}`)
    }
    end() {
        console.log(`行程结束，价格：${this.car.price*5}`)
    }
}
let car = new Zhuanche("湘A88888","宝马X5")
let trip = new Trip(car)
trip.start()
trip.end()