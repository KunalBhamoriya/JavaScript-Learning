// falsy values
/*
false
0
-0
""
null
undefined
NaN
*/

//truthy values
// "0", "false", " ", [], {}, function(){}, true


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log(`Object is Empty`);
}



// nullish coalescing operator
let val1
val1 = null ?? 10
// console.log(val1);


//Terniary Operator
// ? : 