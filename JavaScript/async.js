//async is a way to handle operations that take time to complete, such as fetching data from an API or reading a file. It allows the program to continue executing other code while waiting for the operation to finish, improving performance and responsiveness.
console.log("Task 1");
console.log("Task 2");
setTimeout(() => {
    console.log("Task 3");

},2000);
console.log("Task 4");
console.log("Task 5");