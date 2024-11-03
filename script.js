// Greeting function
function greet(name) {
    // ` is used for string interpolation 
    return `Hello, ${name}`;
}
console.log(greet("some name"));

// Circumference Function
function circumference(diameter) {
    const pi = Math.PI;
    return pi * diameter;
}

console.log(circumference(10));