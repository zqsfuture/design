class ReadImg {
    constructor(fileName) {
        this.fileName = fileName
        this.loadFromDisk()
    }
    display() {
        console.log("display..." + this.fileName)
    }
    loadFromDisk() {
        console.log("loading..." + this.fileName)
    }
}

class ProxyImg {
    constructor(fileName) {
        this.realImg = new ReadImg(fileName)
    }
    display() {
        this.realImg.display()
    }
}

let proxyImg = new ProxyImg("1.png")
proxyImg.display()