class Action {
    constructor(name) {
        this.name = name
        this.nextAction = null
    }
    setNextAction(action) {
        this.nextAction = action
    }
    handle() {
        console.log(`${this.name} 审批`)
        if(this.nextAction != null) {
            this.nextAction.handle()
        }else {
            console.log(`审批完成`)
        }
    }
}
let a1 = new Action("组长")
let a2 = new Action("经理")
let a3 = new Action("总监")
a1.setNextAction(a2)
a2.setNextAction(a3)
a1.handle()