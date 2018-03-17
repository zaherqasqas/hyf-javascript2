
// let inputElement = document.getElementById("input1")

// inputElement.textContent("keydown", (data)) =>


// textOfH1.forEach((element) => {
//     console.log(element.textContent);
// })

// function (element) {
//     console.log(element.textContent);
// }
// let input
// Open a new js file and start by declaring an array that contains 10 strings.
// -- These strings should be of book titles you have read(or made up)
// -- and be lowercase without spaces or special characters so that you can use these later as Id's.
// -- (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).
// Make a function (or functions) that generate a ul with li 
// --elements for each book ID in the array using a for loop.



// let arr = [
//     "charlotte_web",
//     "mieko_and_the_fifth_treasure",
//     "the_outsiders",
//     "the_house_on_mango_street",
//     "thirteen_reasons_why",
//     "peter_pan",
//     "the_old_man_and_the_sea",
//     "the_giver",
//     "Number the Stars",
//     "a_wrinkle_in_time"
// ]


// let listOfBooks = document.createElement("ul");
// let Book = document.createElement("li");
// document.body.appendChild(listOfBooks);
// listOfBooks.appendChild(Book);
// console.log(Book);

// console.log(arr)
// function generater() {
//     console.log("Hi");
//     document.write("<ul>")
//     for (i = 0; i < arr.length; i++) {
//         document.write("<li>" + arr[i] + "</li>");
// Book.attributes(arr[i]);
// document.body.write("<li>" + arr[i] + "</li>");
// ul = document.
// ul = document.write("<ul>" + MyBooks + "</ul>");
// console.log(ul);
//     }
//     document.write("</ul>")
// }
// generater()

// console.log("MO")
// var charlotte_web = { id: "charlotte_web", title: "Charlottes Web", language: "English", author: "E.B.White" },
//     mieko_and_the_fifth_treasure = { id: "mieko_and_the_fifth_treasure", title: "Mieko and the Fifth Treasure", language: "English", author: "Eleanor Coerr" },
//     the_outsiders = { id: "the_outsiders", title: "The Outsiders", language: "English", author: "S.E.Hinton" },
//     the_house_on_mango_street = { id: "the_house_on_mango_street", title: "The House On Mango Street", language: "English", author: "Sandra Cisneros" },
//     thirteen_reasons_why = { id: "thirteen_reasons_why", title: "Thirteen Reasons Why", language: "English", author: "Jay Asher" },
//     peter_pan = { id: "peter_pan", title: "Peter Pan", language: "English", author: "J.M.Barrie" },
//     the_old_man_and_the_sea = { id: "the_old_man_and_the_sea", title: "The Old Man and the Sea", language: "English", author: "Ernest Hemmingway" },
//     the_giver = { id: "the_giver", title: "The Giver", language: "English", author: "Lois Lowry" },
//     Number_the_Stars = { id: "Number_the_Stars", title: "Number the Stars", language: "English", author: "Lois Lowry" },
//     a_wrinkle_in_time = { id: "a_wrinkle_in_time", title: "A Wrinkle In Time", language: "English", author: "Madeline L’engle" };
// console.log("afterMO");
// document.write(the_outsiders);
// document.write(charlotte_web.title);
// for (var infoBook in charlotte_web) {
//     document.write(charlotte_web[infoBook]);
// }
// function generaterBook() {
//     console.log("hoi");
//     // for (i = 0; i < arr.length; i++) {

// }

// generaterBook()

// var i = 0;
// for (; ;) {
//     if (i > 10) break;
//     console.log(i);
//     i++;
// }


/*
// TEST YOUTUBE 
function generateYears(Start, End) {
    // "use strict";
    var years;
    document.write("<select>");
    for (years = Start; years <= End; years++) {
        document.write("<option value=\"" + years + "\">" + years + "</option>")
        // console.log(years);
    }
    document.write("</select>");
}
generateYears(2000, 2018);
generateYears(1900, 2000);


// WHILE 
var i = 0

while (i <= 10) {
    console.log(i);
    i++;
}

// DO WHILE
var i = 0

do {
    console.log(i);
    i++;
} while (i <= 10);

*/
/*
const books = {
    "charlotte_web": { title: "Charlottes Web", language: "English", author: "E.B.White" },
    "mieko_and_the_fifth_treasure": { title: "Mieko and the Fifth Treasure", language: "English", author: "Eleanor Coerr" },
    "the_outsiders": { title: "The Outsiders", language: "English", author: "S.E.Hinton" },
    "the_house_on_mango_street": { title: "The House On Mango Street", language: "English", author: "Sandra Cisneros" },
    "thirteen_reasons_why": { title: "Thirteen Reasons Why", language: "English", author: "Jay Asher" },
    "peter_pan": { title: "Peter Pan", language: "English", author: "J.M.Barrie" },
    "the_old_man_and_the_sea": { title: "The Old Man and the Sea", language: "English", author: "Ernest Hemmingway" },
    "the_giver": { title: "The Giver", language: "English", author: "Lois Lowry" },
    "number_the_stars": { title: "Number the Stars", language: "English", author: "Lois Lowry" },
    "a_wrinkle_in_time": { title: "A Wrinkle In Time", language: "English", author: "Madeline L’engle" }
};

function infoBooks() {
    var ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (var book in books) {
        var info = (books[book]);
        console.log(info);
        var li = document.createElement("li");
        var p = document.createElement("p");
        var div = document.createElement("div");
        var h1 = document.createElement("h1");
        var img = document.createElement("img");

        img.setAttribute("src", "http://via.placeholder.com/100X100");
        img.setAttribute("id", book);
        img.setAttribute("alt", info.title + " photo")

        // img.setAttribute('id', book);
        // p.textContent(info);
        li.innerText = info.title;
        p.innerText = info.language;
        div.innerText = info.author;

        h1.appendChild(img);
        li.appendChild(h1);
        ul.appendChild(li);
        li.appendChild(p);
        p.appendChild(div);
    }
}
infoBooks();
*/

/*
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
        // console.log(i);
    }
    console.log(i);
    console.log(numbers);
    console.log(newNumbers);
}
*/

/*
//Array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 32, 23, 643, 67, 5876, 6345, 34, 3453];
//Array of even numbers
var evenNumbers = [];
//Array of odd numbers
var oddNumbers = [];

function classifyNumbers(arr) {
    //go through the numbers one by one
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 == 0) {
            //Push the number to the evenNumbers array
            evenNumbers.push(arr[i]);
        } else {
            //Push the number to the oddNumbers array
            oddNumbers.push(arr[i]);
        }
    }
}

classifyNumbers(numbers);

console.log('Even numbers: ' + evenNumbers);
console.log('Odd numbers: ' + oddNumbers);

*/


// var numbers = [1, 2, 3, 4, 5, 6, 7];

// var newNumbers = numbers.map(function (number) {
//     return number * 2;
// });

// console.log("The doubled numbers are", newNumbers); // [2, 4, 6, 8]
/*
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]
*/

/*
var myEvenArray = myArray.filter(even);
console.log(myEvenArray)

var even = function (num) {
    return num % 2 === 0;
};
x = 4 % 2 === 0; // returns true
y = 5 % 2 ==== 0; // returns false
*/

/*
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var x = myArray.filter(no => {
    return no % 2 !== 0;
}).map(number => {
    return number * 2
})
num = console.log(x);
// console.log(num * x);
*/



/*
let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];



let tasks = monday.concat(tuesday);


//Collect two days' worth of tasks.
var toDo = tasks.map(item => {
    return item.name;
});
console.log(toDo);

// Convert the task durations to hours, instead of minutes.
var time = tasks.map(hour => {
    return hour.duration / 60;
})
console.log(time);
*/


/* Filter out everything that took two hours or more(remove from the collection */
/*
var sTime = time.filter(Min2 => {
    return Min2 <= 1.99;
    // console.log(sTime <= 2);
})
console.log(sTime);
*/

// function foo(func) {
//     // What to do here? 
// }

// function bar() {
//     console.log('Hello, I am bar!');
// }

// foo(startYalue, endValue, divisible3, divisible5);


// function div3() {
//     var i;
//     for (i = 0; i < arr.length; i++) {
//         newI3 = arr[i] / 3;
//         newI5 = arr[i] / 5;
//         // console.log(newI3 + " Hi");
//         if (arr[i] % 3 === 0) {
//             i3 = console.log(newI3)
//         } if (arr[i] % 5 === 0) {
//             i5 = console.log(newI5)
//         }
//     }
// };
// div3();




// function processUserInput(callback) {
//     var name = console.log('Please enter your name.');
//     callback(name);
// }

// processUserInput(greeting);

// function div5() {
//     var i;
//     for (i = 0; i < arr.length; i++) {
//         newI5 = arr[i] / 5;
//         // console.log(newI + " Hi");
//         if (newI5 >= 2) {
//             console.log(newI5)
//         }
//     }
// };
// div5();
// 2. You must write a function that takes 4 arguments. 
// - A start value - An end value - A callback to call if the number is divisible by 3 - A callback to use if the number is divisible by 5

// The function should generate an array containing values from start value to end value(inclusive).

// Then the function should iterate over the array and call the first callback if the array value is divisible by 3

// The function should call the second callback if the array value is divisible by 5

// Both functions should be called if the array value is divisible by both 3 and 5
// function div3(callback) {
//     for (i = startValue; i <= endValue; i++) {
//         newI3 = arr[i] / 3;
//         if (arr[i] % 3 === 0) {
//             var yes3 = console.log(newI3)
//         }
//     }
// }
// function div5(newI5) {
//     for (i = 0; i < arr.length; i++) {
//         newI5 = arr[i] / 5;
//         if (arr[i] % 5 === 0) {
//             var yes5 = console.log(newI5)
//         }
//     }
// }
// div5(div3);


function callback_3(i) {
    console.log(i + " is divisible by 3")
}
function callback_5(i) {
    console.log(i + " is divisible by 5")
}

function threeFive(startValue, endValue, callback3, callback5) {
    var myArr3 = [];
    var myArr5 = [];
    for (var i = startValue; i <= endValue; i++) {
        if (i % 3 == 0) {
            callback3(i);
            myArr3.push(i);
        }
        if (i % 5 == 0) {
            callback5(i);
            myArr5.push(i);
        }
    }
    console.log(myArr3, myArr5);
}
let div35 = threeFive(10, 15, callback_3, callback_5);
console.log(div35);


var arr2d = [[1, 2], [3, 4], [5, 6]]
var i0 = arr2d[0][0];
console.log(i0)




