function f1(){
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
        console.log("Task1");
        resolve();
    },4000);
})
}
    

function f2(){
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
        console.log("Task2");
        resolve();
    },2000);
})
}

f1().then(f2)
    .catch((err)=>{
        console.log("Error",err);
    })