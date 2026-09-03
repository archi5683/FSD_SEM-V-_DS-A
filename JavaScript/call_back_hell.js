function test(cb) {
    setTimeout(() => {
        console.log("Task1");
        cb();
    }, 4000);
}

function test2(cb) {
    setTimeout(() => {
        console.log("Task2");
        cb();
    }, 2000);
}

test(() => {
    test2(() => {
        console.log("All tasks completed");
    });
});