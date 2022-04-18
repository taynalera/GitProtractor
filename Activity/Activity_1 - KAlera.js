// 1. Create a function that will accept 2 numbers and return their sum.

//Generate Random Number Function
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

//Assign 2 Random Numbers from 0-100
var random1 = generateRandomNumber(100); 
var random2 = generateRandomNumber(100); 

//Display generated Random Numbers
console.log("First Number is: " + random1);
console.log("Second Number is: " + random2);

//Add Function
function getSum(num1,num2)
{
    return num1 + num2;
}

//Display Sum of 2 Numbers
console.log("Sum is "+ getSum(random1,random2));

// 2. Then create a loop that prints 0 up to the returned sum.

var sum = getSum(random1,random2);

//Print all Numbers from 0 until the Sum is reached
for (i =0; i <= sum; i++)
{
    //Check if the Number is the Sum
    if (i == sum){
        console.log(i + " is the Sum");
    }
    else{
        console.log(i);
    }
}

// 3. Then print at the end, If the sum is odd or even.

//Check if Number is Odd or Even
if (sum % 2 == 0){
    console.log(sum + " is an even number");
}
else {
    console.log(sum + " is an odd number");
}