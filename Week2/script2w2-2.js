
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


/* Filter out everything that took two hours or more(remove from the collection */
var sTime = time.filter(Min2 => {
    return Min2 <= 1.99;
})
console.log(sTime);
