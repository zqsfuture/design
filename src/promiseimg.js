function loadImg(src) {
    let promise = new Promise(function (resolve, reject) {
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

result.then(function (img) {
    console.log(`width:${img.width}`)
    return img
}).then(function (img) {
    console.log(`height:${img.height}`)
}).catch(function (ex) {
    console.log(ex)
})