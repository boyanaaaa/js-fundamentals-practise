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





//Launch countdown
/*
const output = document.querySelector('.output');
for(let i = 10; i >= 0; i-- ){
    const para = document.createElement('p');
    output.appendChild(para);
    if ( i === 10){
        para.textContent = " Countdown 10";
    } else if ( i === 0){
        para.textContent = "Blast off!";
    } else {
        para. textContent = i;
    }     
}
    */







//Guest List
//In this exercise, we want you to take a list of names stored in an array 
// and put them into a guest list. But it's not quite that easy — 
// we don't want to let Phil and Lola in because they are greedy and rude,
// and always eat all the food! We have two lists, one for guests to admit, and one for guests to refuse.
/*
const people = ['Chris', 'Anne', 'Colin', 'Terri', 
    'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

    const admitted = document.getElementsByClassName("admitted")[0];
    const refused = document.getElementsByClassName("refused")[0];
    
    for( const person of people) {
        if( person === "Phil" || person === "Lola"){
            refused.textContent  += `${person} `
        } else {
            admitted.textContent += `${person} `
        }
    }
*/



/*
let i = 0;
while ( i < 3) {
    alert( i );
    i ++;
}
*/

/*
let i = 5;
while (i) alert(i--);
*/

/*
let i = 0;
do {
    alert(i);
    i++;
} while ( i < 3);
*/



/* Objects Basics */
/*
function sumOfTrippledEvens(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0 ) {
            const trippledEven = array[i] * 3;
            sum += trippledEven;

        }
    }
    return sum;
}

sumOfTrippledEvens([1,2,3,4]);
*/


/* Map method */
/*
function addOne(num) {
    return num + 1;
  }
  const arrayNum = [18, 2, 3, 4, 5];
  const mappedArr = arrayNum.map(addOne);
  console.log(mappedArr); 
  */

  /*
  const arr = [1,3,5,7];
  const mapArr = arr.map((num) => num + 1);
  console.log(mapArr);
  */

  /* Filter method */
/*
function isOdd(num) {
    return num % 2 !== 0;
}
const arr = [1,2,3,4,5];
const oddNums = arr.filter(isOdd);
console.log(oddNums);
console.log(arr);
*/


/* Reduce method */
/*
const arr = [1,2,3,4,5];
const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);
console.log(productOfAllNums);
console.log(arr);
*/

/* Rewrite the sumOfTripledEvens(array) function using these three methods. */
/*
function sumOfTripledEvens(array) {
    return array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr);
  }

const arr = [1,2,3,4,5];
sumOfTripledEvens(arr);
console.log(sumOfTripledEvens);
*/



/* Write the function camelize(str) 
that changes dash-separated words like 
“my-short-string” into camel-cased “myShortString”. */

/*
function camelize(string){
    return string.split('-')
    .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
    .join('');
}


console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))
*/




/* Filter range */
/*
let arr = [5, 3, 8, 1];
function filterRange(arr, a, b){
    return filtered = arr.filter((num) => num >= a && num <= b);
}

console.log(filterRange(arr,1, 4));
console.log(arr);
*/



/* Filter range "in place" */
/*
let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b){
    for ( let i = 0; i < arr.length; i ++){
        let value = arr[i];
        if ( value < a || value > b){
            arr.splice(i,1);
            i--;
        }

    }
    return arr;
}

console.log(filterRangeInPlace(arr,1,4));
*/



/* Sort in decreasing order */
/*
let arr = [5, 2, 1, -10, 8];
function sortInDecreasingOrder(arr){
    return arr.sort((a,b) => b - a );
}

sortInDecreasingOrder(arr);
console.log(arr);
*/




/* Copy and sort array */
/*
function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr);
  
  console.log( sorted );
  console.log( arr );
  */