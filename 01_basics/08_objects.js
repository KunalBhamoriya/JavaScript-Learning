//object literals


const mySym = Symbol("key1")

const JsUser = {
    name : "Kunal",
    "full name" : "Kunal Bhamoriya",
    [mySym] : "mykey1",
    age: 23,
    location: "Indore",
    email : "abc@abs.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

JsUser.email = "xyz@xyz.com"
// Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("hello")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());