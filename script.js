//your JS code here. If required.
let output=document.getElementById("output");

// const randomNumber= Math.random() * (4-1)
let count=0;

let promise1=new Promise((resolve,reject)=>{
    const randomNumber= Math.random() * (4-1)
    let tr=document.createElement('tr')
    setTimeout(() => {
        resolve("1",new Date())
    }, randomNumber);
    count+=randomNumber
})

let promise2=new Promise((resolve,reject)=>{
    const randomNumber= Math.random() * (4-1)
    let tr=document.createElement('tr')
    setTimeout(() => {
        resolve("2",new Date())
    }, randomNumber);
    count+=randomNumber
})
let promise3=new Promise((resolve,reject)=>{
    const randomNumber= Math.random() * (4-1)
    let tr=document.createElement('tr')
    setTimeout(() => {
        resolve("3",new Date())
    }, randomNumber);
    count+=randomNumber
})

let promise4=new Promise((resolve,reject)=>{
    let tr=document.createElement('tr')
    setTimeout(() => {
        resolve("4",new Date())
    }, count);
})

Promise.all([promise1,promise2,promise3,promise4]).then((values)=>{
console.log("values",values, new Date())
}).catch((err)=>{
console.log("err", err)
})