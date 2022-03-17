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

// Classic function (Classic Vanilla JS)

let classicFunctionSyntax = function() {
    console.log('I am a \'classic\' function');
}

classicFunctionSyntax();

// ES6 function (Modern Approach)

let esSixFunction = () => {
    console.log('I am an ES6 function')
}
esSixFunction()

