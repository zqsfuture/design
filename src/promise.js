import StateMachine from 'javascript-state-machine'

// 状态机模型
let fsm = new StateMachine({
    init: "pending",
    transitioins: [
        {
            name: "resolve",
            from: "pending",
            to: "fullfilled"
        },
        {
            name: "reject",
            from: "pending",
            to: "rejected"
        }
    ],
    methods: {
        // 监听resolve
        onResolve(state, data) {
            //state
            data.successList.map(item => item())
        },
        // 监听reject
        onReject(state, data) {
            //state
            data.failList.map(item => item())
        }
    }
})

class MyPromise {
    constructor(fn) {
        this.successList = []
        this.failList = []
        fn(function () {
            //resolve
            fsm.resolve(this)
        }, function () {
            //reject
            fsm.reject(this)
        })
    }
    then(successFn, failFn) {
        this.successList.push(successFn)
        this.failList.push(failFn)
    }
}

function loadImg(src) {
    const promise = new MyPromise((resolve, reject) => {
        let img = document.createElement("img")
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject("图片加载失败")
        }
        img.src = src
    })
    return promise
}

let src = "https://cdn.stonedrums.com.cn/20188221534926643076.jpg";
let result = loadImg(src)
result.then(function () {
    console.log("ok1")
},function(){
    console.log("fail1")
})
result.then(function () {
    console.log("ok2")
},function(){
    console.log("fail2")
})

