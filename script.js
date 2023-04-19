//your JS code here. If required.
let output=document.getElementById("output");

// const randomNumber= Math.random() * (4-1)
let count=0;

let promise1=new Promise((resolve,reject)=>{
    const randomNumber= Math.random() * (4-1)
    //let tr=document.createElement('tr')
    setTimeout(() => {
        // resolve(`<tr><td>Promise 1</td>time taken by it to resolve in seconds${randomNumber}, for<td></td></tr>`)
        resolve(`<tr><td>Loading...</td><td>Loading...</td></tr>`)
    }, randomNumber);
    count+=randomNumber
})

let promise2=new Promise((resolve,reject)=>{
    const randomNumber= Math.random() * (4-1)
   // let tr=document.createElement('tr')
    setTimeout(() => {
        // resolve(`<tr><td>Promise 2</td>time taken by it to resolve in seconds${randomNumber}, for<td></td></tr>`)
        resolve(`<tr><td>Loading...</td><td>Loading...</td></tr>`)
    }, randomNumber);
    count+=randomNumber
})
let promise3=new Promise((resolve,reject)=>{
    const randomNumber= Math.random() * (4-1)
    //let tr=document.createElement('tr')
    setTimeout(() => {
        // resolve(`<tr><td>Promise 2</td>time taken by it to resolve in seconds${randomNumber}, for<td></td></tr>`)
        resolve(`<tr><td>Loading...</td><td>Loading...</td></tr>`)
    }, randomNumber);
    count+=randomNumber
})

let promise4=new Promise((resolve,reject)=>{
    let tr=document.createElement('tr')
    setTimeout(() => {
        // resolve(`<tr><td>total</td>time taken to resolve all promises in seconds (should be a decimal number), for ${count}, for<td></td></tr>`)
        resolve(`<tr><td>Loading...</td><td>Loading...</td></tr>`)
    }, count);
})

Promise.all ([promise1,promise2,promise3,promise4]).then((values)=>{
console.log("values",values, new Date())
}).catch((err)=>{
console.log("err", err)
})