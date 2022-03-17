let firstFunction = () => { 
    let xVar = 5; 
    let yVar = 10; 
    let multipliedNumber = xVar * yVar; 

    console.log('result is: ' + multipliedNumber); 
} 
firstFunction();
firstFunction();
firstFunction();

console.log(typeof firstFunction);

/* syntax of functions */

// Classic function (Classic Vanilla JS - prior ES6)

let classicFunctionSyntax = function() {
    console.log('I am a \'classic\' function');
}

classicFunctionSyntax();

// ES6 function (Modern Approach)

let esSixFunction = () => {
    console.log('I am an ES6 function')
}
esSixFunction();

// adding a return
/*  
    The return statement stops the execution of a function and 
    returns a value.
*/


let aFunctionWithAReturn = () => {
    let varX = 5;
    let varY = 10;
    let result = varX * varY;

    return result;
}

let outputOfFunction = aFunctionWithAReturn();

console.log('The number is: ' + outputOfFunction);

 let parameterFunctions = (varX, varY) => {
     let result = varX * varY;
     return result;
 }

 let outputOfParamFunction = parameterFunctions(30, 50);

    console.log('The value is: ' + outputOfParamFunction);

 outputOfParamFunction = parameterFunctions(0.75, 0.5);

    console.log('The value is: ' + outputOfParamFunction);