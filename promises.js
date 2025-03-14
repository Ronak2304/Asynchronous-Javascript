// Promises
/*
    Promises give an illusion that asynchronous tasks are happening synchronously 
    Promises has 3 states:
        Pending 
        Fullfilled 
        Rejected 

        promise humesha pending mai hi rehta hai jab tak tum use resolve naa karo chahe promise kai andar ka poora code run ho jaye phir bhi
*/

 

// let firstPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Hello World")
//     },10000)
//     resolve(1);
// })


// let promise1 = new Promise((resolve, reject)=>{
//     let success = true

//     if(success){
//         resolve("Promise Fulfilled")
//     }
//     else{
//         reject("Promise Rejected")
//     }
// })


// Multple then/catch messages at once is known as promise chaining or chaining of promises
// promise1.then((msg)=>{
//     console.log(`Promise Resolved and message is: ${msg}`)
//     return "sec-msg"
// }).catch((msg)=>{
//     console.log(`Promise Rejected and message is:  ${msg}`)
// }).finally((msg)=>{
//     console.log(`Finally wala msg: ${msg}`)
// }).then((msg)=>{
//     console.log(`second then msg: ${msg}`)
// })


// setTimeout(()=>{
//     console.log("first")
//     setTimeout(()=>{
//         console.log("third")
//         setTimeout(()=>{
//             console.log("second")
//         },1000)
//     },1000)
// },1000)


// let prom1 = new Promise((resolve,reject)=>{
//     setTimeout(() => 
//         resolve(3),1000,"hello1"
//     );
// })
// let prom2 = new Promise((resolve,reject)=>{
//     setTimeout(() => 
//         resolve(2),2000,"hello2" // this is doing what here resolve is the task/handler which is to performed and 2000 is the timeout and in last hello is the string which is returned back as response from timeout
//     );
// })
// let prom3 = new Promise((resolve,reject)=>{
//     setTimeout(() => 
//         reject("Error"),3000,"Hello3"
//     );
// })

// // Here Promise.all does this thing that it creates another promise which will be marked resolved only when all the promises in the list are resolved
// // If anyone of the promise inside the list gets rejected then this .all promise will also be considered as rejected

// Promise.all([prom1,prom2,prom3]).then((values)=>{
//     console.log(values)
// }).catch((err)=>{
//     console.log(err)
// })


// Asynchronous code means kuch aise function jo normally chahe pehle likhe ho but unka output baad mai aata hai 
// cause they tend to take more time so client unhe baad mai execute karne kai liye daal deta and pehle baaki synchornous code 
// run kardeta hai and even though if they take less time but they are run in the last 

// console.log("Sync1")
// setTimeout(()=>{
//     console.log("Hello")
// },0)
// console.log("Sync2")