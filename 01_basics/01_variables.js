const accountId = 12345; // integer
let accountEmail = "abc@abc.com"
var accountPassword = "839434"
accountCity = "Indore"

accountEmail = "xyz@xyz.com"
accountPassword = "123456"
accountCity = "Jaipur"

console.log(accountId)


/* 
Prefer not to use var
because of issue in block and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])