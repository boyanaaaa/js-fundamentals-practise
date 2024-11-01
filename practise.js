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


  /* Map to names */
  /*
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let users = [ john, pete, mary ];

  let names = users.map(user => user.name);
  let ages = users.map(user => user.age);

  console.log(names);
  console.log(ages);
  */






/*You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName, 
where fullName is generated from name and surname. */

/*
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let userMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}))

console.log(userMapped);
*/




/* Sort users by age */
/*

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(arr){
    arr.sort((a,b) => a.age - b.age);
    console.log(arr);
}

sortByAge(arr);
*/




/* Shuffle an array */
/*
let arr = [1, 2, 3, 4, 5];
function shuffle(array){
    array.sort(() => Math.random() - 0.5);
    console.log(array);
}
shuffle(arr);
shuffle(arr);
shuffle(arr);
*/



/* Get average age */
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(users){
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;


}
console.log(getAverageAge(arr));
*/


/* Filter unique array members 
Create a function unique(arr) that should
return an array with unique items of arr.
*/
/*
function unique(arr) {
    let result = [];

    for( let str of arr){
        if (!result.includes(str)){
            result.push(str);
        }
    }
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];


  console.log(unique(strings));
  */





  /* Create keyed object from array 
  Create a function groupById(arr) that creates an object from it,
  with id as the key, and array items as values.
  */
/*
  let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  

  function groupById(array){
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {} )
}

let usersById = groupById(users);
console.log(usersById);
*/




/* Exercise 09 - Palindromes */
/*
function palindromes(string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const newString = string
    .toLowerCase()
    .split('')
    .filter((char) => alphanumerical.includes(char))
    .join('');

    const reversedString = newString.split('').reverse().join('');

    return reversedString === newString;

};


console.log(palindromes('bobob'));
*/



/* Exercise 10 - Fibonacci 
The first few Fibonacci Number are 0, 1, 1, 2, 3, 5, 8.....
0th Fibonacci number is consider as 0. 
*/
/*
function fibonacci(number){
   let num1 = 0;
   let num2 = 1;
   let sum;
   if ( number === 1){
    return num1;
   } else if ( number === 2){
    return num2;
   } else {
    for(let i = 3; i <= number; i++){
        sum = num1 + num2;  
        num1 = num2; 
        num2 = sum; 
    }
    return num2;
   }

}

console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));
*/


/* Exercise 11 - Get the Titles!
Write a function that takes the array 
and returns an array of titles: ['Book','Book2'] */

/*
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]


  function returnBooks(array){
    return array.map((book) => book.title);
  }

  console.log(returnBooks(books));
  */




  /* Exercise 12 - Find the Oldest 
  Given an array of objects representing people 
  with a birth and death year, return the oldest person. */

  /*
  const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

    function getAge (birth, death){
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
  }
*/

  //if (!death) checks if the death parameter is undefined, 
  //null, or 0. If any of these is the case, 
  //it means that yearOfDeath wasn't specified, 
  //indicating the person is still living.

  // When the person is alive, the function calculates 
  // their age by treating death as the current year, 
  // retrieved with new Date().getFullYear().

/*
    function findTheOldest (people){
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return oldestAge < currentAge ? currentPerson : oldest;
    })
  }


  console.log(findTheOldest(people));
*/

