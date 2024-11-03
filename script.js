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

// A function calling another function
function firstFunction() {
    console.log("Inside first");
    secondFunction();
    console.log("Back in first after calling second");
}

function secondFunction() {
    console.log("Inside second");
}

// Calls the first function for step 4. the console.log within the first function is called then the second function
// and lastly the second part of the first function is called. so the first function shows the first console.log as it follows 
// the order in which it is set then due to second function being called it occurs next and lastly the final console.log is called upon
// at the end.
firstFunction();


// function causes stackoverflow
function causeStackOverflow() {
    causeStackOverflow();
}

// causeStackOverflow();