//const instaUser = new Object()
const instaUser = {}

instaUser.id = "123ssf"
instaUser.name = "abc"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kunal",
            lastname : "bhamoriya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 =  Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "abc@abc.com"
    },
    {
        id: 1,
        email: "abc@abc.com"
    },
    {
        id: 1,
        email: "abc@abc.com"
    }
]
// console.log(users[0].id)

// console.log(Object.keys(instaUser));  // array of keys
// console.log(Object.values(instaUser)) // array of values

// console.log(instaUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName : "js",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(instructor)