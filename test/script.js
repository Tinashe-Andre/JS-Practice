function createGreeter(greeting) {
    return function(name) {
        console.log(greeting + ", " + name);
    };
}

let sayHello = createGreeter("Hello");
sayHello("Alice");
