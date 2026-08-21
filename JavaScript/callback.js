function sum (x,y){
    return x+y;
}


function somemsg (callback, msg){
    const result = callback(20, 30);
    const fresult = "Hi " + msg + " Your score is " + result;

    console.log(fresult);
}

somemsg(sum, "abc");
