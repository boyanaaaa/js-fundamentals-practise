//select a random element from array with Math.random()
/*
let arr = ["GFG_1", "GeeksForGeeks",
    "Geeks", "Computer Science Portal"];

function GFG_Fun() {
    console.log(arr[(Math.floor(Math.random() * arr.length))]);
}
GFG_Fun() */


//generate a number between(a to b, b exclusive)
/*
let arr = ["GFG_1", "GeeksForGeeks",
    "Geeks", "Computer Science Portal"];

    function random(a,b){
        return Math.random() * (b - a) + a;
    }

    function GFG_Fun() {
        console.log(arr[(Math.floor(random(1,5))) - 1]);
    }
    GFG_Fun();
    */


    //using lodash _.sample method
    /*
    const _ = require("lodash");
    let array1 = ([3,4,6,8,22,63,846]);
    let gfg = _.sample(array1);
    console.log("original array:", array1);
    console.log("random:", gfg);
    */


    //using array.slice() with Math.random()
    /*
    function getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomElement = array[randomIndex];
        return randomElement;
    }

    const array = [1,4,8,37,79,24,789,33,568,2,111];
    const randomElement = getRandomElement(array);
    console.log("random element selected:", randomElement);
    console.log("original array:", array);
    */



    // IF practise
    /*
    function checkAge(age) {
        return (age > 18) ? console.log("Allowed") : 
        console.log('Did parents allow you?');
      }

   checkAge(5);
   checkAge(20);
   checkAge(0);
   checkAge();
   */


   //Function min(a, b)
   /*
   function min(a,b){
    return ( a < b) ? console.log(a) : console.log(b);
   }

min(2, 5)
min(3, -1)
min(1, 1)
*/

//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
/*
function pow(x,n){
    let result = x;

    for ( let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if ( n < 1) {
    alert(`Power ${n} is not supported, use a positive integer.`);
} else {
    alert(pow(x,n));
}
*/


