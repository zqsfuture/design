class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(selector))
        let len = dom ? dom.length : 0;
        for (let i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ""
    }
    append(node) {

    }
    addClass(name) {

    }
    html(data) {

    }
}
window.$ = function(selector) {
    return new jQuery(selector)
}