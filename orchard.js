///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE


// create variable called `totalAcres` and set to 0.

let totalAcres = 0;

// create for loop for the 3 different apple array's. while creating 3 new variables for number of acres picked for each array. After create a formula to add all acres picked and reassign value of totalAcres

for(let i = 0; i < fujiAcres.length; i++){
    let fujiAcresPicked = fujiAcres[i];
    let galaAcresPicked = galaAcres[i];
    let pinkAcresPicked = pinkAcres[i];

    totalAcres += fujiAcresPicked + galaAcresPicked + pinkAcresPicked;
}

// console.log totalAcres

console.log(totalAcres)



console.log('------------')


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// using the for loop above that calculated the total number acres picked we can create a new variable called averageDailyAcres and divide totalAcres by the length of fujiAcres since each array has 7 days each.


let averageDailyAcres = totalAcres / fujiAcres.length;

console.log(averageDailyAcres)



console.log('------------')

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE


// create while loop that runs as long as acresLeft is above 0. Add 1 to each day each time the loop runs until acreLeft is 0 or below. create formula to subtract averageDailyAcres from acresLeft, console log days.

while(acresLeft > 0){
    days++;
    acresLeft = acresLeft - averageDailyAcres;
}

console.log(days);

console.log('------------')



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE


// This problem we needed to create 3 new arrays for the tons picked per acre. Set tonsPerAcres as a const variable = 6.5. and then created a for loop to used the length of the original array while creating 3 new variables = acres picked. I referenced this new variables to the 3 original arrays. After I created 3 more variables that the total of acres picked * tonsPerAcre. From here I pushed the variable tons picked into the 3 new Tons arrays. and console logged each one. 

let fujiTons = [];
let galaTons = [];
let pinkTons = [];


const tonsPerAcres = 6.5;


for(let i = 0; i < fujiAcres.length; i++){
    let fujiAcresPicked = fujiAcres[i];
    let galaAcresPicked = galaAcres[i];
    let pinkAcresPicked = pinkAcres[i];

    let fujiTonsPicked = fujiAcresPicked * tonsPerAcres;
    let galaTonsPicked = galaAcresPicked * tonsPerAcres;
    let pinkTonsPicked = pinkAcresPicked * tonsPerAcres;

    fujiTons.push(fujiTonsPicked);
    galaTons.push(galaTonsPicked);
    pinkTons.push(pinkTonsPicked);
}

console.log(fujiTons);

console.log(galaTons);

console.log(pinkTons);


console.log('------------')


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 


// This problem we needed to turn the previous 3 arrays of 'Tons' into pounds. I created 3 new arrays 'Pounds' and created an for loop referencing the original acres length. I then created 3 new variables called 'poundsPicked' and multiplied the 'Tons' arrays by 2000 to get each value to convert to pounds. I then used a push function to push poundsPicked into the new 'Pounds' arrays. And console.logged it.



let fujiPounds = [];
let galaPounds = [];
let pinkPounds = [];


for(let i = 0; i < fujiAcres.length; i++){
    let fujiPoundsPicked = 2000 * fujiTons[i];
    let galaPoundsPicked = 2000 * galaTons[i];
    let pinkPoundsPicked = 2000 * pinkTons[i];

    fujiPounds.push(fujiPoundsPicked);
    galaPounds.push(galaPoundsPicked);
    pinkPounds.push(pinkPoundsPicked);
}

console.log(fujiPounds);

console.log(galaPounds);

console.log(pinkPounds);


console.log('------------')



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// To find the profit of each type of apple I needed to create 3 more arrays called 'Profit'. I then created 3 new variables called 'Sum'. I created a for loop referencing the length of the original array. I created 3 new variables called 'Income' and created a formula to multiple price and pounds[i] array. I created a push function pulling from the new 'Income' variable. After that I needed to create another for loop to find the sum of each array for each type of apple. After finding each sum of each apple I was able to console.log the total for profit for each type of apple.


let fujiProfit = [];
let galaProfit = [];
let pinkProfit = [];

let fujiSum = 0;
let galaSum = 0;
let pinkSum = 0;


for(let i = 0; i < fujiAcres.length; i++){
   let fujiIncome = fujiPrice * fujiPounds[i];
   let galaIncome = galaPrice * galaPounds[i];
   let pinkIncome = pinkPrice * pinkPounds[i];

   fujiProfit.push(fujiIncome);
   galaProfit.push(galaIncome);
   pinkProfit.push(pinkIncome);
}

for(let i = 0; i < fujiAcres.length; i++){
 fujiSum += fujiProfit[i];
 galaSum += galaProfit[i];
 pinkSum += pinkProfit[i];
}


console.log(fujiSum);

console.log(galaSum);

console.log(pinkSum);



console.log('------------')


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE


// After finding the total profit for each type of apple I created a totalprofit variable and added the sums of each profit from each apple for total profits. 


let totalProfit = fujiSum + galaSum + pinkSum


console.log(totalProfit)