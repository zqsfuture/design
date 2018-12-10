class State {
    constructor(color) {
        this.color = color
    }
    handle(context) {
        console.log(`turn to ${this.color} light`)
        context.setState(this)
    }
}

class Context {
    constructor() {
        this.state = null
    }
    setState(state) {
        this.state = state
    }
    getState() {
        return this.state
    }
}

// 测试代码
let context = new Context()

let greed = new State('greed')
let yellow = new State('yellow')
let red = new State('red')

// 绿灯亮了
greed.handle(context)
console.log(context.getState())
// 黄灯亮了
yellow.handle(context)
console.log(context.getState())
// 红灯亮了
red.handle(context)
console.log(context.getState())

