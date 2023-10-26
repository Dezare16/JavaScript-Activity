//1. Create a function called myFunction that console logs the text Hello World

    function greeting() {
        console.log('Hello Worlddd');

    }

//2. Execute the function declared above

    greeting();

//3. Create a function that takes a number as a parameter. This function should return a number that is double the number in the parameter 

    function doubleNumber(number){
        return number * 2;
    }

    let problem = doubleNumber(7);
    console.log(problem);

//4. Create a function that takes 2 numbers and multiplies them together

    function multiplyNumbers(number1, number2) {
        return number1 * number2;
    }
        let number = multiplyNumbers(2, 4)
        console.log(number);

//5. Create a function that takes a string and IF the string is rainy, console logs "Bring an umbrella!"
        function checkingWeather(weather){
            if (weather === "rainy"){
                console.log("Bring an umbrella!")
            }
        }
            checkingWeather("rainy")

6. Write out what you think this will print
console.log(1) Render the number one to the console.
console.log(2) Render the number two to the console.

function callMe() {
console.log(3)
}

console.log(4) Render number 4 to the console.
blondie()Render number 5 to the console.
callMe() Render number 3 to the console.

function blondie() {
console.log(5)
}       

console.log(6)
callMe()
console.log(7)