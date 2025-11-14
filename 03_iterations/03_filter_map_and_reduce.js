const coding = ["js", "cpp", "python", "java"]

// const values = coding.forEach((item) => {
//     return item
// })

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNums);

// const newNums = myNums.map((num) => {
//     return num+10
// })
// console.log(newNums)

// const newNums = myNums
// .map((num) => num *10)
// .map((num) => num+1)
// .filter((num) => num>40)

// console.log(newNums)

const myTotal = myNums.reduce(function(acc, currval){
    return acc+currval
},0)

console.log(myTotal)