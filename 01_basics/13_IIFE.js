// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB Connected`);
})();                            // semicolon in must in IIFE

( (name) => {
    console.log(`DB Connected 2`)
})("kunal")