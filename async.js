// async await 
/*
    async await helps to execute asynchronous code sequentially like any synchronous code 
    async functions always returns a promise

*/


// async function getData(){
//     setTimeout(()=>{
//         console.log("HEllO WORLD");
//     },10000)
// }


// console.log("Yo")
// let res = getData()

// let res = async function getData(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     data = await data.json()
//     console.log(data)
// }

// res()

const myHeaders = new Headers()
myHeaders.append("Content-Type","application/json")

const url = "https://jsonplaceholder.typicode.com/posts"

const options = {
    method:"POST",
    body:JSON.stringify({
        username:"Example"
    }),
    headers:myHeaders
}

async function postData(){
    const response = await fetch(url,options) // post kar rahe hai issliye options bhii pass kare hai
    data = await response.json()
    console.log(data)
}


async function getData(){
    const res = await fetch(url)
    data = await res.json()
    console.log(data)
}

async function processData(){
    postData()
    getData()
} 
processData()