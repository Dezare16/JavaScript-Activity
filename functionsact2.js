//1. Create a function that takes a string as a parameter. If the string is equal to ping log pong to the console.

function checkString(inputString){
    if (inputString === "ping"){
        console.log ("pong");
    }
        
}
    checkString("ping");
    checkString("pong");

//2. Create a function that takes in a number. Console log that number squared 
    function squareAndLog(number){
        var squared = number * number;
        console.log(squared);
    }

    squareAndLog(7);
    squareAndLog(2);

//3. Create a function that console logs every number from 1-20
    function logNumbers(){
        for (let i = 1; i <= 20; i++){
            console.log(i);
        }
    }
    logNumbers();
//4. Create a function that console logs every odd number from 1-20
    function logOddNumbers(){
        for (let i = 1; i <= 20; i += 2){
            console.log(i);        
        
    }
    }

    logOddNumbers();

//5.   Create a function that takes a number as a parameter. Console log every number from 1 to that number.
    function logNumbers(number) {
        for (let i = 1; i <= number; i++){
            console.log(i)
        }
    }

    logNumbers(25);