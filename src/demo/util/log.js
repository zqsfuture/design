export function log(type) {
    return function (target, name, descriptor) {
        var oldValue = descriptor.value;
    
        descriptor.value = function() {
            //  此处统一上报日志
            console.log(`日志上报 ${type}`);
    
            // 执行原有方法
            return oldValue.apply(this, arguments);
        };
    
        return descriptor;
    }
}