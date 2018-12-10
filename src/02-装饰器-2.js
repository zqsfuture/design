function readonly(target, name, descriptor){
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}

class Person {
    constructor() {
        this.first = 'A'
        this.last = 'B'
    }

    @readonly
    name() { return `${this.first} ${this.last}` }
}

var p = new Person()
console.log(p.name())
p.name = function () {} // 这里会报错，因为 name 是只读属性
