const { use } = require("react");

function calculateCardTotal(val1,val2, ...num1) {  // rest operator
    return num1
}

// console.log(calculateCardTotal(200,400,500,2000))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

handleObject({
    username : "sam",
    price: 399
})