function myLocalScope() {
    // Only change code below this line
    let myVar = "test";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log("outside myLocalScope", myVar);