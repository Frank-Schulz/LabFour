// Start of decimal conversion function
function binary(decimal) {
    // reset num
    num = [];

    // catch for if decimal is zero
    if (decimal == 0) {
        return 0;
    }

    // binary constructor
    while (decimal > 0) {
        result = decimal % 2;
        decimal = Math.floor(decimal/2);
        console.log(decimal);
        console.log(result);

        num.unshift(result);
    };
    
    console.log(num);
    // return given decimal as binary
    return(num.join(''))
}

// declare variables
let decimal = 0;
let result = 0;
let num = [];

// calling the function
console.log(binary(0));
console.log(binary(10));
console.log(binary(52));
console.log(binary(32));

// End of decimal conversion function