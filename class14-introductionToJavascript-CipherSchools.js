// console.log("My console statement!!")

// Datatyes

// Syntax and Declaration
// var score = 10;  // ES5 - Ecma
// let result = 50; // ES6 - Ecmascript 2015
// // Convention for constants is capital
// const PI = 3.14; // ES6 feature

// score = 15;
// result = 55;
// // PI = 3.141; We cannot assign to const

// console.log(score);
// console.log(result);
// console.log(PI);

/**
 * Datatypes
 * 1- Number
 * 2- Strings
 * 3- Boolean
 * 4- Null
 * 5- Undefined
 * 6- Objects
 * 7- Symbols (ES6)
 * 
 * Loosely Typed Language 
 */

// let score = 10; // Number datatype
// let result = '10'; // String datatype (use initially single quote, if needed then use double quote)
// console.log(score, result);

// Operators 
    // Uses BEDMAS (Bracket Exponent Division Multiplication Addition Subtraction)
    // let finalScore = score + result;    // Concatenation (treated as strings)
    // let penalty = score - result;       // Mathematical (treated as number)
    // let totolGames = '5';
    // let averageScore = finalScore / totolGames;
    // console.log(finalScore, penalty);
    // console.log(averageScore);
    // console.log(typeof(finalScore), typeof(penalty));
    // console.log(typeof(averageScore));

    // let value = (finalScore**2) * 10 / (penalty + totolGames);
    // console.log(value);

    // NaN - Not a Number
    // let totolGames = 'five'
    // console.log(totolGames * penalty)   // NaN

// Strings
    // console.log(typeof 'Hello');
    // let word = "raining";   // Stores as 'String.prototype' (capital 'S')
    // let number = 10
    // console.log(number.toUpperCase());   // Not for a number
    // console.log(word.toUpperCase());
    // let string = "String as a name";
    // let number = "Number as a var";
    // console.log(string, number);    // We can use these as identifiers
    // let String = 100121201;
    // console.log(String);    // We can also use String as identifier (loosely bound)
    // We cannot use 'let', 'var' etc as identifiers

    // console.log('Hemlo and good evening'.length);   // length is a proerty
    // console.log('Hemlo'.charAt(4));

// Boolean (true (1), false(0))
    // console.log(typeof 1);
    // console.log(typeof true);
    // console.log(typeof false);
    // console.log(isNaN('five'));

    // Truthy Values- Any value except 0, false, '', NaN, undefined, null

    // let condition = 10 / 'Hemlo';   // NaN

    // if (condition)
    // {
    //     console.log("Very true :)");
    // }
    // else
    // {
    //     console.log("Very wrong :(");
    // }
    
    // console.log('Hemlo'.includes('e'));
    
// Null & undefined
    // let score;
    // let result = null;  // null is an object
    // console.log(typeof score);  // undefined
    // console.log(typeof result); // object
    // if (result)
    // {
    //     console.log("Very true :)");
    // }
    // else
    // {
    //     console.log("Very wrong :(");
    // }