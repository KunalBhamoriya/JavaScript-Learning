let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toDateString())
// console.log(typeof(myDate))

// let myCreatedDate = new Date(2025, 0, 17, 5, 3)  ---(year, month{jan}, date, hours, minutes)
// console.log(myCreatedDate.toDateString())

let myCreatedDate = new Date("2025-01-29")

let mytimeStamp = Date.now()

// console.log(mytimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());

newDate.toLocaleDateString('default', {
    weekday: "long",
})

